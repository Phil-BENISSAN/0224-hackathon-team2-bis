import { useState } from 'react';

export default function Annonce() {
        const [isVisible, setIsVisible] = useState(true);
      
        const handleRefuserClick = () => {
          setIsVisible(false);
        };

  return (
    <main className="minh-screen mb-16">
      <h1 className="text-6xl text-center font-bold text-accent m-10 mt-16 mb-16">
        Bienvenue Wild Code School !
      </h1>
      <p className="my-8 text-center text-accent text-xl mb-16">
        Voici les candidats au poste de data analyste :
      </p>
      <section className="flex flex-wrap justify-center gap-10 gap-y-18 mx-auto">
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src="\src\pages\profil.webp"
              alt=""
              className="h-56 w-80"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Judith Gibson</h2>
            <p>Affinité : 70%</p>
            <div className="card-actions justify-around">
              <button className="btn btn-secondary w-36">Contacter</button>
              <button className="btn btn-outline btn-secondary w-36">
                Refuser
              </button>
            </div>
          </div>
        </div>
        {isVisible && (
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
          <img
              src="\src\pages\profil.webp"
              alt=""
              className="h-56 w-80"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Jule Wade</h2>
            <p>Affinité : 24%</p>
            <div className="card-actions justify-around">
              <button className="btn btn-secondary w-36">Contacter</button>
              <button onClick={handleRefuserClick} className="btn btn-outline btn-secondary w-36">
                Refuser
              </button>
            </div>
          </div>
        </div>
        )}
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
          <img
              src="\src\pages\profil.webp"
              alt=""
              className="h-56 w-80"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Ralph Price</h2>
            <p>Affinité : 58%</p>
            <div className="card-actions justify-around">
              <button className="btn btn-secondary w-36">Contacter</button>
              <button className="btn btn-outline btn-secondary w-36">
                Refuser
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
          <img
              src="\src\pages\profil.webp"
              alt=""
              className="h-56 w-80"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Hailey Graham</h2>
            <p>Affinité : 88%</p>
            <div className="card-actions justify-around">
              <button className="btn btn-secondary w-36" onClick={()=>document.getElementById('my_modal_1').showModal()}>Contacter</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Contacter Hailey Graham</h3>
    <p className="py-4">LinkedIn : <a href="https://www.linkedin.com/in/hailey-graham/" target="_blank" className="underline">www.linkedin.com/in/hailey-graham/</a> </p>
    <p className="py-4">Email : haileygraham@pro.com</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
              <button className="btn btn-outline btn-secondary w-36">
                Refuser
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
          <img
              src="\src\pages\profil.webp"
              alt=""
              className="h-56 w-80"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Carmen Walker</h2>
            <p>Affinité : 69%</p>
            <div className="card-actions justify-around">
              <button className="btn btn-secondary w-36">Contacter</button>
              <button className="btn btn-outline btn-secondary w-36">
                Refuser
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
