import { Toaster } from "react-hot-toast";
import { Home } from "./pages";

function App() {
  return (
    <>
      <main className="bg-custom-gradient h-screen flex items-center justify-center text-white text-center">
        <Home />
      </main>

      <Toaster position="top-right" />
    </>
  );
}

export default App;
