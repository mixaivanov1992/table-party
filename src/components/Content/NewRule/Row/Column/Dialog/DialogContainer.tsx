import React from 'react';
import Dialog from './Dialog';

interface Props {
    onClickShowDialog(isShow: boolean): void
}
const DialogContainer: React.FC<Props> = (props) => {
    const { onClickShowDialog } = props;
    return (
        <Dialog
            onClickShowDialog={onClickShowDialog}
        />
    );
};

export default DialogContainer;
