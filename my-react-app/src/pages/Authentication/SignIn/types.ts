export interface ILogin {
    email: string;
    password: string;
}

export interface ITokenResponse {
    token: string;
}

export interface IGoogleAuth {
    access_token: string
}