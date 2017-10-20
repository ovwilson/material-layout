export interface KeyPair {
    key?: string;
    value?: string;
    category?: string;
}

export interface Keyword extends KeyPair {
    title?: string;
}

export interface SPRequest {
    method?: string;
    url?: string;
    category?: string;
    headers?: KeyPair[];
    params?: KeyPair[];
    body?: KeyPair[];
}
