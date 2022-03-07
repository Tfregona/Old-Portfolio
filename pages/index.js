import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGhost, faGamepad, faJedi } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const Ilike = [
    { icon: faGhost, intro: "Les romans d’horreur", description: "Lorem" },
    {
      icon: faGamepad,
      intro: "L’actualité high-tech et jeux vidéo",
      description: "Lorem",
    },
    { icon: faJedi, intro: "La Pop et Web Culture", description: "Lorem" },
  ];
  return (
    <div className="bg-third text-white">
      {/*Landing image*/}
      <div
        className="w-full text-center p-10"
        style={{
          backgroundImage: `url(/img/src/Mont_Blanc_Dark.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img
          src="/img/pictures/cv1.jpg"
          className="h-40 w-40 rounded-full object-cover mx-auto"
          alt="Tristan Fregona"
        />
        <div className="p-5">
          <h1 className="text-4xl font-title text-second">Tristan Fregona</h1>
          <h2 className="text-xl font-bold">
            &#60; Développeur web étudiant /&#62;
          </h2>
        </div>
        <div>
          <a
            href="/cv"
            className="rounded overflow-hidden relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-2 active:border-white active:shadow-none hover:border-second hover:text-second border-white text-white"
          >
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
            <span className="relative">Voir mon CV</span>
          </a>
          <a
            href="/projects"
            className="rounded overflow-hidden relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-2 active:border-white active:shadow-none hover:border-second hover:text-second border-white text-white"
          >
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-40 group-hover:h-40 opacity-10"></span>
            <span className="relative">Voir mes projets</span>
          </a>
        </div>
      </div>
      {/*Who am I*/}
      <div
        id="about"
        className="grid grid-cols-1 p-10 md:px-32 md:flex md:flex-row bg-primary"
      >
        <img
          src="/img/pictures/tristan2.jpg"
          className="h-60 w-60 object-cover mx-auto md:mt-4 border-2 border-transparent shadow-sm shadow-gray-800"
          alt="Tristan Fregona"
        />
        <div className="px-5 flex flex-col space-y-4">
          <div>
            <p className="text-2xl font-bold">À propos de moi</p>
            <div className="h-[0.1rem] w-10 bg-second -mt-1 absolute"></div>
          </div>
          <p className="break-words">
            Après avoir obtenu ma licence en information et communication j'ai
            décidé de m'orienter vers le développement web. C'est pourquoi en
            octobre 2021 j'ai intégré la Coding Academy pendant 18 semaines. Le
            mot clé de cette formation Epitech est 'apprendre à apprendre'.
            C'est à dire que tous nos projets ont été réalisés de manière
            autonaume, résoudre les problèmes par soi même. AJOUTER LOCALISATION
          </p>
          <p className="p-2 border-2 border-second rounded-md">
            Curieux de nature, ce milieu m'a tout de suite passioné. Souhaitant
            me rapprocher de la définition du développeur "full-stack" les
            technologies "front" comme "back" m'interessent tout autant.
          </p>
        </div>
      </div>
      {/*I like*/}
      <div className="p-10 md:px-32">
        <div className="mb-5">
          <p className="text-2xl font-bold">J'aime ❤️</p>
          <div className="h-[0.1rem] w-10 bg-second -mt-1 absolute"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Ilike.map((item) => (
            <div className="p-3 border-2 border-second rounded-md">
              <FontAwesomeIcon
                className="text-second"
                icon={item.icon}
                style={{ fontSize: 50 }}
              />
              <p className="font-bold">{item.intro}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
