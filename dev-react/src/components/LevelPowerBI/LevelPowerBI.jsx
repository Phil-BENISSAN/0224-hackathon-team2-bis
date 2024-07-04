import { useNavigate } from "react-router-dom";

export default function LevelPowerBI() {
  const navigate = useNavigate();

  const handleClick = (url) => {
    navigate(url);
  };
  return (
    <main className="flex flex-wrap justify-center gap-4 m-8">
      <div className="card bg-base-100 image-full w-96 shadow-xl">
        <figure>
          <img
            src="src/assets/Power-BI-Symbol-2048x1152.png"
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">LEVEL 1 !</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleClick("/question_powerBI_1")}
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
        <div className="card-body">
          <h2 className="card-title">LEVEL 2 !</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleClick("/question_powerBI_2")}
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
        <div className="card-body">
          <h2 className="card-title">LEVEL 3 !</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleClick("/question_powerBI_3")}
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
