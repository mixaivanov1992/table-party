import { ChapterAction } from '@models/reducer/chapterReducer';
import { LoaderAction } from '@models/reducer/loaderReducer';
import { NewRuleAction } from '@models/reducer/newRuleReducer';
import { PersonalDataAction } from '@models/reducer/personalDataReducer';
import { SheetAction } from '@models/reducer/sheetReducer';

export type ReducersActions = ChapterAction | SheetAction | NewRuleAction | PersonalDataAction | LoaderAction;
