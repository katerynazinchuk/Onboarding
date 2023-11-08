export default function App() {
  return (<>
      <div className="rounded-3xl drop-shadow-lg absolute z-0 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-gradient-to-br from-amber-400 to-amber-800 w-[498px] h-[284px] -mt-[253px] -ml-3">
      </div>
          <div className="rounded-3xl drop-shadow-lg absolute z-1 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white/30  w-[346px] h-[144px] -mt-[215px] -ml-3 filter blur-lg">
          </div>
    <div className="absolute left-1/2 top-1/2 -ml-3 mt-[47px] h-[696px] w-[356px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white/50  px-16 py-10 drop-shadow-lg">
      <div className="fixed">
        <h1 className="text-xl font-bold text-white">Updates</h1>
        <p className="mt-3 text-white">
          23 in the last<time>7 hours</time>
        </p>
      </div>

      <div
        className="
      relative mt-[106px] flex flex-col gap-2 before:absolute before:-left-[19px] before:top-14
      before:h-full before:w-0 before:border before:border-gray-300 before:content-['']
      "
      >
        <div
          className="relative w-[252px] rounded-lg border-4 border-white bg-white p-5 drop-shadow-lg
            after:absolute after:-left-7 after:top-12 after:h-3 after:w-3 after:rounded-full after:bg-gray-300 after:content-['']
            hover:border-4 hover:border-indigo-500 hover:bg-transparent
            after:hover:bg-indigo-500"
        >
          <time className="text-sm">16:30</time>
          <h2>Believing Is The Absence Of Doubt</h2>
        </div>
        <div
          className="relative w-[252px] rounded-lg border-4 border-white bg-white p-5 drop-shadow-lg
            after:absolute after:-left-7 after:top-1/2 after:h-3 after:w-3 after:rounded-full after:bg-gray-300 after:content-[''] after:-translate-y-1/2
            hover:border-4 hover:border-indigo-500 hover:bg-transparent
            after:hover:bg-indigo-500"
        >
          <div>
            <time className="text-sm">15:22</time>
            <h2>Start With A Baseline</h2>
          </div>
        </div>
        <div
          className="relative w-[252px] rounded-lg border-4 border-white bg-white p-5 drop-shadow-lg
            after:absolute after:-left-7 after:top-1/2 after:h-3 after:w-3 after:rounded-full after:bg-gray-300 after:content-[''] after:-translate-y-1/2
            hover:border-4 hover:border-indigo-500 hover:bg-transparent
            after:hover:bg-indigo-500"
        >
          <div>
            <time className="text-sm">14:15</time>
            <h2>Break Through Self Doubt And Fear</h2>
          </div>
        </div>
      </div>
      <button className="mt-[90px] w-60 rounded-lg border-2 p-4">
        Show all updates
      </button>
    </div>
      </>
  )
}
