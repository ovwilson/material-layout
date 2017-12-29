export interface Request {
    method?: string;
    url?: string;
    category?: string;
    description?: string;
    bodyId?:number;
    paramsId?: number;
    headersId?:number;
}
