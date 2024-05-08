"use client";
import React, { useState } from "react";
import { useFormState } from "react-dom";
// import { login, OTPSubmit } from "@/controller/authController";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Login from "./Login";
import OTP from "./OTP";
// import { showToast } from "@/utils/showToast";
// import { loginAction, validateOTP } from "@/lib/server_actions/Auth";

const formResponse = {
    status: false,
    message: "",
};

export function Auth() {
    const [authState, setAuthState] = useState("login");

    return (
        <div className="h-screen w-screen overflow-x-hidden relative">
            <div
                className="hidden md:block h-screen w-full overflow-hidden absolute top-0 left-0 -z-10"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)) ,url('/assets/images/paint-bucket.jpg')",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    filter: "blur(10px)",
                    transform: "scale(1.1)",
                }}
            ></div>
            <div className="md:hidden p-4 relative">
                <div
                    className="absolute top-0 left-0 w-full h-full -z-10"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)) ,url('/assets/images/paint-bucket.jpg')",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        filter: "blur(1px)",
                    }}
                ></div>
                <h1 className="my-6 text-white text-2xl font-bold">
                    Join{" "}
                    <span className="text-yellow-300 "> Lakshmi Agency</span>
                    <span className="mt-4 inline-block font-normal">
                        Explore the best deals in the market to craft your
                        dreamspace!
                    </span>
                </h1>
            </div>
            <div className="max-w-[1800px] mx-auto h-full">
                <div className="flex md:h-full items-center md:mx-8 gap-12">
                    <div className="hidden md:block">
                        <h1 className="text-white text-2xl md:text-3xl font-bold text-nowrap">
                            Join{" "}
                            <span className="text-yellow-300">
                                {" "}
                                Lakshmi Agency
                            </span>{" "}
                            <br />
                            <span className="mt-4 font-normal">
                                Explore the best deals in the market to craft
                                your dreamspace!
                            </span>
                        </h1>
                    </div>
                    <div className="flex-grow">
                        {authState == "login" ? (
                            <Login setAuthState={setAuthState} />
                        ) : (
                            <OTP
                            //   mobile={mobile}
                              setAuthState={setAuthState}
                              mobile={9945737038}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
