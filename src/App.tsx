/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Care from "./pages/Care";
import Nutrition from "./pages/Nutrition";
import Breeds from "./pages/Breeds";
import Rescue from "./pages/Rescue";
import Thanks from "./pages/Thanks";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="care" element={<Care />} />
          <Route path="nutrition" element={<Nutrition />} />
          <Route path="breeds" element={<Breeds />} />
          <Route path="rescue" element={<Rescue />} />
          <Route path="thanks" element={<Thanks />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
