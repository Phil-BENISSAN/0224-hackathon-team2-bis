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
      <p className="my-8 text-center text-accent text-xl mb-16">Choisissez ici le poste pour lequel vous souhaitez avoir un candidat :</p>
      <section className="flex justify-evenly">
      <div className="card bg-base-100 image-full w-96 shadow-xl">
        <figure>
          <img  src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </figure>
        <div className="card-body">
          <h2 className="font-bold text-xl text-base-100 text-center">Data analyste</h2>
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
          <img  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </figure>
        <div className="card-body">
          <h2 className="font-bold text-xl text-base-100 text-center">Développeur FullStack</h2>
          <p className="grow-0 text-base-100">Tests requis : </p>
          <ul className="grow [&>*]:text-base-100">
            <li>React</li>
            <li>Node</li>
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
          <img  src="https://images.unsplash.com/photo-1576153192396-180ecef2a715?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </figure>
        <div className="card-body">
          <h2 className="font-bold text-xl text-base-100 text-center">UI/UX Designer</h2>
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
    </main>
  );
}
