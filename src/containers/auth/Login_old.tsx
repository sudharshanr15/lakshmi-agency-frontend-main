import React, { useEffect, useState } from "react";
import { useFormState } from "react-dom"
import { loginAction } from "@/lib/server_actions/Auth";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


function Login({ setAuthState }) {
  // const [loginError, setLoginError] = useState(true)

  const loginSchema = z.object({
    mobile_no: z.string().length(10, {
      message: "Mobile number must contain 10 digits"
    })
  })

  type LoginSchemaType = z.infer<typeof loginSchema>

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      {/* DESKTOP VERSION */}
      <div className="hidden md:block h-screen overflow-hidden relative">
        <div
          className="h-screen w-full overflow-hidden absolute top-0 left-0"
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
        <div className="h-screen  content-center grid grid-cols-1 md:grid-cols-2 z-50 absolute top-0 left-0">
          <div className="mx-9 md:mx-16 float-left md:left-10  lg:mt-96 md:mt-52">
            <h1 className="text-white text-2xl md:text-3xl font-bold md:font-bold">
              Join <span className="text-yellow-300"> Lakshmi Agency</span>
            </h1>
            <h1 className="mt-3 text-2xl text-white">
              Explore the best deals in the market to craft your dreamspace!
            </h1>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-white md:mx-3 lg:mx-12 p-4 lg:py-40 md:mt-10">
              <div className="flex flex-col justify-center mx-2 mt-8 md:mt-0 md:ml-9 md:mr-16">
                <h1 className="text-center font-bold text-2xl mb-10">Login</h1>
                <h1 className="text-black text-2xl mt-2 font-semibold">
                  Welcome Back!
                </h1>
                {errors.mobile_no?.message && <p className="text-rose-600 mt-4 text-lg">{errors.mobile_no.message}</p>}
                <div className="w-full mx-auto mt-7">
                  <div className="relative">
                    <label className="text-[#c1c1c1] text-sm font-bold tracking-wide absolute transform -translate-y-full bg-white px-2 left-4 bottom-3">
                      Mobile Number <span className="text-red-600">*</span>
                    </label>
                    <div className="flex items-center border border-[#c1c1c1] rounded-lg overflow-hidden">
                      <div className="flex items-center  p-2 px-4">
                        <img
                          src="/assets/images/india.png"
                          alt="Country Code"
                          className="mr-2  h-5 mt-1"
                        />
                        <span className="text-[#c1c1c1]">+91</span>
                        <span className="ml-2 text-[#c1c1c1]">|</span>
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
                  By Signing Up you agree to all of Lakshmi Agency{" "}
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
        </div>
      </div>
      {/* MOBILE VERSION */}
      <div className="block md:hidden">
        <div className="flex flex-col md:flex-row">
          <div className="h-60 p-4 relative">
            <div
              className="h-60 w-full absolute z-1 top-0 left-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)) ,url('/assets/images/paint-bucket.jpg')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                filter: "blur(1px)",
              }}
            ></div>
            <div className="m-4 mt-4 absolute top-0 left-0 z-50">
              <h1 className="text-white text-2xl font-bold mt-9">
                Join <span className="text-yellow-300 "> Lakshmi Agency</span>
              </h1>
              <h1 className="mt-3 text-2xl text-white">
                Explore the best deals in the market to craft your dreamspace!
              </h1>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form rounded-t-3xl bg-white -mt-4 p-4 z-100">
              <div className="form-content p-4">
                <h1 className="text-black text-2xl mt-2 font-semibold">
                  Welcome Back!
                </h1>
                {errors.mobile_no?.message && <p className="text-rose-600 mt-4 text-md">{errors.mobile_no.message}</p>}
                <div className="w-full mx-auto mt-7">
                  <div className="relative">
                    <label className="text-[#c1c1c1] text-sm font-bold tracking-wide absolute transform -translate-y-full bg-white px-2 left-4 bottom-6">
                      Mobile Number <span className="text-red-600">*</span>
                    </label>
                    <div className="flex items-center border rounded-lg overflow-hidden">
                      <div className="flex items-center  p-4 px-4">
                        <img
                          src="/assets/images/india.png"
                          alt="Country Code"
                          className="mr-2  h-5 mt-1"
                        />
                        +91
                      </div>
                      <input
                        type="text"
                        // {...register("mobile_no")}
                        className="-ml-1 p-5 py-1 border-0 w-full focus:ring-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <h1 className="text-left mt-7">
                  By Signing Up you agree to all of Lakshmi Agency{" "}
                  <span className="text-left underline text-blue-400">
                    Terms and Conditions and Privacy
                  </span>
                </h1>

                <div className="flex justify-center m-3">
                  <div className="absolute bottom-10 left-3 right-3">
                    <button
                      className="w-full py-2 bg-[#f9c650] text-white rounded-lg"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
