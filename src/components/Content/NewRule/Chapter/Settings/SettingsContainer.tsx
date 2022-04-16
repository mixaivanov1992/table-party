import React from 'react';
import { useDispatch } from 'react-redux';
import { setColumnCount } from '@src/store/reducer/chapterReducer';
import Settings from './Settings';

interface Props {
    columnCount: number,
    chapterIndex: string,
}

const SettingsContainer: React.FC<Props> = (props) => {
    const dispatch = useDispatch();
    const onClickChangeColumnCount = ((index: string, columnCount: number) => {
        dispatch(setColumnCount(index, columnCount));
    });
    const { columnCount, chapterIndex } = props;

    return (
        <Settings
            onClickChangeColumnCount={onClickChangeColumnCount}
            columnCount={columnCount}
            chapterIndex={chapterIndex}
        />
    );
};

export default SettingsContainer;
