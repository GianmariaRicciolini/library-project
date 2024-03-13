import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";

function App() {
  return (
    <div>
      <header>
        <MyNav />
      </header>
      <Welcome />
      <BookList />
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
