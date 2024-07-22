import styles from "./styles/App.module.css";
import { RouterProvider } from "react-router-dom";
import { GlobalContext } from "./context";
import { router } from "./routers";

function App() {
  const user = {
    userName: "Apin",
  };

  return (
    <div className="App">
      <GlobalContext.Provider value={user}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
