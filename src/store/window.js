import { create } from "zustand";

const makeWindow = () => ({
  isOpen: false,
  isMinimized: false,
  isMaximized: false,
  zIndex: 1000,
  data: null,
});

const initialWindows = {
  finder: makeWindow(),
  contact: makeWindow(),
  resume: makeWindow(),
  safari: makeWindow(),
  photos: makeWindow(),
  terminal: makeWindow(),
  txtfile: makeWindow(),
  imgfile: makeWindow(),
  snake: makeWindow(),
  tictactoe: makeWindow(),
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
          isMinimized: false,
          isMaximized: false,
          zIndex: Date.now(),
          data,
        },
      },
    })),
  closeWindow: (key) =>
    set((state) => ({
      windows: {
        ...state.windows,
        [key]: {
          ...state.windows[key],
          isOpen: false,
          isMinimized: false,
          isMaximized: false,
        },
      },
    })),
  minimizeWindow: (key) =>
    set((state) => ({
      windows: {
        ...state.windows,
        [key]: { ...state.windows[key], isMinimized: true },
      },
    })),
  restoreWindow: (key) =>
    set((state) => ({
      windows: {
        ...state.windows,
        [key]: {
          ...state.windows[key],
          isMinimized: false,
          zIndex: Date.now(),
        },
      },
    })),
  toggleMaximize: (key) =>
    set((state) => {
      const win = state.windows[key];
      return {
        windows: {
          ...state.windows,
          [key]: {
            ...win,
            isMinimized: false,
            isMaximized: !win.isMaximized,
            zIndex: Date.now(),
          },
        },
      };
    }),
  focusWindow: (key) =>
    set((state) => ({
      windows: {
        ...state.windows,
        [key]: { ...state.windows[key], zIndex: Date.now() },
      },
    })),
}));

export default useWindowStore;
