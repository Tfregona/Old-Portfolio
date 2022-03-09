export default function Cv() {
  return (
    <div className="text-white">
      <div className="p-10 lg:px-40 xl:px-60 bg-second text-center grid place-items-center h-screen">
        <div className="p-3 border-dashed border-2 border-flash rounded">
          <p className="text-md mb-3">
            🚧 Cette page est en cours de construction... 🚧
          </p>
          <p className="text-xl mb-3">
            En attendant, vous pouvez télécharger mon CV juste en dessous !
          </p>
          <a
            href="/docs/TRISTAN_FREGONA_CV.pdf"
            download
            className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-white text-flash inline-block"
          >
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-flash group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-white flex">
              CV Tristan Fregona
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
                <polyline points="7 11 12 16 17 11"></polyline>
                <line x1="12" y1="4" x2="12" y2="16"></line>
              </svg>
            </span>
          </a>
        </div>
      </div>
      {/* <div className="h-[30rem] bg-third"></div> */}
    </div>
  );
}
