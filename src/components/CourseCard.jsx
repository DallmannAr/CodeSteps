import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import CourseLogo from "../../assets/Course.svg";

const CourseCard = () => {

  const [star, setStar] = useState([]);

  const stars = [
    {id: 1, checked: true},
    {id: 2, checked: false},
    {id: 3, checked: false}
  ]

  useEffect(() => {
    setStar(stars)
  }, [])

  return (
    <Link
      to="/questions"
      className="w-full flex items-center justify-between p-4 
        rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 
        text-white shadow-lg hover:scale-105 transition-transform duration-300"
    >

      <div className="flex w-full border-white/20  items-center justify-center">
        <img src={CourseLogo} alt="JS Logo" className="w-10 h-10" />
        <div className="flex flex-row gap-3">
          <h3 className="text-lg">Lógica de Programação</h3>

      
          <div className="flex justify-center gap-1 items-center">
            {star.length > 0 && (
              star.map(str => (
                <div onClick={() => {
                  setStar(!str.checked)
                }} key={str.id}>
                    <Star size={20} className={`${str.checked === true ? "text-yellow-400" : "text-white "}`} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center">
    
      </div>
    </Link>
  );
};

export default CourseCard;
