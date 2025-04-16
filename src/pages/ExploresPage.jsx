import React from "react";
import PinkHeadPhone from "../models/PinkHeadPhone";
import RedHeadPhone from "../models/RedHeadPhone";

const ExploresPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      {/* Grid container for models */}
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-8">
        {/* Column 1 */}
        <div className="bg-gray-800 rounded-xl p-4 flex flex-col items-center">
          <div className="w-[30vw] h-90">
            <RedHeadPhone />
          </div>
          <h3 className="text-white mt-4 text-xl font-semibold">Model 1</h3>
        </div>

        {/* Column 2 */}
        <div className="bg-gray-800 rounded-xl p-4 flex flex-col items-center">
          <div className="w-[30vw] h-100">
            <RedHeadPhone />
          </div>
          <h3 className="text-white mt-4 text-xl font-semibold">Model 2</h3>
        </div>
      </div>
    </div>
  );
};

export default ExploresPage;
