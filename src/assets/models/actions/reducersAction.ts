import { ChapterAction } from '@models/reducer/chapterReducer';
import { LoaderAction } from '@models/reducer/loaderReducer';
import { PersonalDataAction } from '@models/reducer/personalDataReducer';
import { RuleAction } from '@models/reducer/RuleReducer';
import { SheetAction } from '@models/reducer/sheetReducer';

export type ReducersActions = ChapterAction | SheetAction | RuleAction | PersonalDataAction | LoaderAction;
