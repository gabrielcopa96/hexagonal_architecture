export interface AuthenticatedUser {
    id: string;
    email: string;
    name: string;
    token: string;
    refreshToken: string;
}

// utilizo el helper Omit para omitir los campos que no necesito en el front
export type User = Omit<AuthenticatedUser, 'id' | 'token' | 'refreshToken'>; 