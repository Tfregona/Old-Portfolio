export default function Home() {
  return (
    <>
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
        <div className="p-5 text-white">
          <h1 className="text-4xl font-title text-myorange">Tristan Fregona</h1>
          <h2 className="text-xl font-bold">
            &#60; Développeur web étudiant /&#62;
          </h2>
        </div>
        <div>
          <a
            href="#_"
            className="rounded overflow-hidden relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-2 active:border-white active:shadow-none hover:border-myorange hover:text-myorange border-white text-white"
          >
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
            <span className="relative">Qui suis-je ?</span>
          </a>
          <a
            href="/projects"
            className="rounded overflow-hidden relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-2 active:border-white active:shadow-none hover:border-myorange hover:text-myorange border-white text-white"
          >
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
            <span className="relative">Voir mes projets</span>
          </a>
        </div>
      </div>
    </>
  );
}
