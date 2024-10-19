import { z } from "zod";

export const Note = z.object({
  id: z.string().uuid(),
  title: z.string().min(5, "Your note title is too short"),
  content: z.string(),
});
