import z4 from "zod/v4";
import { loginSchema, registerSchema } from "./formschemas";

export type RegisterType = z4.infer<typeof registerSchema>;
export type LoginType = z4.infer<typeof loginSchema>;
