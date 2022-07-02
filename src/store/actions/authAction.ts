import { API_URL } from '@src/http';
import { AuthResponse } from '@models/services/authResponse';
import { Dispatch } from 'react';
import { ReducersActions } from '@models/actions/reducersAction';
import { ServerAnswer } from '@models/actions/serverAnswerAction';
import { login, logout, registration } from '@src/services/authService';
import { setPersonalData } from '@store/reducer/personalDataReducer';
import axios, { AxiosError } from 'axios';

export async function registrationAction<T extends object>(args: T): Promise<ServerAnswer> {
    const { email, password } = args as {email:string, password:string};
    try {
        await registration(email, password);
        return { isSuccess: true, message: '' };
    } catch (error) {
        const err = error as AxiosError;
        const message = err.response?.data?.message as string || '';
        return { isSuccess: false, message };
    }
}

export async function loginAction<T extends object>(args: T): Promise<ServerAnswer> {
    const { dispatch, email, password } = args as {dispatch:Dispatch<ReducersActions>, email:string, password:string};
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
}

export async function checkAuthAction<T extends object>(args: T): Promise<ServerAnswer> {
    const { dispatch } = args as {dispatch:Dispatch<ReducersActions>};
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
}

export async function logoutAction<T extends object>(args: T): Promise<ServerAnswer> {
    const { dispatch } = args as {dispatch:Dispatch<ReducersActions>};
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
}
