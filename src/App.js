import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { CartContainr } from "./components/CartContainr";

function App() {
  return (
    <main>
      <Navbar />
      <CartContainr />
      <div>hoge</div>
    </main>
  );
}

export default App;
