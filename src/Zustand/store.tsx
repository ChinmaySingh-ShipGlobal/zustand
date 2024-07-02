import { create } from "zustand";
import { Profile } from "@/Zustand/interfaces";

interface StoreState {
  profiles: Profile[];
  addField: (profile: Profile) => void;
}

export const useStore = create<StoreState>((set) => ({
  profiles: [],
  addField: (newProfile: Profile) => {
    set((state) => ({
      profiles: [...state.profiles, newProfile],
    }));
  },
}));
