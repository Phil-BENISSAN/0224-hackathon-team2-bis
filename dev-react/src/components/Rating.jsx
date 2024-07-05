export default function Rating() {
  return (
    <div className="stats shadow h-40 bg-[#f8eeec] ">
      <div className="stat w-80">
        <div className="stat-figure text-primary">
        </div>
        <div className="stat-title">Offres postées</div>
        <div className="stat-value text-accent text-6xl">145</div>
      </div>

      <div className="stat w-80">
        <div className="stat-figure text-secondary">
        </div>
        <div className="stat-title">Tests effectués</div>
        <div className="stat-value text-accent text-6xl">25M+</div>
      </div>

      <div className="stat w-80">
        <div className="stat-figure text-secondary">
        </div>
        <div className="stat-title">Recrutement réussi</div>
        <div className="stat-value text-accent text-6xl">92%</div>
      </div>
    </div>
  );
}
