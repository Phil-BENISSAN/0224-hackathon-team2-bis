import { useNavigate } from "react-router-dom";

export default function Level_python() {
  const navigate = useNavigate();

  const handleClick = (url) => {
    navigate(url);
  };
  return (
    <main className="flex flex-wrap justify-center gap-4 m-8">
      <div className="card bg-base-100 image-full w-96 shadow-xl ">
        <figure>
          <img className="w-[224px]" src="src/assets/round7.png" alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">LEVEL 1 !</h2>
          <p>Débutant : Connaissance des variables, fonctions et de la syntaxe de base de python... Tout ce qu'il faut pour bien commencer dans Python.</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleClick("/question_python_1")}
              className="btn btn-primary"
            >
              Commencer
            </button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 image-full w-96 shadow-xl">
        <figure>
          <img className="w-[224px]" src="src/assets/round7.png" alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">LEVEL 2 !</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleClick("/question_python_2")}
              className="btn btn-primary"
            >
              Commencer
            </button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 image-full w-96 shadow-xl">
        <figure>
          <img className="w-[224px]" src="src/assets/round7.png" alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">LEVEL 3 !</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleClick("/question_python_3")}
              className="btn btn-primary"
            >
              Commencer
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
