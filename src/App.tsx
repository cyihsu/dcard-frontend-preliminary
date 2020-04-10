import React from "react";
// Extracted from original chunks
import "./App.css";
import PostList from "./components/List";
import MainFrame from "./components/Frame/MainFrame";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: "#09324E",
        width: "100vw",
      }}
    >
      <MainFrame>
        <PostList />
      </MainFrame>
    </div>
  );
}

export default App;
