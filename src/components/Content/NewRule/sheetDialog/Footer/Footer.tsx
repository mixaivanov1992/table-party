import { setActiveSheet } from '@store/reducer/activeSheetReducer';
import { setSheetCover } from '@store/reducer/chapterReducer';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '@hooks/useTypedSelector';
import InputCheckbox from '@shared/InputCheckbox/InputCheckbox';
import InputFile from '@shared/InputFile/InputFile';
import Localization from '@localization/components/content/newRule/sheetDialog/footer';
import React, { useState } from 'react';
import styles from '@css/content/newRule/sheetDialog/footer/Footer.module.scss';

const Footer:React.FC = () => {
    console.info('SheetDialog-Footer');
    const dispatch = useDispatch();

    const { language } = useTypedSelector((state) => state.mainSettingsReducer);
    Localization.setLanguage(language);

    const {
        chapterUid, sheetUid, content: sheetContent, cover: sheetCover,
    } = useTypedSelector((state) => state.activeSheetReducer);

    const regExpBase64 = new RegExp('/[A-Za-z0-9+/=]/');
    const base64 = sheetCover.split(',').pop() || '';
    const coverText = regExpBase64.test(base64) ? '' : sheetCover;
    const coverImage = regExpBase64.test(base64) ? sheetCover : '';

    const [coverIsImage, SetCoverIsImage] = useState<boolean>(!!coverImage);
    const [coverIsText, SetCoverIsText] = useState<boolean>(!!coverText);

    const onChangeCoverImage = (): void => {
        if (!coverIsImage) {
            SetCoverIsImage(true);
            SetCoverIsText(false);
        }
    };
    const onChangeCoverText = (): void => {
        if (!coverIsText) {
            SetCoverIsText(true);
            SetCoverIsImage(false);
        }
    };

    const onChangeSheetCover = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { currentTarget } = event;
        if (currentTarget.files) {
            const reader = new FileReader();
            reader.readAsDataURL(currentTarget.files[0]);
            reader.onload = () => {
                if (typeof reader.result === 'string') {
                    dispatch(setSheetCover(chapterUid, sheetUid, reader.result));
                    dispatch(setActiveSheet(chapterUid, sheetUid, sheetContent, reader.result));
                } else {
                    console.log('Error: Incorrect type');
                }
            };
            reader.onerror = (error) => {
                console.log('Error: ', error);
            };
        } else {
            dispatch(setSheetCover(chapterUid, sheetUid, currentTarget.value));
            dispatch(setActiveSheet(chapterUid, sheetUid, sheetContent, currentTarget.value));
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
                        accept=".jpg, .jpeg, .png"
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
                    />
                </div>
            </div>
        </div>
    );
};

export default Footer;
