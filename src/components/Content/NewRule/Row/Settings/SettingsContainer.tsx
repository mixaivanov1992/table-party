import React from 'react';
import { useDispatch } from 'react-redux';
import { setColumnCount } from '@src/store/reducer/rowReducer';
import Settings from './Settings';

interface Props {
    columnCount: number,
    rowIndex: string,
}

const SettingsContainer: React.FC<Props> = (props) => {
    const dispatch = useDispatch();
    const onClickChangeColumnCount = ((index: string, columnCount: number) => {
        dispatch(setColumnCount(index, columnCount));
    });
    const { columnCount, rowIndex } = props;

    return (
        <Settings
            onClickChangeColumnCount={onClickChangeColumnCount}
            columnCount={columnCount}
            rowIndex={rowIndex}
        />
    );
};

export default SettingsContainer;
