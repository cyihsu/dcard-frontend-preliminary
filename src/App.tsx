import React from "react";
// Extracted from original chunks
import "./App.css";
import PostList from "./components/List";
import MainFrame from "./components/Frame/MainFrame";
import Nav from "./components/Nav";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: "#F3F3F3",
        width: "100vw",
      }}
    >
      <Nav />
      <MainFrame>
        <PostList />
      </MainFrame>
    </div>
  );
}

export default App;
