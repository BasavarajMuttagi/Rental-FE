import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

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

  pickUpLocation: "",
  dropOffLocation: "",
  pickUpTime: "",
  dropOffTime: "",
  pickUpDate: "",
  dropOffDate: "",
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
  setPickUpLocation: (newPickUpLocation: string) =>
    set(() => ({ pickUpLocation: newPickUpLocation })),
  setDropOffLocation: (newDropOffLocation: string) =>
    set(() => ({ dropOffLocation: newDropOffLocation })),

  setPickUpDate: (newPickUpDate: string) =>
    set(() => ({ pickUpDate: newPickUpDate })),
  setDropOffDate: (newDropOffDate: string) =>
    set(() => ({ dropOffDate: newDropOffDate })),

  setPickUpTime: (newPickUpTime: string) =>
    set(() => ({ pickUpTime: newPickUpTime })),
  setDropOffTime: (newDropOffTime: string) =>
    set(() => ({ dropOffTime: newDropOffTime })),
});

const useRental = create(persist(creator, storageModule));
export default useRental;
