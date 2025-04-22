import { useEffect, useState } from "react";
import useFeatureFlag from "~/hooks/useFeatureFlag";
import { NotFound } from "../notfound/notFound";

export function Welcome() {
  const isFeatureFlagEnabled = useFeatureFlag("welcome");
  const [showNotFound, setShowNotFound] = useState(false);
  
  useEffect(() => {
    if (!isFeatureFlagEnabled) {
      setShowNotFound(true);
    } else {
      setShowNotFound(false);
    }
  }, [isFeatureFlagEnabled]);

  if (showNotFound) {
    return <NotFound />;
  }

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <h1>Welcome Page</h1>
    </main>
  );
}
