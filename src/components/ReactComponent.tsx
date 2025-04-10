import { useState } from "react";

export function ReactComponent() {
  const [showText, setShowText] = useState(true);

  const handleClick = () => {
    setShowText(!showText);
  };

  return (
    <div className="flex flex-1 flex-col items-center border py-24">
      <button
        className="cursor-pointer bg-blue-500 px-4 py-2 font-bold text-white uppercase hover:bg-blue-700"
        onClick={handleClick}
      >
        Click me!
      </button>

      <div className="mt-10 text-2xl">
        {showText ? (
          <>
            This is a <span className="font-bold">React</span> component{" "}
          </>
        ) : (
          <>Toggled! 🎉🎉🎉</>
        )}
      </div>
    </div>
  );
}
