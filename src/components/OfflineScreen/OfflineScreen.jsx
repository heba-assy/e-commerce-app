import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useOnlineStatus } from "../../hooks/useOnlineStatus";
import {
  faGlobe,
  faRotate,
  faSignal,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";

export default function OfflineScreen({ children }) {
  const isOnline = useOnlineStatus();
  if (isOnline) {
    return children;
  }

  return (
    <div className="bg-gray-100 w-full h-screen ">
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <FontAwesomeIcon icon={faWifi} className="text-red-500 text-6xl mb-5" />
          <div className="shadow-xl max-w-md rounded-xl bg-white p-8">
            <div className="space-y-3 mb-6">
              <h2 className="font-bold text-2xl">Connection Lost</h2>
              <p className="text-gray-500">
                Oops! It looks like you've lost your internet connection. Don't
                worry, We'll help you get back online.
              </p>
            </div>

            <div className="bg-gray-50 p-2 space-y-2 mb-7">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faSignal} className="text-gray-400" />
                  <span className="text-gray-600">Network Status:</span>
                </div>

                <span className="text-red-500 font-medium">Offline</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faGlobe} className="text-gray-400" />
                  <span className="text-gray-600">Last checked:</span>
                </div>

                <span className="text-gray-500">{new Date().toLocaleTimeString()}</span>
              </div>
            </div>

            <button className="btn bg-[#16a34a] text-white hover:bg-[#15803d] mb-8 w-full" onClick={()=> window.location.reload()}>
              <FontAwesomeIcon icon={faRotate} className="mr-2"/>
              <span>Try Again</span>
            </button>

            <div className="text-gray-500 pt-5 border-t border-gray-100">
              <span className="mb-3">Quick Fixes:</span>
              <ul className="text-sm list-disc pl-3 *:w-fit *:m-auto">
                <li>Check your wifi connection</li>
                <li>Try moving closer to your router</li>
                <li>Restart your router or mobile data</li>
                <li>Contact your internet provider if the issue persists</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
