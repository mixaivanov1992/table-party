import { API_URL } from '@src/http';
import { AuthResponse } from '@models/services/authResponse';
import { Dispatch } from 'react';
import { PersonalDataAction } from '@models/reducer/personalDataReducer';
import { ServerAnswer } from '@models/actions/serverAnswerAction';
import { login, logout } from '@src/services/authService';
import { setPersonalData } from '@store/reducer/personalDataReducer';
import axios, { AxiosError } from 'axios';

export const loginAction = (email: string, password: string) => async (dispatch:Dispatch<PersonalDataAction>): Promise<ServerAnswer> => {
    try {
        const response = await login(email, password);
        localStorage.setItem('token', response.data.accessToken);
        dispatch(setPersonalData(true));
        return { isSuccess: true, message: '' };
    } catch (error) {
        const err = error as AxiosError;
        const message = err.response?.data?.message as string || '';
        return { isSuccess: false, message };
    }
};

export const checkAuthAction = () => async (dispatch:Dispatch<PersonalDataAction>): Promise<ServerAnswer> => {
    try {
        const response = await axios.get<AuthResponse>(`${API_URL}/refresh-token`, { withCredentials: true });
        localStorage.setItem('token', response.data.accessToken);
        dispatch(setPersonalData(true));
        return { isSuccess: true, message: '' };
    } catch (error) {
        const err = error as AxiosError;
        const message = err.response?.data?.message as string || '';
        return { isSuccess: false, message };
    }
};

export const logoutAction = () => async (dispatch:Dispatch<PersonalDataAction>): Promise<ServerAnswer> => {
    try {
        await logout();
        localStorage.removeItem('token');
        dispatch(setPersonalData(false));
        return { isSuccess: true, message: '' };
    } catch (error) {
        const err = error as AxiosError;
        const message = err.response?.data?.message as string || '';
        return { isSuccess: false, message };
    }
};
