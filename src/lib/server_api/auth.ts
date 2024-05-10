'use server';

import { LoginSchemaType, OTPSchemaType } from "@/types/login"
import Request from "@/utils/Request"

const HOST_URL = "https://portal.lakshmiagency.com"

export async function sendOTP({ mobile_no }: LoginSchemaType){
    const url = new URL("/api/method/lakshmiagency.api.v1.otp.send_otp", HOST_URL)
    url.searchParams.set("mobile_no", mobile_no)

    return Request({ url, method: "POST", isAuthorized: false})
}

export async function validateOTP({ mobile_no, otp }: LoginSchemaType & OTPSchemaType){
    const url = new URL("/api/method/lakshmiagency.api.v1.auth.authenticate", HOST_URL)
    url.searchParams.set("mobile_no", mobile_no)
    url.searchParams.set("otp", otp)

    return Request({ url, method: "POST", isAuthorized: false})
}

export async function getLoggedUser(){
    const url = new URL("/api/method/frappe.auth.get_logged_user", HOST_URL)
    return Request({ url })
}