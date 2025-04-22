import { create } from "zustand";

export type FeatureFlags = {
  [key: string]: boolean;
};

interface StoreState {
  featureFlags: FeatureFlags;
  initializeFeatureFlags: (featureFlags: FeatureFlags) => void;
  setFeatureFlag: (key: string, value: boolean) => void;
}

export const useStore = create<StoreState>((set) => ({
  featureFlags: {},
  initializeFeatureFlags: (featureFlags: FeatureFlags) =>
    set(() => ({ featureFlags })),
  setFeatureFlag: (key: string, value: boolean) =>
    set((state: StoreState) => ({
      featureFlags: { ...state.featureFlags, [key]: value },
    })),
}));
