import React from "react";
import { useDispatch } from "react-redux";
import Dialog from "./Dialog";

interface Props {
    onClickShowDialog(isShow: boolean): void
}
const DialogContainer: React.FC<Props> = (props) => {
    const dispatch = useDispatch();

    return (
        <Dialog
            onClickShowDialog = {props.onClickShowDialog}
        />
    );
}

export default DialogContainer;