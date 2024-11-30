import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Home/Homepage";
import DetailPage from "./pages/Detailpage";

function App() {
  return (
    <Router>
      <Header />
      {/* 네비게이션 바 */}
      <nav className="flex justify-center bg-gray-100 py-4">
        {[
          { name: "베스트", path: "/best" },
          { name: "크리스마스", path: "/christmas" },
          { name: "겨울옷", path: "/winter-clothes" },
          { name: "겨울소품", path: "/winter-items" },
          { name: "방한용품", path: "/winter-gear" },
          { name: "겨울악세서리", path: "/winter-accessories" },
        ].map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `px-4 py-2 ${
                isActive
                  ? "font-bold text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* 라우팅 */}
      <Routes>
        <Route path="/" element={<Homepage showBanner={true} />} />
        <Route path="/:category" element={<Homepage showBanner={false} />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
