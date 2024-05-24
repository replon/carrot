"use server";

import { z } from "zod";

const formSchema = z.object({
    email: z.string().email().endsWith("@zod.com"),
    password: z.string().min(10).regex(new RegExp(".*[0-9]+.*"), "Password must contain a number"),
    username: z.string().min(5),
});


export async function handleLogin(prevState: any, formData: FormData) {

    const data = {
        email: formData.get("email"),
        password: formData.get("password"),
        username: formData.get("username"),
    };

    const result = formSchema.safeParse(data);

    await new Promise((resolve) => setTimeout(resolve, 500));

    if (!result.success) {
        return { errors: result.error.flatten() }
    } else {
        return { ok: true };
    }
}