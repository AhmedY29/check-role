import "./App.css";
import Router from "./routes/Router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Router />
      <Toaster />
    </>
  );
}

export default App;
