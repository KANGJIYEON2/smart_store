function Homepage() {
    return (
        <div className="max-w-full">
            <img
                src="https://cdn.pixabay.com/photo/2018/12/22/10/40/tree-decorations-3889456_1280.jpg"
                alt="겨울"
                className="w-full h-96"
            />
            <div>
                <h1 className="text-center mt-4 text-2xl font-bold">
                    실시간 랭킹
                </h1>
                <div className="flex flex-row p-4 gap-4">
                    <div>
                        <img
                            src="https://cdn.pixabay.com/photo/2016/11/23/15/25/cabinet-1853504_1280.jpg"
                            alt=""
                            className=""
                        />
                        <h2 className="font-bold text-xl">상품이름</h2>
                        <h3 className="font-bold text-base">30,000원</h3>
                    </div>
                    <div>
                        <img
                            src="https://cdn.pixabay.com/photo/2016/11/23/15/25/cabinet-1853504_1280.jpg"
                            alt=""
                            className=""
                        />
                        <h2 className="font-bold text-xl">상품이름</h2>
                        <h3 className="font-bold text-base">30,000원</h3>
                    </div>
                    <div>
                        <img
                            src="https://cdn.pixabay.com/photo/2016/11/23/15/25/cabinet-1853504_1280.jpg"
                            alt=""
                            className=""
                        />
                        <h2 className="font-bold text-xl">상품이름</h2>
                        <h3 className="font-bold text-base">30,000원</h3>
                    </div>
                    <div>
                        <img
                            src="https://cdn.pixabay.com/photo/2016/11/23/15/25/cabinet-1853504_1280.jpg"
                            alt=""
                            className=""
                        />
                        <h2 className="font-bold text-xl">상품이름</h2>
                        <h3 className="font-bold text-base">30,000원</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
