import ProjectCard from "../components/projectCard";
import { EPITECH as EpitechProjects } from "../const/epitechprojects";
import { MINE as MineProjects } from "../const/mineprojects";
import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Projects() {
  let [categories] = useState({
    "Mes projets": MineProjects,
    "Projets chez Epitech": EpitechProjects,
  });
  return (
    <div className="text-white">
      {/* Landing banner */}
      <div className="p-10 lg:px-40 xl:px-60 text-center bg-second">
        <p className="text-4xl font-title text-flash">Mes projets</p>
        <p className="text-xl">
          Que ce soit dans mes formations ou mes projets personnels, je les ai
          tous présenté ici. <br />
          Chacun est accessible sur mon profil
          <a
            className="font-bold text-flash hover:text-flash/80"
            href="https://github.com/Tfregona"
            target="_blank"
          >
            {" "}
            Github{" "}
          </a>
          avec une présentation détaillée{" "}
          <span className="font-light">
            (images, technologies utilisées, description, etc ...)
          </span>{" "}
          du site ou de l'application en question.
        </p>
      </div>
      {/* Projects buckle */}
      <div className="p-5 lg:px-40 xl:px-60 bg-third">
        <Tab.Group>
          <Tab.List className="flex p-1 space-x-1 bg-primary rounded-xl">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full py-2.5 text-sm leading-5 font-medium text-flash rounded-lg",
                    "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-flash ring-second ring-opacity-60",
                    selected
                      ? "bg-second shadow"
                      : "text-gray-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(categories).map((item, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames("p-3 bg-second rounded-xl")}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {item.map((item) => (
                    <ProjectCard key={item.title} item={item} />
                  ))}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
