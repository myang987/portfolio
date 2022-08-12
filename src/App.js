import "./styles/App.scss";
import { Header } from "./components/Header";
import { RoutesComponent } from "./components/RoutesComponent";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <RoutesComponent />
      <Footer />
    </div>
  );
}

export default App;
