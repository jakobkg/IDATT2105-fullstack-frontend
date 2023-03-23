declare type TokenBody = {
    iss: string,
    id: number,
    type: "ADMIN" | "USER",
    exp: number,
    iat: number
}