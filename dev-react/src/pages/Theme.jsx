import { useNavigate } from "react-router-dom";
import Rating from "../components/Rating";

export default function Theme() {
  const navigate = useNavigate();

  const handleClick = (url) => {
    navigate(url);
  };
  return (
    <main>
      <h1 className="text-6xl text-center font-bold text-accent m-10 mt-16 mb-16">
        Choisissez votre domaine d'expertise :
      </h1>
      <div className="flex flex-wrap justify-center gap-4 m-8">
        <div className="card bg-base-100 image-full w-96 shadow-xl">
          <figure>
            <img src="https://cdn.discordapp.com/attachments/1257972687305707567/1258684375596273664/soft-skills-Logo-Kategorien-removebg-preview.png?ex=6688f0ac&is=66879f2c&hm=383a013737a18e3e2ea94dd3cd66db6b17e3f8cda17f866d8de61e08c2ccc184&" alt="" className="w-[50%]" />
          </figure>
          <div className="card-body [&>*]:text-base-100">
            <h2 className="card-title">SOFT SKILLS !</h2>
            <p>Révélez l'humain derrière les compétences ! Très recherchés, les soft skills sont un incontournable pour vous démarquer.</p>
            <div className="card-actions justify-end">
              <button
                onClick={() => handleClick("/question")}
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
          <div className="card-body [&>*]:text-base-100">
            <h2 className="card-title">SQL !</h2>
            <p>La manipulation de bases de données n'a aucun secret pour vous ? Venez prouvez vos compétences ici !</p>
            <div className="card-actions justify-end">
              <button
                onClick={() => handleClick("/select_level_sql")}
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
            className="w-[224px]"
              src="src/assets/round7.png"
              alt=""
            />
          </figure>
          <div className="card-body [&>*]:text-base-100">
            <h2 className="card-title">PYTHON !</h2>
            <p>Langage de programmation populaire et incontournable. Testez-vous !</p>
            <div className="card-actions justify-end">
              <button
                onClick={() => handleClick("/select_level_python")}
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
              src="src/assets/Power-BI-Symbol-2048x1152.png"
              alt=""
            />
          </figure>
          <div className="card-body [&>*]:text-base-100">
            <h2 className="card-title">POWER BI !</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button
                onClick={() => handleClick("/select_level_powerBI")}
                className="btn btn-primary"
              >
                Commencer
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap bg-[#f8eeec] h-[800px]">
        <h2 className="text-6xl text-accent mb-4">
          Notre site en quelques chiffres
        </h2>
        <p className="mb-24 w-[700px]">
        Voici les données que nous avons enregistrées pour votre entreprise tout au long de notre collaboration.
        </p>
        <Rating />
      </div>
    </main>
  );
}
