export default function About() {
  return (
    <div className="bg-third">
      <div className="p-10 text-center bg-second">
        <h1 className="text-4xl font-title text-flash">TRISTAN FREGONA</h1>
        <h4 className="text-xl">Étudiant Coding Acadmey by Epitech</h4>
      </div>
      <p className="pt-10 text-center text-2xl font-bold">À PROPOS DE MOI</p>
      <div className="p-10 lg:px-40 xl:px-60 grid grid-cols-1 md:grid-cols-2">
        <div className="my-2 md:pr-10 md:w-[30vw] md:ml-auto text-center md:text-right flex flex-col space-y-2">
          <p>Né le 04/03/2000</p>
          <p>
            Téléphone - <span className="font-bold">06.20.61.82.95</span>
          </p>
          <p>
            Mail - <span className="font-bold">tristan.fregona@epitech.eu</span>
          </p>
          <p>
            GitHub - <span className="font-bold">Tfregona</span>
          </p>
          <p>
            Véhiculé - <span className="font-bold">Permis B</span>
          </p>
        </div>
        <div className="my-2 indent-8 md:pl-10 md:w-[30vw] md:mr-auto text-center md:text-justify flex items-center border-t-2 md:border-l-2 md:border-t-0 border-flash">
          <p>
            Curieux mais également rigoureux, je suis toujours à la recherche de
            nouvelles connaissances tout en souhaitant maîtriser d’avantage les
            outils de mes domaines de compétences.
          </p>
        </div>
      </div>
      <p className="pt-10 text-center text-2xl font-bold">LANGUES</p>
      <div className="p-10 lg:px-40 xl:px-60 flex-col space-y-4">
        <div className="flex justify-center space-x-2">
          <img src="/img/src/uk.svg" alt="English flag" className="w-24" />
          <div className="flex items-center">
            <p>
              <span className="font-bold">Anglais B2 : </span>
              <br /> Niveau courant (10 ans)
            </p>
          </div>
        </div>
        <div className="flex justify-center space-x-2">
          <img src="/img/src/italy.svg" alt="Italian flag" className="w-24" />
          <div className="flex items-center">
            <p>
              <span className="font-bold">Italien A2 : </span>
              <br /> Niveau scolaire (5 ans)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
