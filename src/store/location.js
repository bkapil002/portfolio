import { create } from "zustand";
import { locations } from "../constants";

const DEFAULT_LOCATION = locations.work ?? null;

const useLocationStore = create((set) => ({
  activeLocation: DEFAULT_LOCATION,
  setActiveLocation: (location = null) =>
    set((state) => {
      if (location && state.activeLocation === location) {
        return { activeLocation: null };
      }
      return { activeLocation: location };
    }),
  resetActiveLocation: () => set({ activeLocation: null }),
}));

export default useLocationStore;
