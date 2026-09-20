import Header from "./components/Header";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <Home />
    </>
  );
}
