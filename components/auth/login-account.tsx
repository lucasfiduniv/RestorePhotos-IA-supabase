"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";

const formSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "must be a valid email address",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(7, {
      message: "must be at least",
    }),
});

export function LoginAccountForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className="flex flex-col justify-center items-center spaece-y-2">
      <span className="text-lg"> You will love It</span>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-2">
            <FormField 
                control={form.control}
                name="email"
                render={(field)=>(
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input placeholder="Email" {...field}/>
                        </FormControl>
                        <FormDescription>This is your Email</FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField 
                control={form.control}
                name="password"
                render={(field)=>(
                    <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                            <Input placeholder="Password" {...field}/>
                        </FormControl>
                        <FormDescription>This is your password</FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <Button type="submit">Login Account</Button>
        </form>
      </Form>
    </div>
  );
}
