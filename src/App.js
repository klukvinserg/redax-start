import "./App.css";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="App">
      <div className="container">
        <PostForm />
        <Posts />
      </div>
    </div>
  );
}

export default App;
