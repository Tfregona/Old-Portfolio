export default function ProjectCard({ item }) {
  return (
    //   Card for a project
    <div className="rounded-md bg-primary text-white overflow-hidden border border-gray-700">
      <div className="p-5 pb-0 bg-third min-h-[500px]">
        <img src={item.img} className="h-auto w-full" alt={item.title} />
        <p className="text-2xl mb-2">{item.title}</p>
        <p className="text-justify border-l-2 border-flash px-1 mx-1 mb-2">
          {item.description}
        </p>
        <div className="flex space-x-4 py-5">
          <a
            href={item.github}
            target="_blank"
            rel="noreferrer"
            className="py-2 px-4 bg-transparent hover:bg-flash font-semibold border border-white hover:border-transparent rounded"
          >
            GitHub
          </a>
          {item.live && (
            <a
              href={item.live}
              target="_blank"
              rel="noreferrer"
              className="py-2 px-4 bg-flash hover:bg-flash/90 font-semibold rounded"
            >
              Live
            </a>
          )}
        </div>
      </div>
      <div className="bg-primary p-5">
        <p className="text-lg text-center mb-3 border-b-2">
          Technologies utilisées :
        </p>
        <div className="grid grid-cols-2 gap-4">
          {item.techs.map((tech) => (
            <div
              key={tech.title}
              className="rounded-md bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
            >
              <img
                src={tech.img}
                className="h-10 w-auto mx-auto p-1"
                alt={tech.title}
              />
              <p className="text-center p-1 border-t-[1px] text-flash border-flash">
                {tech.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
