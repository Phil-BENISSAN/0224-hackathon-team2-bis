import { useNavigate } from "react-router-dom";

export default function Theme() {
  const navigate = useNavigate();

  const handleClick = (url) => {
    navigate(url);
  };
  return (
    <main className="flex flex-wrap justify-center gap-4 m-8">
      <div className="card bg-base-100 image-full w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
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
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 image-full w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
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
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 image-full w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
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
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 image-full w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
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
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
