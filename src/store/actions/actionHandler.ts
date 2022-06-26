import { Dispatch } from 'react';
import { Language } from '@models/language';
import { ReducersActions } from '@models/actions/reducersAction';
import { ServerAnswer } from '@models/actions/serverAnswerAction';
import { showLoader } from '@store/reducer/loaderReducer';
import Localization from '@localization/actions/errors';

function errorText(language: Language, text: string): string {
    Localization.setLanguage(language);
    const propertyExist = Object.prototype.hasOwnProperty.call(Localization, text);
    if (propertyExist) {
        return Localization[text];
    }
    return Localization.unknownError;
}
// action, ...args - any remake
export async function actionHandler(dispatch: Dispatch<ReducersActions>, language: Language, action, ...args): Promise<ServerAnswer> {
    dispatch(showLoader(true));
    const result = { ...await action(dispatch, ...args) } as ServerAnswer;
    dispatch(showLoader(false));

    if (!result.isSuccess) {
        return { ...result, message: errorText(language, result.message) };
    }
    return result;
}
