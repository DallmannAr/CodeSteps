import React from "react";
import { CircleUserRound, Star, Container } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-50">
      <div
        className="flex items-center justify-between px-4 py-2 
        rounded-b-2xl 
        bg-white/10 backdrop-blur-md border-b border-white/20 
        text-white text-sm shadow-lg"
      >
        {/*Profile*/}
        <div className="flex flex-col items-center">
          <CircleUserRound className="w-14 h-14 " />
          <div className="flex items-center gap-2 mt-2">
            <Star className="w-5 h-5" color="#ffd60a" />
            <p className="font-semibold text-base">XP: 300</p>
          </div>
        </div>

        {/*User ID*/}
        <div className="flex flex-col items-center mx-4 my-2">
          <h2 className="font-semibold text-lg">Jogador: Artur</h2>
          <p className="font-semibold text-base">Rank: Bronze</p>

          <div className="flex items-center gap-2 mt-2">
            <Container color="#ce8946" />

            <div className="w-30 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-2 bg-green-400 w-[30%] rounded-full"></div>
            </div>
            <Container color="#C0C0C0" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
