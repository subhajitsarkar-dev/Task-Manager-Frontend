"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { LoginType } from "@/lib/formType";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/lib/formschemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Field, FieldDescription, FieldGroup } from "./ui/field";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setloading] = useState(false);

  const form = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
    mode: "all",
  });

  const registerHandler = (data: LoginType) => {
    console.log(data);
  };
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Login your account</CardTitle>
          <CardDescription>
            Enter your email below to login your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(registerHandler)}>
              <FieldGroup>
                <Field>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Enter your email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </Field>
                <Field>
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <div className="relative flex items-center">
                            <Input
                              type={showPassword ? "text" : "password"}
                              placeholder="Enter password (10 characters)"
                              className="pr-10"
                              {...field}
                            />
                            {showPassword ? (
                              <EyeOff
                                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 size-4"
                                onClick={() => setShowPassword(false)}
                              />
                            ) : (
                              <Eye
                                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 size-4"
                                onClick={() => setShowPassword(true)}
                              />
                            )}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FieldDescription>
                    Must be at least 8 characters long.
                  </FieldDescription>
                </Field>
                <Field>
                  <Button type="submit">Login Account</Button>
                  <FieldDescription className="text-center">
                    Don't have an account? <a href="/signup">Sign up</a>
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
