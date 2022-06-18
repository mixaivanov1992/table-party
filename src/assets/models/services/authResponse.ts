import { User } from './userService';

export interface AuthResponse{
    accessToken: string,
    refreshToken: string,
    user: User
}
