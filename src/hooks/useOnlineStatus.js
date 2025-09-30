import { useEffect, useState } from "react";

export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    function onlineStatus() {
      setIsOnline(true);
    }
    function offlineStatus() {
      setIsOnline(false);
    }

    window.addEventListener("online", onlineStatus);
    window.addEventListener("offline", offlineStatus);

    return function () {
      window.removeEventListener("online", onlineStatus);
      window.removeEventListener("offline", offlineStatus);
    };
  }, []);

  return isOnline;
}
