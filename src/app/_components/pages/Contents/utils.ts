import { z } from "zod";

const articleBodyTypes = z.enum(["text", "image", "title"]);

export const articleBodySchema = z.object({
  type: articleBodyTypes,
  image: z.string(),
  value: z.string(),
});

const interviewOwners = z.enum(["artist", "curator"]);

export const interviewBodySchema = z.object({
  description: z.string(),
  body: z.array(
    z.object({
      owner: interviewOwners,
      text: z.string(),
    })
  ),
});
