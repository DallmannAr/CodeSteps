import { ArrowLeft, Code, Star, Trophy, CheckCircle, XCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Questions = () => {
  const [points, setPoints] = useState(0);
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [answer, setAnswer] = useState("");
    const [buttonState, setButtonState] = useState("default"); 
  const [feedback, setFeedback] = useState(null);
  
  const navigate = useNavigate();

  // 🔹 Desafios
  const codes = [
    {
      id: 1,
      title: "Matemática Básica",
      example:
        "Você deve fazer uma operação matemática simples: somar os números 5 e 3. Depois, use a função print() para exibir o resultado dessa soma na tela.",
      hints:
        "💡 Lembre-se: print() serve para mostrar algo na tela. A operação de soma é feita com o sinal de adição (+).",
      result: "print(5+3)",
    },
    {
      id: 2,
      title: "Criando uma variável",
      example:
        "Crie uma variável chamada x e atribua a ela o número 10. Variáveis servem para guardar informações, como números ou textos.",
      hints:
        "💡 Escolha um nome para a variável (sem espaços) e use o sinal = para atribuir o valor.",
      result: "x = 10",
    },
    {
      id: 3,
      title: "Imprimindo uma mensagem",
      example:
        "Exiba a mensagem 'Olá, mundo!' na tela. Isso mostra como o Python pode ser usado para escrever textos.",
      hints: "💡 Use a função print() e coloque a frase entre aspas.",
      result: "print('Olá, mundo!')",
    },
    {
      id: 4,
      title: "Concatenação de textos",
      example:
        "Crie duas palavras separadas e junte-as em uma frase usando o operador +.",
      hints: "💡 Coloque as palavras entre aspas e use + para juntá-las.",
      result: "print('Bom' + ' dia')",
    },
    {
      id: 5,
      title: "Usando variáveis e somando valores",
      example:
        "Crie duas variáveis chamadas a e b, atribua valores numéricos a elas (por exemplo, 4 e 6), depois imprima a soma dos valores.",
      hints: "💡 Crie as variáveis, depois use print() para mostrar a soma.",
      result: "a = 4\nb = 6\nprint(a + b)",
    },
  ];

  const challenge = codes[currentChallenge];

  // 🔹 Carregar progresso do localStorage
  useEffect(() => {
    const savedPoints = localStorage.getItem("points");
    const savedChallenge = localStorage.getItem("challenge");

    if (savedPoints) setPoints(Number(savedPoints));
    if (savedChallenge) setCurrentChallenge(Number(savedChallenge));
  }, []);

  // 🔹 Salvar progresso sempre que mudar
  useEffect(() => {
    localStorage.setItem("points", points);
    localStorage.setItem("challenge", currentChallenge);
  }, [points, currentChallenge]);

  // 🔹 Verificação de resposta
  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.trim() === challenge.result.trim()) {
      setPoints((prev) => prev + 10);
      setAnswer("");
       setButtonState("success");
      setFeedback({ type: "success", message: "✅ Correto!" });
    } else {
      setButtonState("error");
      setFeedback({ type: "error", message: "❌ Resposta incorreta, tente novamente!" });
    }
  };

  // 🔹 Avançar para o próximo desafio
  const handleNextChallenge = () => {
    setFeedback(null);
    setButtonState("default");
    setCurrentChallenge((prev) => prev + 1);
  };

  // 🔹 Fechar feedback no erro
  const handleCloseFeedback = () => {
    setFeedback(null);
    setButtonState("default");  
  };

  // 🔹 Tela final
  if (currentChallenge >= codes.length) {
    return (
      <section className="text-white py-36 flex flex-col items-center justify-center gap-5">
        <h1 className="text-3xl font-bold">
          🎉 Parabéns, você concluiu todos os desafios!
        </h1>
        <p className="text-lg">Pontuação final: {points} pontos</p>
        <button
          onClick={() => {
            setCurrentChallenge(0);
            setPoints(0);
            localStorage.removeItem("challenge");
            localStorage.removeItem("points");
            navigate("/");
          }}
          className="mt-4 bg-fuchsia-700 hover:bg-fuchsia-800 px-4 py-2 rounded-lg font-semibold"
        >
        🏠 Volte para Home
        </button>
      </section>
    );
  }

  return (
    <section className="text-white py-36 flex flex-col justify-center items-center gap-5">
      {/* Header */}
      <div className="w-full max-w-3xl flex justify-between items-center px-4">
        <button
          onClick={() => window.history.back()}
          className="flex gap-2 items-center"
        >
          <ArrowLeft size={15} />
          Voltar
        </button>
        <div className="flex flex-row gap-2 bg-white/5 rounded-xl border-slate-300/30 border hover:bg-white/10 transition-all ease-in-out duration-300 p-2 items-center justify-center">
          <Trophy size={15} />
          <p className="font-medium text-center text-sm">{points} pontos</p>
        </div>
      </div>

      {/* Card do desafio */}
      <div className="max-w-full xl:min-w-3xl bg-white/5 rounded-xl border-slate-300/30 border hover:bg-white/10 transition-all ease-in-out duration-300 p-9">
        <form className="flex flex-col gap-4" key={challenge.id} onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3 items-center justify-center w-full">
            <div className="flex flex-row gap-2 items-start text-start">
              <Code size={30} className="text-fuchsia-800" />
              <h2 className="text-xl font-medium">{challenge.title}</h2>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-start text-white/80">{challenge.example}</p>
              <div className="bg-white/7 rounded-xl border-l-4 border-l-fuchsia-400 text-start p-4 w-full">
                {challenge.hints}
              </div>

              {/* Input */}
              <div className="flex flex-col gap-2 mt-4 items-start">
                <p className="text-white/80 font-semibold">Digite sua resposta:</p>
                <textarea
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder={challenge.result}
                  className="min-w-full bg-white/5 rounded-md border-slate-300/30 border py-2 px-3 h-24"
                />
              </div>

           {/* Botão */}
              <div className="flex justify-center mt-2">
                <button
                  type="submit"
                  className={`
                    flex flex-row gap-2 items-center px-4 py-2 rounded-md font-semibold transition-colors duration-300
                    ${buttonState === "default" ? "bg-fuchsia-800 text-white" : ""}
                    ${buttonState === "success" ? "bg-green-600 text-yellow-400   -yellow-400" : ""}
                  `}
                >
                  {buttonState === "success" && <Star size={15} className="text-yellow-400 fill-yellow-400"  />}
                  {buttonState === "default" && <Star size={15}
/> }
                  <p className="text-md font-semibold">Verificar</p>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      {feedback && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-gradient-to-br to-fuchsia-950 via-black from-indigo-950 transition-all duration-300 border border-white/10  rounded-xl p-6 shadow-xl flex flex-col items-center gap-4 w-80">
            {feedback.type === "success" ? (
              <CheckCircle size={40} className="text-green-400" />
            ) : (
              <XCircle size={40} className="text-red-400" />
            )}
            <p className="text-lg font-semibold">{feedback.message}</p>

            {feedback.type === "success" ? (
              <button
                onClick={handleNextChallenge}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold"
              >
                Próximo Desafio →
              </button>
            ) : (
              <button
                onClick={handleCloseFeedback}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-semibold"
              >
                Tentar Novamente
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Questions;
