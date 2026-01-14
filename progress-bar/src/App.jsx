import { useEffect, useState } from "react";
export default function App() {
  const [showBar, setShowBar] = useState(false);
  const [progress, setProgress] = useState(0);

  function handleProgressBar() {
    setShowBar(true);
    setProgress(0);
  }

  useEffect(() => {
    if (!showBar) return; 

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 200);
    return () => clearInterval(interval);
  }, [showBar]);

  return (
    <div>
      <button onClick={handleProgressBar}>Add</button>
      {showBar && (
        <div 
          className="progress-bar"
          style={{
              border: "1px solid #000",
              marginTop: "20px",
          }}
          >
          <div
            id="bar"
            style={{
              width: `${progress}%`,
              backgroundColor: "green",
              height: "20px",
            }}
          ></div>
        </div>
      )}
    </div>
  );
}
