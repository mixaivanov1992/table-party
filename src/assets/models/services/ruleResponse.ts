import { Chapters, Rule, Sheets } from '@models/services/ruleService';

export interface RuleResponse{
    rule: Rule,
    chapters: Chapters,
    sheets: Sheets
}
