import { SKILLS as MineSkills } from "../../const/skills";

export default function Skills() {
  return (
    <div className="bg-second">
      <p className="pt-10 text-center text-2xl font-bold">MES COMPÉTENCES</p>
      <div className="p-10 lg:px-40 xl:px-60 grid grid-cols-2 gap-6">
        {MineSkills.map((item) => (
          <div key={item.type}>
            <p className="mb-4 underline">{item.type} :</p>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
              {item.skills.map((subitem) => (
                <div
                  key={subitem.name}
                  className="rounded-md bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
                >
                  <img
                    src={subitem.src}
                    className="h-10 w-auto mx-auto p-1"
                    alt={subitem.name}
                  />
                  <p className="text-center p-1 border-t-[1px] text-flash border-flash">
                    {subitem.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
