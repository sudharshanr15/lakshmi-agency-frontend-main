export type RequestMethod = "GET" | "POST"

export interface RequestParams {
    url: string | URL,
    method?: RequestMethod,
    isAuthorized?: boolean,
    headers?: {},
    body?: string
}

export interface ResponseParams {
    status: boolean,
    data?: any,
    statusCode: number
}