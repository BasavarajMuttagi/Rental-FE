import { z } from "zod";

const LocationSchema = z
  .object({
    pickUpLocation: z.string().min(1),
    pickUpTime: z.string().min(1),
    pickUpDate: z.string().min(1),
    dropOffLocation: z.string().min(1),
    dropOffTime: z.string().min(1),
    dropOffDate: z.string().min(1),
  })
  .refine(
    ({ pickUpLocation, dropOffLocation }) => pickUpLocation !== dropOffLocation,
    {
      message: "Pick up location and drop off location cannot be the same",
      path: ["dropOffLocation"],
    }
  )
  .refine(
    ({ pickUpDate, dropOffDate, pickUpTime, dropOffTime }) => {
      if (pickUpDate == dropOffDate && pickUpTime == dropOffTime) {
        return false;
      }
      return true;
    },
    {
      message: "Pick up date and drop off date cannot be the same",
      path: ["dropOffDate"],
    }
  );

type LocationType = z.infer<typeof LocationSchema>;

export { LocationSchema };
export type { LocationType };
