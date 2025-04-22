import { featureFlags } from "./data/mockData";
import type { FeatureFlags } from "~/state/store";

export const initialiseFeatureFlags = (): Promise<FeatureFlags> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(featureFlags);
    }, 1000); // Simulate network delay
  });
};
