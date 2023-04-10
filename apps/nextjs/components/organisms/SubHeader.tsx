import { ReactNode } from "react";

interface SubHeaderProps {
  children?: ReactNode;
}

export default function SubHeader({}: SubHeaderProps) {
  return (
    <div className="my-6 flex gap-2 overflow-x-auto px-2 md:px-4">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="card card-bordered card-compact md:card-normal bg-primary text-base-100"
        >
          <div className="card-body">
            <div className="flex items-center gap-2">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
              <button className="btn btn-secondary">Click Me</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
