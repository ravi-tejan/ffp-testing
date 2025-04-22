import { useStore } from "~/state/store";

function useFeatureFlag(key: string) {
  const { featureFlags } = useStore();
  return featureFlags[key];
}

export default useFeatureFlag;
