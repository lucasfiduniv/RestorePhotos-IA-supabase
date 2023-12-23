'use client'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const formSchema = z.object({
    email: z.string({
        required_error:"Email is required"
    }).email({
        message:"must be a valid email address",
    }),
    password: z.string({
        required_error:"Password is required"
    }).min(7,{
message:"must be at least"
    }),
})

export function CreateAccountForm(){
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            email:"",
            password:"",
        }
    })



    return(
    <h1>Create</h1>
    );
}