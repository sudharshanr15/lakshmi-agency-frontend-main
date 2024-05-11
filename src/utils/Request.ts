import { getAccessToken } from "@/lib/session"
import { RequestParams, ResponseParams } from "@/types/Request"

export default async function Request({ url, method = "GET", isAuthorized = true, headers = {}, body }: RequestParams): Promise<ResponseParams>{
    const tokens = await getAccessToken()

    let params: any = {}
    params.method = method

    if(isAuthorized == true){
        params.headers = {
            "Authorization": "Bearer " + tokens
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