import { Dispatch } from 'react';
import { Language } from '@models/language';
import { LoaderAction } from '@models/reducer/loaderReducer';
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

export const actionHandler = (action:(dispatch: Dispatch<ReducersActions>) => Promise<ServerAnswer>, language: Language) => async (dispatch:Dispatch<LoaderAction>): Promise<ServerAnswer> => {
    dispatch(showLoader(true));
    const result = { ...await action } as ServerAnswer;
    dispatch(showLoader(false));
    if (!result.isSuccess) {
        return { ...result, message: errorText(language, result.message) };
    }
    return result;
};
