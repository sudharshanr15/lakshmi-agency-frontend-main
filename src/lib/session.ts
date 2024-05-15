'use server';

import { getIronSession } from "iron-session"
import { cookies } from "next/headers"

const PASSWORD = "N64z6O3SGJHr^x6c3CND^UfFN@6Be4rN"

export async function loginSession(data){
    const session = await getIronSession(cookies(), { password: PASSWORD, cookieName: "session_id", ttl: 3600})
    session.tokens = data
    await session.save()
}

export async function logoutSession(){
    const session = await getIronSession(cookies(), { password: PASSWORD, cookieName: "session_id"})
    return session.destroy()
}

export async function getSession(){
    const session = await getIronSession(cookies(), { password: PASSWORD, cookieName: "session_id"})
    return session
}

export async function getAccessToken(): Promise<string>{
    const session = await getSession()
    if(Object.keys(session).includes("tokens")){
        return session['tokens']["access_token"]
    }else{
        return ""
    }
}