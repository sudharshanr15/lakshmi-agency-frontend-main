import Loading from "@/components/Loading";
import { validateOTP } from "@/lib/server_api/auth";
import { loginSession } from "@/lib/session";
import { OTPSchema, OTPSchemaType } from "@/types/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import OtpInput from "react18-input-otp";
import { z } from "zod";

const OTP = ({ setAuthState, mobile }) => {
    const [otp, setOtp] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [canRedirect, setCanRedirect] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        setError
    } = useForm<OTPSchemaType>({
        resolver: zodResolver(OTPSchema)
    })

    useEffect(() => {
        if(canRedirect){
            redirect("/dashboard")
        }
    }, [canRedirect])

    function onSubmit(data: OTPSchemaType){
        setIsLoading(true)
        validateOTP({ otp: data.otp, mobile_no: mobile}).then(async res => {
            if(res.status){
                if(res.data.message){
                    await loginSession(res.data.message)
                    setCanRedirect(true)
                    return
                }
                setCanRedirect(false)
                setError("otp", { type: "custom", message: res.data.message })
            }else{
                setCanRedirect(false)
                setError("otp", { type: "custom", message: res.data.message })
            }
        }).catch(err => {
            setCanRedirect(false)
            setError("otp", { type: "custom", message: "Unable to validate OTP. Please try again!" })
        }).finally(() => {
            setIsLoading(false)
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-white p-8 lg:py-40 lg:px-20">
                <div className="flex flex-col justify-center gap-6 md:gap-8">
                    <h1 className="font-semibold text-2xl">
                        OTP
                    </h1>
                    <h2 className="">
                        We have sent you an One-Time-password of{" "}
                        <span className="font-bold text-black">6-digits</span> to
                        your registered mobile number. Kindly enter that to Login
                        (+91 {mobile})
                    </h2>
                    <div className="w-full flex justify-center gap-x-2 lg:gap-x-8">
                        <input type="text" className="hidden" value={otp} {...register("otp")} />
                        <OtpInput
                            value={otp}
                            onChange={(e) => {
                                setOtp(e)
                                setValue("otp", e)
                            }}
                            numInputs={6}
                            containerStyle="w-[100%] 2xl:w-[75%] flex justify-between"
                            inputStyle={`otp-inputs ${true ? "border-black" : "border-rose-400"} border-2 scale-105`}
                            isInputNum={true}
                            />
                    </div>
                    <div className="text-center">
                        {errors.otp?.message && (<p className="text-rose-600">{errors.otp?.message}</p>)}
                    </div>
                    <div className="flex justify-between">
                        <div>OTP expires in</div>
                        {/* <div className="text-[#839398]">show time</div> */}
                    </div>
                    <div className="flex justify-between gap-[25px] ">
                        <button
                            className="w-full py-2 bg-white text-[#0A4E71] border-[1px] border-[#0A4E71] border-solid rounded-lg"
                            type="button" onClick={() => setAuthState("login")}
                        >
                            Cancel
                        </button>
                        <button
                            className="w-full py-2 bg-[#f9c650] text-black rounded-lg "
                            type="submit"
                            disabled={isLoading}
                        >
                            <div className="flex items-center justify-center gap-4">
                                {isLoading && <Loading className="text-black" width={20} height={20} />}
                                <span>Submit</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default OTP;
