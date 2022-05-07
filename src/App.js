import React from "react";
import BodyApp from "./BodyApp";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <div className="w-full h-[55px] bg-white border-b-[0.3px] py-[20px] sticky top-0 z-[99]">
        <Header className="" />
      </div>

      <BodyApp className="" />
      {/* App body */}
      {/* Sidebar*/}
      {/* Feed*/}
      {/* Widgets*/}
    </div>
  );
}

export default App;
