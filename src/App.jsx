// import styles from "./styles/app.module.css";
import { RouterProvider } from "react-router-dom";
import { GlobalContext } from "./context";
import { router } from "./routers";

function App() {
  const user = {
    userName: "Apin",
  };

  return (
    <GlobalContext.Provider value={user}>
      <RouterProvider router={router} />
    </GlobalContext.Provider>
  );
}

export default App;
