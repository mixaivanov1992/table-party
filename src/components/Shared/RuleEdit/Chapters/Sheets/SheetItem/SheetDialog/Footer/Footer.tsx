import { setSheetCover } from '@store/reducer/sheetReducer';
import { showLoader } from '@store/reducer/loaderReducer';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '@hooks/useTypedSelector';
import InputCheckbox from '@shared/InputCheckbox/InputCheckbox';
import InputFile from '@shared/InputFile/InputFile';
import Localization from '@localization/components/shared/ruleEdit/chapter/settings/sheets/sheetItem/sheetDialog/footer';
import React, { useState } from 'react';
import styles from '@css/shared/ruleEdit/chapters/sheets/sheetItem/sheetDialog/footer/Footer.module.scss';

interface Props {
    chapterUid: string,
    sheetUid: string,
    sheetIndex: number,
    errorMessage: React.Dispatch<React.SetStateAction<string>>;
}

const Footer:React.FC<Props> = (props) => {
    console.info('SheetDialog-Footer');
    const dispatch = useDispatch();
    Localization.setLanguage(navigator.language);

    const {
        chapterUid, sheetUid, sheetIndex, errorMessage,
    } = props;

    const sheetCover = useTypedSelector((state) => state.sheetReducer[chapterUid][sheetIndex].cover);

    const regExpBase64 = new RegExp('/[A-Za-z0-9+/=]/');
    const base64 = sheetCover.split(',').pop() || '';
    const coverImage = regExpBase64.test(base64) ? sheetCover : '';

    const [coverText, setCoverText] = useState<string>(regExpBase64.test(base64) ? '' : sheetCover);
    const [coverIsImage, setCoverIsImage] = useState<boolean>(!!coverImage);
    const [coverIsText, setCoverIsText] = useState<boolean>(!!coverText);

    const onChangeCoverImage = (): void => {
        if (!coverIsImage) {
            setCoverIsImage(true);
            setCoverIsText(false);
        }
    };
    const onChangeCoverText = (): void => {
        if (!coverIsText) {
            setCoverIsText(true);
            setCoverIsImage(false);
        }
    };

    const onChangeSheetCover = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { currentTarget } = event;
        if (currentTarget.files) {
            dispatch(showLoader(true));
            const reader = new FileReader();
            reader.readAsDataURL(currentTarget.files[0]);
            reader.onload = () => {
                if (typeof reader.result === 'string') {
                    dispatch(setSheetCover(chapterUid, sheetUid, reader.result));
                } else {
                    errorMessage(Localization.failedUploadImage);
                }
            };
            reader.onerror = () => {
                errorMessage(Localization.failedUploadImage);
            };
            setTimeout(() => {
                dispatch(showLoader(false));
            }, 500);
        } else {
            setCoverText(currentTarget.value);
        }
    };

    return (
        <div className={styles.footer}>
            <legend>{Localization.sheetCover}</legend>
            <div className={styles.image}>
                <InputCheckbox
                    onChangeCheckbox={onChangeCoverImage}
                    name="coverImage"
                    text=""
                    isChecked={coverIsImage}
                />
                <div className={styles.wrapper}>
                    <InputFile
                        onChangeFile={onChangeSheetCover}
                        name="coverFile"
                        accept=".jpg, .jpeg"
                        text={Localization.coverImage}
                        isDisabled={!coverIsImage}
                    />
                    {coverImage ? <img src={coverImage} alt={Localization.coverImage} /> : ''}
                </div>
            </div>
            <div className={styles.text}>
                <InputCheckbox
                    onChangeCheckbox={onChangeCoverText}
                    name="coverText"
                    text=""
                    isChecked={coverIsText}
                />
                <div className={styles.wrapper}>
                    <input
                        onChange={onChangeSheetCover}
                        type="text"
                        value={coverText}
                        disabled={!coverIsText}
                        placeholder={Localization.coverText}
                        onBlur={(event) => {
                            dispatch(showLoader(true));
                            dispatch(setSheetCover(chapterUid, sheetUid, event.currentTarget.value));
                            setTimeout(() => {
                                dispatch(showLoader(false));
                            }, 500);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Footer;
