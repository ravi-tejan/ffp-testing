import { useEffect, useState } from "react";
import useFeatureFlag from "~/hooks/useFeatureFlag";
import { NotFound } from "../notfound/notFound";

export function Users() {
  const isFeatureFlagEnabled = useFeatureFlag("users");
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
      <h1>Users Page</h1>
    </main>
  );
}
