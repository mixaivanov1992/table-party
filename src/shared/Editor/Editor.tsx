import React from 'react';
import { Editor as EditorWysiwyg } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '@css/shared/editor/editor.scss';

const getFileBase64 = (file: Blob, callback): void => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => callback(reader.result);
    reader.onerror = () => {};
};

const imageUploadCallback = (file: Blob) => new Promise((resolve) => {
    getFileBase64(
        file,
        (data) => resolve({ data: { link: data } }),
    );
});

const Editor: React.FC = () => (
    <EditorWysiwyg
        toolbarClassName="toolbar_wysiwyg"
        wrapperClassName="wrapper_wysiwyg"
        editorClassName="editor_wysiwyg"
        localization={{
            locale: 'ru',
        }}
        toolbar={{
            image: {
                uploadCallback: imageUploadCallback,
                previewImage: true,
            },
        }}
    />
);

export default Editor;
