import '@css/shared/editor/editor.scss';
import '@css/shared/editor/react-draft-wysiwyg.css';
import { ContentState, EditorState, convertToRaw } from 'draft-js';
import { Editor as Wysiwyg } from 'react-draft-wysiwyg';
import Localization from '@localization/components/shared/editor';
import React, { useState } from 'react';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

interface Props {
    initialState: string,
    editorResult(html: string): void
    errorMessage: React.Dispatch<React.SetStateAction<string>>;
}

const Editor: React.FC<Props> = (props) => {
    console.info('Editor');
    Localization.setLanguage(navigator.language);
    const { initialState, editorResult, errorMessage } = props;

    const { contentBlocks, entityMap } = htmlToDraft(initialState);
    const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
    const [editorState, setEditorState] = useState<EditorState>(EditorState.createWithContent(contentState));

    const getFileBase64 = (file: Blob, callback: (result: string | ArrayBuffer | null) => void): void => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onerror = () => {};
        reader.onload = () => callback(reader.result);
    };

    const imageUploadCallback = (file: Blob) => new Promise((resolve, reject) => {
        if (file.type !== 'image/jpeg' && file.type !== 'image/jpg') {
            errorMessage(Localization.incorrectFileFormat);
            reject();
        } else if (file.size > 5000000) {
            errorMessage(Localization.fileTooLarge);
            reject();
        } else {
            getFileBase64(
                file,
                (data) => resolve({ data: { link: data } }),
            );
        }
    });

    const onEditorStateChange = (value: EditorState) => {
        errorMessage('');
        setEditorState(value);
        const currentContent = draftToHtml(convertToRaw(value.getCurrentContent()));
        editorResult(currentContent);
    };
    return (
        <Wysiwyg
            onTab={(event) => {
                event.preventDefault();
                // eslint-disable-next-line
                const tabIndent = '     ';
            }}
            toolbarClassName="toolbar_wysiwyg"
            wrapperClassName="wrapper_wysiwyg"
            editorClassName="editor_wysiwyg"
            localization={{
                locale: navigator.language.split('-')[0],
            }}
            toolbar={{
                image: {
                    uploadCallback: imageUploadCallback,
                    previewImage: true,
                    inputAccept: '.jpg, .jpeg',
                },
            }}
            hashtag={{
                separator: ' ',
                trigger: '#',
            }}
            // spellCheck
            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
        />
    );
};

export default Editor;
