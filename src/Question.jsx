import { ArrowLeft, Trophy } from "lucide-react";
import { useEffect, useState } from "react";

const Questions = () => {

    const [points, setPoints] = useState(45);
    const [code, setCode] = useState([])

    const codes = [ 
        {
            title: "Matematica Basica",
            example: "calcula e imprima o resultado de 5 + 3",
            hints: "💡 Dica: Combine um comando de matemática com um comando de impressão"
        }
    ]

    useEffect(() => {
        setCode(codes)
    }, [])

    return ( 
        <section className="text-white py-20 flex flex-col justify-center items-center">
            <div className="w-full max-w-3xl flex justify-between items-center px-4"> 
                <button className="flex gap-2 items-center">
                    <ArrowLeft size={15}/>
                    Voltar
                </button>
                <div className="flex flex-row gap-2 bg-white/5 rounded-xl border-slate-300/30 border hover:bg-white/10 transition-all ease-in-out duration-300  p-2 items-center  justify-center">
                    <i> <Trophy size={15} /> </i>
                    
                    <p className="font-medium text-center text-sm"> {points} pontos </p>
                </div>

                <div className="">

                </div>
            </div>
        </section>
    );
}
 
export default Questions;
