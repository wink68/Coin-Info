import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chart from './routes/Chart';
import Coin from './routes/Coin';
import Coins from './routes/Coins';
import Price from './routes/Price';

function Router() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Coins />}></Route>
      {/* 리액트 라우터 v6 중첩 라우팅 */}
      <Route path='/:coinId' element={<Coin />}>
        <Route path='chart' element={<Chart />} />
        <Route path='price' element={<Price />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default Router;