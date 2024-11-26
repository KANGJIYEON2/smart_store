const SearchBarInfo = () => {
  return (
    <div className="bg-dark-gray text-white text-sm/tight p-4 justify-center ">
      <div className="flex flex-row border-b border-dark-gray-200 mb-2">
        <div className="font-bold flex-1">
          <button>NAVER</button>
          <button className="ml-4">
            <span className="bg-white box-border text-gray-700 text-sm/10 border-r-2">
              N
            </span>
            <span className="bg-white box-border text-gray-700 text-sm/10 border-r-2">
              +
            </span>
            <span className="ml-1">스토어</span>
          </button>
        </div>
        <div className="flex flex-row">
          <button className="text-white box-border flex-auto  bg-dark-gray-200 m-1 w-10 h-4">
            로그인
          </button>
          <span className="material-symbols-outlined">
            <button>apps</button>
          </span>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="font-bold flex-1 p-1">
          <div className="flex flex-row">
            <button className="">
              <img
                src="https://cdn.pixabay.com/photo/2016/03/27/19/57/woman-1284031_1280.jpg"
                alt="icon-img"
                className="w-10 max-w-10 h-10 max-h-10 rounded-full object-cover"
              />
            </button>
            <div className="mt-4">
              <button className="ml-4">
                겨울나기에 지친 여러분들을 위해, 눈송이를 우린 따뜻한 공간,
                눈송이 마켓
              </button>
              <span className="ml-2">
                | 관심고객수 1,000,000
                <span className="material-symbols-outlined text-sm/3 ml-0.5">
                  help
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-row relative mt-2">
          <input
            type="text"
            className="rounded-full w-60 h-10 text-center text-black"
            placeholder="검색어를 입력해주세요"
          />
          <button type="button" className="absolute top-2 right-4">
            <span className="material-symbols-outlined text-gray-500">
              search
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default SearchBarInfo;
