import { z } from "zod";

export const createTaskSchema = z.object({
  title: z
    .string({ message: "The title must not be empty" })
    .min(5, { message: "The title must be at least 5 characters length" })
    .max(80, { message: "The title must be at most 80 characters length" }),
  description: z
    .string({ message: "The description must not be empty" })
    .min(30, {
      message: "The description must be at least 30 characters length",
    })
    .max(300, {
      message: "The description must be at least 300 characters length",
    }),
});
