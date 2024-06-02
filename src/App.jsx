import Header from "./components/Header/Header";
import Main from "./pages/main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coin from "./pages/coin/Coin";
import NotFound from "./pages/not-found/NotFound";
import Wallet from "./pages/wallet/Wallet";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="coins/:coin"
            element={<Coin />}
            loader={({ params }) => {
              params.coin;
            }}
          />
          <Route path="wallet" element={<Wallet />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
