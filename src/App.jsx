import { Route, Routes } from "react-router-dom";
import HeroSection from "./pages/HeroSection";
import Challenges from "./pages/Challenges";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/debugging-dojo" element={<HeroSection />} />
        <Route path="/challenges" element={<Challenges />} />
      </Routes>
    </>
  );
}

export default App;
