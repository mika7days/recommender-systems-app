import React, {useState} from "react";
import { Search } from "../components/Search";

export const SearchEngine = () => {
  const [isHidden, setIsHidden] = useState(false);

  const handleHide = () => {
    setIsHidden(true);
  };
  
  return (
    <div className={`${isHidden ? 'hidden' : ''} bg-red-400`}>
      <div className="fixed top-[160px] left-1/4 z-10 bg-black flex items-center justify-center">
        <div className="flex w-[700px] bg-white rounded-lg shadow-lg">
          <div>
            <Search />
          </div>
          <button
             onClick={handleHide}
            className="bg-[#ff4a4a] text-white p-2 fixed top-[168px] right-[330px] "
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
