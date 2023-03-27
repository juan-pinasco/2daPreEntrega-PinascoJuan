import "./App.css";
import Header from "./components/header/Header";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <ItemListContainer saludo={"Bienvenido a mi ecommerce"} />
    </div>
  );
}

export default App;
