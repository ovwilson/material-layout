export interface KeyPair {
    key?: string;
    value?: string;
}

export interface Request {
    method?: string;
    url?: string;
    headers?: KeyPair[];
    params?: KeyPair[];
    body?: KeyPair[];
}
