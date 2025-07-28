import z from "zod";

export const todoformSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Title must be at least 5 characters." })
    .max(30, { message: "Title must be at most 30 characters." }),
  body: z
    .string()
    .max(80, { message: "Title must be at most 30 characters." })
    .optional(),
  completed: z.boolean(),
});
export type TodoFormValues = z.infer<typeof todoformSchema>;
