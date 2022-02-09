import React from "react";
import { useDispatch } from "react-redux";
import Dialog from "./Dialog";

interface Props {
}
const DialogContainer: React.FC<Props> = (props) => {
    const dispatch = useDispatch();

    return (
        <Dialog />
    );
}

export default DialogContainer;