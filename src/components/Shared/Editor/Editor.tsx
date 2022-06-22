import '@css/shared/editor/editor.scss';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { ContentState, EditorState, convertToRaw } from 'draft-js';
import { Language } from '@models/language';
import { Editor as Wysiwyg } from 'react-draft-wysiwyg';
import React, { useState } from 'react';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

interface Props {
    initialState: string,
    language: Language,
    editorResult(html: string): void
}

const Editor: React.FC<Props> = (props) => {
    console.info('Editor');
    const { initialState, language, editorResult } = props;

    const { contentBlocks, entityMap } = htmlToDraft(initialState);
    const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
    const [editorState, setEditorState] = useState<EditorState>(EditorState.createWithContent(contentState));

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

    const onEditorStateChange = (value: EditorState) => {
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
                locale: language,
            }}
            toolbar={{
                image: {
                    uploadCallback: imageUploadCallback,
                    previewImage: true,
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