import { deleteSheet } from '@store/reducer/sheetReducer';
import { setActiveSheet } from '@store/reducer/activeSheetReducer';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { v4 as uuidv4 } from 'uuid';
import Localization from '@localization/components/content/newRule/chapter/settings/sheets/sheetItem';
import React from 'react';
import styles from '@css/content/newRule/chapters/sheets/sheetItem/SheetItem.module.scss';

interface Props {
    chapterUid: string,
    sheetIndex: number
}

const SheetItem:React.FC<Props> = (props) => {
    console.info('sheetItem');
    const dispatch = useDispatch();

    const { language } = useTypedSelector((state) => state.mainSettingsReducer);
    Localization.setLanguage(language);

    const {
        sheetIndex, chapterUid,
    } = props;
    const sheetNumber = sheetIndex + 1;

    const sheetUid = useTypedSelector((state) => state.sheetReducer[chapterUid][sheetIndex].uid);
    const sheetContent = useTypedSelector((state) => state.sheetReducer[chapterUid][sheetIndex].content);
    const sheetCover = useTypedSelector((state) => state.sheetReducer[chapterUid][sheetIndex].cover);

    const coverImage = sheetCover.split(',').pop() || '';

    const regExpBase64 = new RegExp('/[A-Za-z0-9+/=]/');
    const cover = regExpBase64.test(coverImage) ? (
        <img
            src={sheetCover}
            alt={Localization.cover}
        />
    ) : <span>{sheetCover}</span>;

    const onClickActivateSheet = () => {
        dispatch(setActiveSheet(chapterUid, sheetUid, sheetContent, sheetCover));
    };
    const onClickDeleteSheet = (): void => {
        dispatch(deleteSheet(chapterUid, sheetUid));
    };

    return (
        <div className={styles.sheet}>
            <div
                role="button"
                tabIndex={-1}
                onKeyPress={() => {}}
                onClick={onClickActivateSheet}
                key={uuidv4()}
                className={styles.item}
            >
                {sheetCover ? (
                    <div className={styles.cover}>{cover}</div>
                ) : <div className={styles.number}>{`${Localization.sheetNumber}${sheetNumber}`}</div>}
            </div>
            <button
                type="button"
                onClick={onClickDeleteSheet}
            >
                {Localization.deleteSheet}
            </button>
        </div>
    );
};

export default SheetItem;
