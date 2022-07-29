import { deleteChapters } from '@store/reducer/chapterReducer';
import { deleteSheets } from '@store/reducer/sheetReducer';
import { setGameName } from '@store/reducer/ruleReducer';
import { store } from '@store/index';
import { useDispatch } from 'react-redux';

export const useDeleteAllChapters = (ruleUid: string) => {
    const dispatch = useDispatch();
    return () => {
        const { chapterReducer } = store.getState();
        const chapters = chapterReducer[ruleUid].map((chapter) => (chapter.uid));
        dispatch(deleteSheets(chapters));
        dispatch(deleteChapters(ruleUid));
        dispatch(setGameName(ruleUid, ''));
    };
};
