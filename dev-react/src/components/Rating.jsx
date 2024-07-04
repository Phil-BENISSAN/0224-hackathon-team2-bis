export default function Rating() {
  return (
    <div className="stats shadow h-40 bg-[#f8eeec] ">
      <div className="stat w-80">
        <div className="stat-figure text-primary">
        </div>
        <div className="stat-title">Page Views</div>
        <div className="stat-value text-accent text-6xl">25.6K</div>
      </div>

      <div className="stat w-80">
        <div className="stat-figure text-secondary">
        </div>
        <div className="stat-title">Page Views</div>
        <div className="stat-value text-accent text-6xl">2.6M</div>
      </div>

      <div className="stat w-80">
        <div className="stat-figure text-secondary">
        </div>
        <div className="stat-title">Tasks done</div>
        <div className="stat-value text-accent text-6xl">86%</div>
      </div>
    </div>
  );
}
