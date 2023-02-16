import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";

function App() {
  return (
    <div className="App">
      <div className="bg-slate-100 h-screen">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
