"use client";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";

export default function SignInComponent() {
  const FormSchema = z.object({
    username: z
      .string()
      .min(1, {
        message: "email is Required",
      })
      .email("Invalid email"),
    password: z
      .string()
      .min(8, { message: "password must contain atleat 8 character" }),
  });
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const router = useRouter();
  async function onSubmit(values: z.infer<typeof FormSchema>) {
    try {
      const signindata = await signIn("credentials", {
        username: values.username,
        password: values.password,
        redirect: false,
      });
      sessionStorage.setItem("email", values.username);
      if (signindata?.error) {
        console.log(signindata.error);
        toast({
          title: "Oops! Something Went Wrong",
          description: "Error Signing In",
        });
        router.push("/");
      } else {
        toast({
          title: "Hello From HackBrokers",
          description: "Sign In Successful",
        });
        router.push("/");
      }
    } catch (err) {
      router.push("/AuthError");
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" p-6">
        <div>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-2xl mb-2 mt-5 block text-xs text-white">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="mail@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-2xl mb-2 mt-5 block text-xs text-white">
                  Password
                </FormLabel>
                <FormControl>
                  <Input type="password" placeholder="********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="mt-5 w-full text-white" type="submit">
          Sign In
        </Button>
      </form>
      <div className=" mx-auto my-4 flex w-full items-center justify-evenly text-white before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
        or
      </div>
      <p className=" mt-2 text-center text-sm font-semibold text-white">
        If you don&apos;t have an account please&nbsp;
        <Link className="text-white" href="/signup">
          <b>Sign up</b>
        </Link>
      </p>
    </Form>
  );
}
