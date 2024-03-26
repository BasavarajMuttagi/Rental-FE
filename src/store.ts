import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const storageModule = {
  name: "Rental-storage",
  storage: createJSONStorage(() => sessionStorage),
};

const creator = (set: any) => ({
  token: "",
  filter: {
    Type: [] as string[],
    Capacity: [] as string[],
    Price: 60,
  },
  logout: () => {
    set(() => ({
      token: "",
    }));
  },
  setToken: (newToken: string) => set(() => ({ token: newToken })),
  setFilter: (newFilter: any) => set(() => ({ filter: newFilter })),
});

const useRental = create(persist(creator, storageModule));
export default useRental;
