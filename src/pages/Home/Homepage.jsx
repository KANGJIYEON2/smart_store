import { useParams, useNavigate } from "react-router-dom";
import useNaver from "../../hooks/UseNaver";

// eslint-disable-next-line react/prop-types
function Homepage({ showBanner }) {
  const { category } = useParams();
  const navigate = useNavigate();
  const queryMap = {
    best: "겨울상품 베스트",
    christmas: "크리스마스",
    "winter-clothes": "겨울옷",
    "winter-items": "겨울소품",
    "winter-gear": "방한용품",
    "winter-accessories": "겨울악세서리",
  };
  const searchQuery = queryMap[category] || "겨울상품";
  const { loading, data, error } = useNaver(searchQuery);

  const formatPrice = (price) =>
    price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const stripHtmlTags = (html) => html.replace(/<\/?[^>]+(>|$)/g, "");

  const handleClick = (item) => {
    navigate(`/detail/${item.id}`, { state: item });
  };

  return (
    <div className="max-w-full">
      {/* 배너: Homepage에서만 표시 */}
      {showBanner && (
        <div className="w-full">
          <img
            src="https://cdn.pixabay.com/photo/2018/12/22/10/40/tree-decorations-3889456_1280.jpg"
            alt="겨울"
            className="w-full h-96 object-cover"
          />
        </div>
      )}

      <h1 className="text-center mt-4 text-2xl font-bold">
        {queryMap[category] || "겨울상품 랜덤 추천"}
      </h1>

      {loading && <p className="text-center mt-4">로딩 중...</p>}
      {error && (
        <p className="text-center mt-4 text-red-500">
          에러 발생: {error.message}
        </p>
      )}

      {data && data.length > 0 ? (
        <div className="flex flex-row flex-wrap justify-center p-4 gap-4">
          {data.map((item, index) => (
            <div
              key={index}
              onClick={() => handleClick(item)}
              className="w-1/4 p-2 border rounded shadow-sm cursor-pointer hover:shadow-md"
            >
              <img
                src={item.image}
                alt={stripHtmlTags(item.title)}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h2 className="font-bold text-xl mt-2">
                {stripHtmlTags(item.title)}
              </h2>
              <h3 className="font-bold text-base mt-1">
                {formatPrice(item.lprice)}원
              </h3>
            </div>
          ))}
        </div>
      ) : (
        !loading && (
          <p className="text-center mt-4">상품 정보를 찾을 수 없습니다.</p>
        )
      )}
    </div>
  );
}

export default Homepage;
