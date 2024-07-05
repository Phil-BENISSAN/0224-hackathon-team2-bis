import { useState } from 'react';

export default function Congrat() {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000); // 5000ms = 5 seconds
  };

  return (
    <main className="m-8 flex items-center">
      <div>
        <h1 className="text-6xl mb-8">Félicitations !</h1>
        <p className="mb-8">
          La première étape de votre recrutement est terminée !{" "}
        </p>
        <p className="w-3/4 mb-8">
          Inscrivez-vous pour qu’une entreprise vous recontacte si vous lui
          correspondez :{" "}
        </p>

        <div className="w-3/4">
          <label className="input input-bordered flex items-center gap-2 mb-8">
            Nom
            <input type="text" className="grow" placeholder="Daisy" />
          </label>
          <label className="input input-bordered flex items-center gap-2 mb-8">
            Email
            <input type="text" className="grow" placeholder="daisy@site.com" />
          </label>
        </div>
        <button className="btn mb-8" onClick={handleClick}>
          S'inscrire
        </button>
        {showAlert && (
          <div role="alert" className="alert alert-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Votre inscription a été confirmée !</span>
          </div>
        )}
      </div>
      <div>
        <img src="src/assets/Frame 320.png" alt="" />
      </div>
    </main>
  );
}
