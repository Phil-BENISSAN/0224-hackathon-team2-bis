import { useNavigate } from "react-router-dom";
export default function Entreprise() {
  const navigate = useNavigate();

  const handleClick = (url) => {
    navigate(url);
  };
  return (
    <main className="h-screen">
      <h1 className="text-6xl text-center font-bold text-accent m-10 mt-16 mb-10">
        Bienvenue Wild Code School
      </h1>
      <p className="my-8 text-center text-accent text-xl mb-16">
        Choisissez ici le poste pour lequel vous souhaitez avoir un candidat :
      </p>
      <section className="flex justify-evenly">
        <div className="card bg-base-100 image-full w-96 shadow-xl">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="font-bold text-xl text-base-100 text-center">
              Data analyste
            </h2>
            <p className="grow-0 text-base-100">Tests requis : </p>
            <ul className="grow [&>*]:text-base-100 ">
              <li>Softs skills</li>
              <li>Python</li>
              <li>Power BI</li>
            </ul>
            <div className="card-actions justify-end">
              <button
                onClick={() =>
                  handleClick("/entreprise/wild_code_school/CqInovDBV96hBZ5j7")
                }
                className="btn btn-primary"
              >
                Voir les candidats --{">"}
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 image-full w-96 shadow-xl">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="font-bold text-xl text-base-100 text-center">
              Développeur FullStack
            </h2>
            <p className="grow-0 text-base-100">Tests requis : </p>
            <ul className="grow [&>*]:text-base-100">
              <li>React</li>
              <li>NodeJS</li>
              <li>SQL</li>
              <li>Git</li>
            </ul>
            <div className="card-actions justify-end">
              <button
                onClick={() =>
                  handleClick("/entreprise/wild_code_school/CqInovDBV96hBZ5j7")
                }
                className="btn btn-primary"
              >
                Voir les candidats --{">"}
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 image-full w-96 shadow-xl">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1576153192396-180ecef2a715?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="font-bold text-xl text-base-100 text-center">
              UI/UX Designer
            </h2>
            <p className="grow-0 text-base-100">Tests requis : </p>
            <ul className="grow [&>*]:text-base-100">
              <li>Softs skills</li>
              <li>Photoshop</li>
              <li>Figma</li>
            </ul>
            <div className="card-actions justify-end">
              <button
                onClick={() =>
                  handleClick("/entreprise/wild_code_school/CqInovDBV96hBZ5j7")
                }
                className="btn btn-primary"
              >
                Voir les candidats --{">"}
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center mt-11">
        <button
          onClick={() => document.getElementById("my_modal_1").showModal()}
          className="btn btn-primary text-accent text-xl  my-10"
        >
          Poster une nouvelle annonce +
        </button>
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          {" "}
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-circle btn-outline ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </form>
          </div>
          <h3 className="font-bold text-lg">Poste recherché</h3>
          <input
            type="text"
            placeholder="Tapez"
            className="input input-bordered w-full max-w-xs mb-10"
          />
          <h3 className="font-bold text-lg ">Selectionnez au moins un test</h3>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Remember me</span>
              <input type="checkbox" defaultChecked className="checkbox" />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Remember me</span>
              <input type="checkbox" defaultChecked className="checkbox" />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Remember me</span>
              <input type="checkbox" defaultChecked className="checkbox" />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Git</span>
              <input type="checkbox" defaultChecked className="checkbox" />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">NodeJs</span>
              <input type="checkbox" defaultChecked className="checkbox" />
            </label>
          </div>
          <button
            className="btn btn-disabled"
            tabIndex="-1"
            role="button"
            aria-disabled="true"
          >
            Valider
          </button>
        </div>
      </dialog>
    </main>
  );
}
