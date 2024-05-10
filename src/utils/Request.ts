type RequestMethod = "GET" | "POST"

interface RequestParams {
    url: string | URL,
    method?: RequestMethod,
    isAuthorized?: boolean,
    headers?: {},
    body?: string
}

interface ResponseParams {
    status: boolean,
    data?: any,
    statusCode: number
}

export default async function Request({ url, method = "get", isAuthorized = true, headers = {}, body }: RequestParams): Promise<ResponseParams>{

    let params: any = {}
    params.method = method

    if(isAuthorized == true){
        params.headers = {
            "Authorization": "token f339c30e44f23a6:dae219155feeea4"
        }
    }

    params.headers = {
        ...params.headers,
        ...headers
    }

    if(body){
        params.body = body
    }

    let status = true
    let statusCode = 0

    return new Promise((resolve, reject) => {
        try{
            fetch(url, params)
                .then(res => {
                    if(res.ok){
                        status = true
                    }else{
                        status = false
                    }
                    statusCode = res.status
                    return res.json()
                })
                .then(res => {
                    resolve({
                        status,
                        statusCode,
                        data: res
                    })
                })
                .catch(err => {
                    reject({
                        status,
                        statusCode: 0,
                    })
                })
        }catch(err){
            reject({
                status: false,
                statusCode: 0,
            })
        }
    })

}