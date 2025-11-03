import { Route, Routes } from "react-router-dom";
import HeroSection from "./pages/HeroSection";
import Challenges from "./pages/Challenges";
import ChallengesDebug from "./pages/ChallengesDebug";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/complete-the-code" element={<Challenges />} />
        <Route path="/debug" element={<ChallengesDebug />} />
      </Routes>
    </>
  );
}

export default App;
