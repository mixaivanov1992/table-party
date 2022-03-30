import { Editor as EditorWysiwyg }  from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '@css/content/newRule/row/column/dialog/editor/editor.scss';

interface Resolve { data: { link: string } }

const getFileBase64 = (file: Blob, callback): void => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => callback(reader.result);
    reader.onerror = error => {};
};
  
const imageUploadCallback = (file: Blob) => new Promise((resolve, reject) => {
    getFileBase64(
        file,
        data => resolve({ data: { link: data } })
    )
});

const Editor = () => (
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
)

export default Editor;