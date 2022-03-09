export default function Home() {
  return (
    <div className="text-white">
      <div className="p-10 lg:px-40 xl:px-60 grid place-items-center h-screen bg-second">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-2 grid place-items-center">
            <div className="text-center text-lg">
              <p className="text-4xl">Vous souhaitez me contacter ?</p>
              <div className="m-2 h-[0.2rem] w-2/3 bg-flash mx-auto"></div>
              <div className="hover:text-flash hover:animate-pulse group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto group-hover:animate-bounce"
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
                  <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                  <polyline points="3 7 12 13 21 7"></polyline>
                </svg>
                <p className="pb-4">tristan.fregona@epitech.eu</p>
              </div>
              <div className="hover:text-flash hover:animate-pulse group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto group-hover:animate-bounce"
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
                  <rect x="7" y="4" width="10" height="16" rx="1"></rect>
                  <line x1="11" y1="5" x2="13" y2="5"></line>
                  <line x1="12" y1="17" x2="12" y2="17.01"></line>
                </svg>
                <p className="pb-4">06 20 61 82 95</p>
              </div>
            </div>
          </div>
          <div className="p-10">
            <img
              src="/img/src/me_sitdown.png"
              className="h-auto w-40 mx-auto"
              alt="Moi assis"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
