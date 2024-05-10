import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import OtpInput from "react18-input-otp";
import { z } from "zod";

const OTP = ({ setAuthState, mobile }) => {
    const [otp, setOtp] = useState("")

    const otpSchema = z.object({
        otp: z.string().length(6, {
            message: "OTP must contain 6 digits"
        })
    })

    type OtpSchemaType = z.infer<typeof otpSchema>

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm<OtpSchemaType>({
        resolver: zodResolver(otpSchema)
    })

    function onSubmit(data){
        console.log(data)
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
                        <div className="text-[#839398]">show time</div>
                    </div>
                    <div className="flex justify-between gap-[25px] ">
                        <button
                            className="w-full py-2 bg-white text-[#0A4E71] border-[1px] border-[#0A4E71] border-solid rounded-lg"
                            type="button" onClick={() => setAuthState("login")}
                        >
                            Cancel
                        </button>
                        <button
                            className="w-full py-2 bg-[#f9c650] text-white rounded-lg "
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default OTP;
