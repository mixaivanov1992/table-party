import { AuthResponse } from '@models/services/authResponse';
import { AxiosResponse } from 'axios';
import $api from '@src/http';

export async function login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/login', { email, password });
}

export async function registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/registration', { email, password });
}

export async function logout(): Promise<void> {
    return $api.post('/logout');
}
