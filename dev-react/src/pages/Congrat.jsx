export default function Congrat() {
  return (
    <main className="m-8 flex items-center">
      <div>
        <h1 className="text-6xl mb-8">Félicitations !</h1>
        <p className="mb-8">La première étape de votre recrutement est terminé ! </p>
        <p className="w-3/4 mb-8">
          Inscrivez vous pour qu’une entreprise vous recontacte si vous lui
          correspondez :{" "}
        </p>

        <div className=" w-3/4">
          <label className="input input-bordered flex items-center gap-2  mb-8">
            Name
            <input type="text" className="grow" placeholder="Daisy" />
          </label>
          <label className="input input-bordered flex items-center gap-2 mb-8">
            Email
            <input type="text" className="grow" placeholder="daisy@site.com" />
          </label>
        </div>
        <button className="btn">S'inscrire</button>
      </div>
      <div>
        <img src="src/assets/Frame 320.png" alt="" />
      </div>
    </main>
  );
}
