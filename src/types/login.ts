import { z } from "zod";

export const LoginSchema = z.object({
    mobile_no: z.string().length(10, {
        message: "Mobile number must contain 10 digits",
    }),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;

export const OTPSchema = z.object({
    otp: z.string().length(6, {
        message: "OTP must contain 6 digits"
    })
})

export type OTPSchemaType = z.infer<typeof OTPSchema>