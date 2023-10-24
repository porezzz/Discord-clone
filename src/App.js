import "./App.css";
import Discover from "./components/Discover";
import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="flex h-screen">
      <SideBar />
      <Discover />
      <MainContent />

      {/* sidebad contains servers you are on */}
      {/* discover contains tabs such as: "HomePage" "Games" "Music" "Education" "Science" "Fun" "SchoolCentre" */}
      {/* Main Content contains everything else such as: "Hero" "Server List" */}
    </div>
  );
}

export default App;
