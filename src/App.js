import "./App.css";
import LoginPage from "./components/LoginPage";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRouteLogin from "./protectedRouts/ProtectedRoutLogin";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route element={<ProtectedRouteLogin />}>
              <Route path="/" element={<LoginPage />} />
            </Route>

            <Route path="main/*" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  </Provider>
  );
}

export default App;
