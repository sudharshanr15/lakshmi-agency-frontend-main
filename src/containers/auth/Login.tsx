import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Login = ({ setAuthState }) => {
    const loginSchema = z.object({
        mobile_no: z.string().length(10, {
            message: "Mobile number must contain 10 digits",
        }),
    });

    type LoginSchemaType = z.infer<typeof loginSchema>;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginSchemaType>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = (data) => {
        setAuthState("otp")
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-white p-8 lg:py-40 lg:px-20">
                <div className="flex flex-col justify-center">
                    <h1 className="text-center font-bold text-2xl mb-10">
                        Login
                    </h1>
                    <h1 className="text-black text-2xl mt-2 font-semibold">
                        Welcome Back!
                    </h1>
                    {errors.mobile_no?.message && (
                        <p className="text-rose-600 mt-4 text-lg">
                            {errors.mobile_no.message}
                        </p>
                    )}
                    <div className="w-full mx-auto mt-7">
                        <div className="relative">
                            <label className="text-[#c1c1c1] text-sm font-bold tracking-wide absolute transform -translate-y-full bg-white px-2 left-4 bottom-3">
                                Mobile Number{" "}
                                <span className="text-red-600">
                                    *
                                </span>
                            </label>
                            <div className="flex items-center border border-[#c1c1c1] rounded-lg overflow-hidden">
                                <div className="flex items-center  p-2 px-4">
                                    <img
                                        src="/assets/images/india.png"
                                        alt="Country Code"
                                        className="mr-2  h-5 mt-1"
                                    />
                                    <span className="text-[#c1c1c1]">
                                        +91
                                    </span>
                                    <span className="ml-2 text-[#c1c1c1]">
                                        |
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    className="-ml-1 p-5 py-1   w-full focus:ring-blue-500 focus:outline-none"
                                    {...register("mobile_no")}
                                />
                            </div>
                        </div>
                    </div>

                    <h1 className="text-center mt-7">
                        By Signing Up you agree to all of
                        Lakshmi Agency{" "}
                    </h1>
                    <h1 className="text-center underline text-blue-400">
                        Terms and Conditions and Privacy
                    </h1>

                    <div className="flex justify-center mt-6">
                        <button
                            className="w-full py-2 mt-2 bg-[#f9c650] text-white rounded-lg "
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

export default Login;
