import z4 from "zod/v4";
import { registerSchema } from "./formschemas";

export type RegisterType = z4.infer<typeof registerSchema>;
