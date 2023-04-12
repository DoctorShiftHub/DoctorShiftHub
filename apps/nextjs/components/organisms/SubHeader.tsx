import { RxMoon, RxSun } from "react-icons/rx";

import { ReactNode } from "react";
import ScrollSubHeaderButton from "../atoms/ScrollSubHeaderButton";

interface SubHeaderProps {
  children?: ReactNode;
}

export default function SubHeader({}: SubHeaderProps) {
  return (
    <div className="my-2">
      <h2 className="text-secondary ml-2 mb-2 text-lg font-black md:ml-4">
        Vagas urgentes
      </h2>
      <div className="relative">
        <ScrollSubHeaderButton />
        <div
          id="promoted"
          className="flex gap-2 overflow-x-auto px-2 md:px-4"
          style={{
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="card card-bordered card-side card-compact bg-primary text-primary-content dark:shadow-none"
            >
              <div className="text-secondary flex h-full flex-col items-center justify-center gap-4 pl-2 text-2xl md:pl-4">
                <RxSun />
                <RxMoon />
              </div>
              <div className="card-body w-[200px]">
                <div>
                  <p className="font-semibold">Médico Generalista</p>
                  <p className="dark:text-base-content text-xs">
                    Hospital do Monte Castelo, Teresina - PI
                  </p>
                </div>
                <button className="btn btn-secondary btn-xs">Assumir</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
