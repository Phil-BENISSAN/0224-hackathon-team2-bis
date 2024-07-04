import { useNavigate } from "react-router-dom";
import Rating from "../components/Rating";

export default function Theme() {
  const navigate = useNavigate();

  const handleClick = (url) => {
    navigate(url);
  };
  return (
    <main>
      <div className="flex flex-wrap justify-center gap-4 m-8">
        <div className="card bg-base-100 image-full w-96 shadow-xl">
          <figure>
            <img
              src=""
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">SOFT SKILLS !</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
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
              src=""
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">SQL !</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
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
              src=""
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">PYTHON !</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
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
              src=""
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">POWER BI!</h2>
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
          Quelques chiffres de notre site
        </h2>
        <p className="mb-24 w-[700px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
          dolorem quibusdam debitis! Corporis hic eius illo blanditiis sint
          architecto, temporibus dolores quasi possimus distinctio tenetur
          deserunt aspernatur sequi voluptatibus quaerat?
        </p>
        <Rating />
      </div>
    </main>
  );
}
