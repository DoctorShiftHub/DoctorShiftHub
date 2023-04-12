"use client";

import {
  RxCalendar,
  RxLightningBolt,
  RxMoon,
  RxSewingPin,
  RxSpaceBetweenHorizontally,
  RxSun,
} from "react-icons/rx";

export default function Page() {
  return (
    <div className="grid grid-cols-1 gap-2 px-2 sm:grid-cols-2 md:grid-cols-3 md:gap-4 md:px-4">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="card card-compact card-bordered md:card-normal dark:bg-base-300 scroll-smooth dark:shadow-none"
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
            <div className="text-primary flex justify-center gap-4 text-2xl">
              <RxSun />
              <RxMoon />
            </div>
            <div className="divider my-0 py-0"></div>
            <h2 className="card-title">Médico Generalista</h2>
            <ul className="space-y-2">
              <li>
                <div className="flex items-center gap-2">
                  <RxSewingPin className="text-primary text-lg" />
                  <span>Hospital do Monte Castelo, Teresina - PI</span>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <RxCalendar className="text-primary text-lg" />
                  <span>11/04/2023 - 19h~07h</span>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <RxSpaceBetweenHorizontally className="text-primary text-lg" />
                  <span>125 km</span>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <RxLightningBolt className="text-primary text-lg" />
                  <span>R$ 800,00</span>
                </div>
              </li>
              <li></li>
            </ul>
            <div className="btn-group justify-end">
              <button className="btn btn-primary btn-outline">Ver mais</button>
              <button className="btn btn-primary">Assumir</button>
            </div>
            <div className="card-actions justify-end gap-2">
              <div className="badge badge-outline">Até: 11/04/2023</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
