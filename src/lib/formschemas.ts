import z4 from "zod/v4";

export const registerSchema = z4.object({
  email: z4
    .string()
    .email({ message: "Invalid email address" })
    .endsWith(".com"),
  username: z4.string().min(1, { message: "Username is required" }),
  fullname: z4.string().min(1, { message: "Full name is required" }),
  password: z4
    .string()
    .length(10, { message: "Password must be exactly 10 characters" }),
});
