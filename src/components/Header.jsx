import SearchBarInfo from "./SearchBarInfo";

const Header = () => {
  return (
    <div>
      <SearchBarInfo />
      <div className="flex flex-row align-middle justify-between p-4 mt-5">
        <button className="flex flex-row w-40 h-12 box-border bg-dark-gray text-white items-center justify-center">
          <span className="material-symbols-outlined">add_alert</span>
          알림받기
        </button>
        <div className="text-4xl font-bold">눈송이</div>
        <div>
          <div className="text-sm/10">
            <span className="text-gray-400 mr-3">
              스토어등급
              <span className="material-symbols-outlined text-sm">license</span>
              <span className="text-black">
                빅파워
                <span className="material-symbols-outlined text-sm">help</span>
              </span>
            </span>
            <span className="text-sm/10">
              서비스만족
              <span className="material-symbols-outlined text-blue-500 text-sm">
                volunteer_activism
              </span>
              <span>
                빅파워
                <span className="material-symbols-outlined text-sm">help</span>
              </span>
            </span>
          </div>
          <div className="text-sm/10 ml-6">
            <span className="text-gray-500 ">오늘</span> 11,000
            <span className="text-gray-500 "> · 전체</span> 1,000,000
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
