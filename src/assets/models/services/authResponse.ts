import { UserData } from './userService';

export interface AuthResponse{
    accessToken: string,
    refreshToken: string,
    userData: UserData
}
