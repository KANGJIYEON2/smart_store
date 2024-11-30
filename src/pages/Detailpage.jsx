import { useLocation } from "react-router-dom";

function DetailPage() {
  const location = useLocation();
  const item = location.state;

  const formatPrice = (price) =>
    price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const stripHtmlTags = (html) => html.replace(/<\/?[^>]+(>|$)/g, "");

  if (!item) {
    return (
      <div className="max-w-screen-lg mx-auto p-4">
        <p className="text-center text-gray-500">
          상품 정보를 불러올 수 없습니다.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          <img
            src={item.image}
            alt={stripHtmlTags(item.title)}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-bold mb-4">
            {stripHtmlTags(item.title)}
          </h1>
          <h2 className="text-xl font-semibold text-red-600 mb-4">
            {formatPrice(item.lprice)}원
          </h2>
          <p className="text-gray-700 mb-6">
            {item.description || "상품 설명 없음"}
          </p>
          <button className="w-full bg-naver-color py-3 rounded-lg font-bold hover:opacity-90">
            구매하기
          </button>
        </div>
      </div>

      {/* 추가 정보 */}
      <div className="mt-10">
        <h3 className="text-xl font-bold mb-4">상품 상세 정보</h3>
        <p className="text-gray-700">
          {item.detail || "추가 정보가 없습니다."}
        </p>
      </div>
    </div>
  );
}

export default DetailPage;
