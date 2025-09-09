import React from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import CourseLogo from "../../assets/Course.svg";

const CourseCard = () => {
  return (
    <Link
      to="/questions"
      className="w-full max-w-xl flex items-center justify-between p-4 
        rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 
        text-white shadow-lg hover:scale-105 transition-transform duration-300"
    >

      <div className="flex border-b-1 w-[100%] border-white/20  items-center gap-4">
        <img src={CourseLogo} alt="JS Logo" className="w-14 h-14" />
        <div className="flex flex-row">
          <h3 className="font-semibold text-lg">Lógica de Programação</h3>

      
          <div className="flex gap-1 mt-4">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <Star className="w-5 h-5 text-gray-400" />
            <Star className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>


      <div className="flex items-center">
    
      </div>
    </Link>
  );
};

export default CourseCard;
