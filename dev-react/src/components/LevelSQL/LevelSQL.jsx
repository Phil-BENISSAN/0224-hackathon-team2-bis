import { useNavigate } from "react-router-dom";

export default function LevelSQL() {
  const navigate = useNavigate();

  const handleClick = (url) => {
    navigate(url);
  };
  return (
    <main className="flex flex-wrap justify-center gap-4 m-8">
      <div className="card bg-base-100 image-full w-96 shadow-xl">
        <figure>
          <img
            src="src/assets/541959.jpg"
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">LEVEL 1 !</h2>
          <p> Débutant : Requêtes simples et création de tables.</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleClick("/question_sql_1")}
              className="btn btn-primary"
            >
              Commencer
            </button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 image-full w-96 shadow-xl">
        <figure>
          <img
            src="src/assets/541959.jpg"
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">LEVEL 2 !</h2>
          <p> intermédiaire : Filtres, jointures et premières explorations poussées des tables.</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleClick("/question_sql_2")}
              className="btn btn-primary"
            >
              Commencer
            </button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 image-full w-96 shadow-xl">
        <figure>
          <img
            src="src/assets/541959.jpg"
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">LEVEL 3 !</h2>
          <p>Filtres avancés, fonctions d’agrégation et méthodes avancées.</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleClick("/question_sql_3")}
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
