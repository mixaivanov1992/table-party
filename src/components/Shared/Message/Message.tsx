import { showMessage } from '@store/reducer/messageReducer';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '@hooks/useTypedSelector';
import Dialog from '@shared/Dialog/Dialog';
import Localization from '@localization/components/shared/message';
import React from 'react';

const Message: React.FC = () => {
    console.info('Message');
    Localization.setLanguage(navigator.language);

    const dispatch = useDispatch();
    const { isOpen, title, content } = useTypedSelector((state) => state.messageReducer);

    const onClickCloseDialog = (): void => {
        dispatch(showMessage(false, '', ''));
    };
    return (
        <Dialog
            isOpen={isOpen}
            onClickCloseDialog={onClickCloseDialog}
            title={title}
            footer={(
                <div>
                    <button type="button" onClick={onClickCloseDialog}>{Localization.close}</button>
                </div>
            )}
            content={<div>{content}</div>}
        />
    );
};

export default Message;
