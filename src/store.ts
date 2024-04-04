import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { LocationType } from "./Zod/schemas";

const storageModule = {
  name: "Rental-storage",
  storage: createJSONStorage(() => sessionStorage),
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
    pickUpTime: "",
    pickUpDate: "",
    dropOffLocation: "",
    dropOffTime: "",
    dropOffDate: "",
  },
  user: {
    name: "",
    profileUrl: "",
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
});

const useRental = create(persist(creator, storageModule));
export default useRental;
