import { create } from "zustand";

const initialWindows = {
  finder: { isOpen: false, zIndex: 1000, data: null },
  contact: { isOpen: false, zIndex: 1000, data: null },
  resume: { isOpen: false, zIndex: 1000, data: null },
  safari: { isOpen: false, zIndex: 1000, data: null },
  photos: { isOpen: false, zIndex: 1000, data: null },
  terminal: { isOpen: false, zIndex: 1000, data: null },
  txtfile: { isOpen: false, zIndex: 1000, data: null },
  imgfile: { isOpen: false, zIndex: 1000, data: null },
  snake: { isOpen: false, zIndex: 1000, data: null },
  tictactoe: { isOpen: false, zIndex: 1000, data: null },
};

const useWindowStore = create((set) => ({
  windows: initialWindows,
  openWindow: (key, data = null) =>
    set((state) => ({
      windows: {
        ...state.windows,
        [key]: {
          ...state.windows[key],
          isOpen: true,
          zIndex: Date.now(),
          data,
        },
      },
    })),
  closeWindow: (key) =>
    set((state) => ({
      windows: {
        ...state.windows,
        [key]: { ...state.windows[key], isOpen: false },
      },
    })),
  focusWindow: (key) =>
    set((state) => ({
      windows: {
        ...state.windows,
        [key]: { ...state.windows[key], zIndex: Date.now() },
      },
    })),
}));

export default useWindowStore;
