import React from "react";
import { Routes, Route } from "react-router-dom";

import SeatAllocation from "../../pages/seatalloc/seatalloc";
import Home from "../../pages/home/home";
import Header from "../header/header";



const AppRoutes = () => {
  return (
    <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/seat-allocation" element={<SeatAllocation/>} />
    </Routes>
  );
};

export default AppRoutes;
