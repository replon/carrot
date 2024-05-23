"use server";

import { ok } from "assert";

export async function handleLogin(prevState: any, formData: FormData) {

    const data = {
        email: formData.get("email"),
        password: formData.get("password"),
        username: formData.get("username"),
    };

    console.log(data);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (data.password == "12345") {
        return {
            errors: [],
            ok: true,
        }

    } else {
        return {
            errors: ["wrong password"],
        }
    }
}