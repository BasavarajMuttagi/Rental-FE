import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { LocationType, PaymentSchemaType } from "./Zod/schemas";

const storageModule = {
  name: "Rental-storage",
  storage: createJSONStorage(() => sessionStorage),
};

const paymentInfoInitialState = {
  carId: "",
  billingInfo: {
    fullname: "",
    phone: "",
    address: "",
    city: "",
  },
  rentalInfo: {
    pickUpLocation: "",
    pickUpDateAndTime: "",
    dropOffLocation: "",
    dropOffDateAndTime: "",
  },
  cardInfo: {
    cardNumber: "",
    ExpirationDate: "",
    CardHolder: "",
    CVV: "",
  },
  confirmation: {
    newsletter: false,
    terms: false,
  },
};

const rentalInfoInitialState = {
  pickUpLocation: "",
  pickUpDateAndTime: "",
  dropOffLocation: "",
  dropOffDateAndTime: "",
};
const creator = (set: any) => ({
  token: "",

  filter: {
    Type: [] as [],
    Capacity: [] as string[],
    Price: 60,
  },

  rentalInfo: {
    pickUpLocation: "",
    pickUpDateAndTime: "",
    dropOffLocation: "",
    dropOffDateAndTime: "",
  },

  user: {
    name: "",
    profileUrl: "",
  },

  paymentInfo: {
    carId: "",
    billingInfo: {
      fullname: "",
      phone: "",
      address: "",
      city: "",
    },
    rentalInfo: {
      pickUpLocation: "",
      pickUpDateAndTime: "",
      dropOffLocation: "",
      dropOffDateAndTime: "",
    },
    cardInfo: {
      cardNumber: "",
      ExpirationDate: "",
      CardHolder: "",
      CVV: "",
    },
    confirmation: {
      newsletter: false,
      terms: false,
    },
  },
  logout: () => {
    set(() => ({
      token: "",
    }));
  },
  setToken: (newToken: string) => set(() => ({ token: newToken })),
  setFilter: (newFilter: any) => set(() => ({ filter: newFilter })),
  setUser: (newUser: any) => set(() => ({ user: newUser })),

  setRentalInfo: (newInfo: LocationType) =>
    set(() => ({ rentalInfo: newInfo })),
  setPaymentInfo: (newInfo: PaymentSchemaType) =>
    set(() => ({ paymentInfo: newInfo })),
  resetPaymentInfo: () => set(() => ({ paymentInfo: paymentInfoInitialState })),
  resetRentalInfo: () => set(() => ({ rentalInfo: rentalInfoInitialState })),
});

const useRental = create(persist(creator, storageModule));
export default useRental;
