import { z } from "zod";

const LocationSchema = z.object({
  pickUpLocation: z.string().min(1),
  pickUpDateAndTime: z.string().min(1),
  dropOffLocation: z.string().min(1),
  dropOffDateAndTime: z.string().min(1),
});
const PaymentSchema = z.object({
  carId: z.string().min(1),
  billingInfo: z.object({
    fullname: z.string().min(3),
    phone: z.string().min(10),
    address: z.string().min(3).max(30),
    city: z.string().min(1),
  }),
  rentalInfo: z.object({
    pickUpLocation: z.string().min(1),
    pickUpDateAndTime: z.string().min(1),
    dropOffLocation: z.string().min(1),
    dropOffDateAndTime: z.string().min(1),
  }),
  cardInfo: z.object({
    cardNumber: z.string().min(12).max(12),
    ExpirationDate: z.string().min(10).max(10),
    CardHolder: z.string().min(1),
    CVV: z.string().min(1).max(3),
  }),
  confirmation: z.object({
    newsletter: z.boolean(),
    terms: z.boolean().refine((value) => value === true, {
      message: "You must agree to the terms and conditions.",
    }),
  }),
});
type PaymentSchemaType = z.infer<typeof PaymentSchema>;
type LocationType = z.infer<typeof LocationSchema>;

export { LocationSchema, PaymentSchema };
export type { LocationType, PaymentSchemaType };
