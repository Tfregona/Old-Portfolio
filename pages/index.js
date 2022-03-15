import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGhost, faGamepad, faJedi } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { BiGame } from "react-icons/bi";
import { MdOutlineVideogameAsset } from "react-icons/md";
import { RiGhost2Line } from "react-icons/ri";

export default function Home() {
  const Ilike = [
    {
      icon: faGhost,
      intro: "Les romans d’horreur",
      description:
        "Le genre horrifique est tellement large que cela ne veut presque rien dire. Ce sont particulièrement Stephen King, H.P. Lovecraft ou encore Junji Itō qui me font frissonner.",
    },
    {
      icon: faGamepad,
      intro: "L’actualité high-tech et jeux vidéo",
      description:
        "Passionné par le monde du jeu vidéo depuis tout petit, aujourd'hui, je suis avec ferveur l'actualité de cet empire du divertissement.",
    },
    {
      icon: faJedi,
      intro: "La Pop et Web Culture",
      description:
        "La définition de toutes mes passions. Que cela soit livres, mangas ou jeux vidéo, toutes sont regroupées sous cette appellation et en tant que millénial elle fait partie de moi.",
    },
  ];
  const icons = [RiGhost2Line, MdOutlineVideogameAsset, BiGame];
  return (
    <div className="text-white">
      {/*Landing image*/}
      <div
        className="w-full text-center p-10"
        style={{
          backgroundImage: `url(/img/src/Mont_Blanc_Dark.jpeg)`,
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img
          src="/img/pictures/cv.jpeg"
          className="h-40 w-40 rounded-full object-cover mx-auto"
          alt="Tristan Fregona"
        />
        <div className="p-5">
          <h1 className="text-4xl font-title text-flash">Tristan Fregona</h1>
          <h2 className="text-xl font-bold">
            &#60; Développeur web étudiant /&#62;
          </h2>
        </div>
        <div>
          <Link href="/cv">
            <button className="rounded overflow-hidden relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-2 active:border-white active:shadow-none hover:border-flash hover:text-flash border-white text-white">
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
              <span className="relative">Voir mon CV</span>
            </button>
          </Link>
          <Link href="/projects">
            <button className="rounded overflow-hidden relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-2 active:border-white active:shadow-none hover:border-flash hover:text-flash border-white text-white">
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-40 group-hover:h-40 opacity-10"></span>
              <span className="relative">Voir mes projets</span>
            </button>
          </Link>
        </div>
      </div>
      {/*Who am I*/}
      <div
        id="about"
        className="p-10 lg:px-40 xl:px-60 grid grid-cols-1 md:grid-cols-3 bg-primary"
      >
        <div className="my-4 md:px-4">
          <div id="about_content">
            <img
              id="about_image"
              src="/img/pictures/tristan_mb.jpg"
              alt="Tristan Fregona"
            />
          </div>
        </div>
        <div className="md:px-4 col-span-2 flex flex-col space-y-4 text-justify break-words">
          <div>
            <p className="text-2xl font-bold">À propos de moi</p>
            <div className="h-[0.1rem] w-10 bg-flash -mt-1 absolute"></div>
          </div>
          <p>
            Après avoir obtenu ma licence en information et communication, j'ai
            décidé de m'orienter vers le développement web. C'est pourquoi en
            octobre 2021, j'ai intégré la Coding Academy pendant 18 semaines. Le
            mot-clé de cette formation Epitech est d'
            <span className="font-semibold">apprendre à apprendre</span>.
            C'est-à-dire que tous nos projets ont été réalisés de manière
            autonome. Résoudre les problèmes par soi-même, c'est comme cela que
            j'ai avancé dans ce milieu qu'est le{" "}
            <span className="font-semibold text-flash">développement</span>.
          </p>
          <p>
            Je suis actuellement retourné dans mon département de cœur, la
            Haute-Savoie et plus précisément dans le Chablais.
          </p>
          <p className="p-2 border-2 border-flash">
            Curieux de nature, ce milieu m'a tout de suite passionné. C'est
            pourquoi je souhaite me rapprocher de la définition du développeur
            "full-stack". Les technologies "Front" comme "Back" m'intéressent
            les unes comme les autres.
          </p>
        </div>
      </div>
      {/*I like*/}
      <div className="bg-second p-10 lg:px-40 xl:px-60">
        <div className="mb-5">
          <p className="text-2xl font-bold">J'aime ❤️</p>
          <div className="h-[0.1rem] w-10 bg-flash -mt-1 absolute"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Ilike.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={item.intro}
                className="p-3 border-2 border-gray-500 rounded-md group hover:animate-pulse"
              >
                <Icon className="text-flash w-16 h-16" />
                <p className="font-bold">{item.intro}</p>
                <p className="text-justify break-words">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
