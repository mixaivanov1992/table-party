import { ChapterAction } from '@models/reducer/chapterReducer';
import { NewRuleAction } from '@models/reducer/newRuleReducer';
import { PersonalDataAction } from '@models/reducer/personalDataReducer';

export type ReducersActions = ChapterAction | NewRuleAction | PersonalDataAction;
