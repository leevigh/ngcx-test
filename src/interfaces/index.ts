export interface IAccountDetails {
    username: string,
    email: string,
    password: string,
    confirm: string
}

export interface IPersonalDetails {
    firstname: string,
    lastname: string,
    country: string,
    language: string | Array<string> | any,
}

export interface ISocials {
    twitter: string,
    facebook: string,
    google: string,
    linkedin: string
}
