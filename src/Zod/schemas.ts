import { z } from "zod";

const LocationSchema = z
  .object({
    pickUpLocation: z.string().min(3),
    pickUpTime: z.string(),
    pickUpDate: z.string(),
    dropOffLocation: z.string(),
    dropOffTime: z.string(),
    dropOffDate: z.string(),
  })

type LocationType = z.infer<typeof LocationSchema>;

export { LocationSchema };
export type { LocationType };
