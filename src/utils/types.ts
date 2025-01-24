import { z } from "zod";

/**
 * UUID string type validation for an note id.
 *
 * ZOD schema
 */
export const UUID_ZOD = z.string().uuid();

/**
 * Represents the note data object for type validation.
 */
export const NoteZOD = z.object({
  id: z.string().uuid(),
  title: z.string().min(5, "Your note title is too short"),
  description: z
    .string()
    .min(
      25,
      "Your note description to briefly! Please descrive your note more detailed!"
    )
    .nullable(),
  date: z.date(),
});

/**
 * A note, that can be created, deleted and updated.
 */
export type Note = z.infer<typeof NoteZOD>;
