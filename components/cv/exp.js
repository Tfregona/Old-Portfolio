import { EXP as MineExp } from "../../const/exp";

export default function Ex() {
  return (
    <div className="bg-third">
      <p className="pt-10 text-center text-2xl font-bold">
        MES EXPÉRIENCES PROFESSIONNELLES
      </p>
      <div className="p-10 lg:px-40 xl:px-60 divide-y divide-flash">
        {MineExp.map((item) => (
          <div key={item.title} className="p-4">
            <p className="text-lg font-bold">{item.title}</p>
            <p className="font-light text-flash">{item.subtitle}</p>
            <p className="indent-8 text-justify">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
