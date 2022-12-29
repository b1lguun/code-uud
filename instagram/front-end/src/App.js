import "./App.css";
import Story from "./story/story";
import Post from "./post/post";

function App() {
  return (
    <div className="App">
      <div className="main-body">
        <div className="body">
          <Story />
          <Post />
          <Post />
        </div>
        <div className="about"></div>
      </div>
    </div>
  );
}

export default App;
