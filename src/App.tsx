import { Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./routes/Home";
import { Main } from "./routes/Main";
import { Menu } from "./routes/Menu";
import { Payment } from "./routes/Payment";
import { PayProgress } from "./routes/PayProgress";
import './App.css'

function App() {
  return (
    <Suspense fallback={<div>로딩중</div>}>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/main" element={<Main></Main>} />
        <Route path="/menu" element={<Menu></Menu>} />
        <Route path="/payment" element={<Payment></Payment>} />
        <Route path="/payprogress/:type" element={<PayProgress></PayProgress>} />


      </Routes>
    </Suspense>
  );
}

export default App;
