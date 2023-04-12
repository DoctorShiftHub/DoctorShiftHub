"use client";

export default function Page() {
  return (
    <div className="grid grid-cols-1 gap-2 px-2 sm:grid-cols-2 md:grid-cols-3 md:gap-4 md:px-4">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="card card-compact md:card-normal dark:bg-neutral dark:text-neutral-content scroll-smooth shadow dark:shadow-none"
          style={{
            scrollSnapType: "x mandatory",
          }}
        >
          <div
            className="card-body"
            style={{
              scrollSnapAlign: "start",
            }}
          >
            <h2 className="card-title">Médico Generalista</h2>
            <ul>
              <li>Hospital do Monte Castelo</li>
              <li className="mb-2">Teresina - PI</li>
              <li>
                <span className="font-bold">Valor:</span> R$ 800,00
              </li>
            </ul>
            <div className="btn-group justify-end">
              <button className="btn btn-primary btn-outline">Ver mais</button>
              <button className="btn btn-primary">Assumir</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
