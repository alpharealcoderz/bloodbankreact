import { render } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Theme from "./Theme";
import Main from "./Components/Admin/layout/Main";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import User from "./Components/Admin/Components/User";
import { Feed } from "./Components/Admin/Components/Feed";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Theme />} />
      </Routes>
      <Main>
        <Routes>
          <Route path="admin">
            <Route exact path="users" element={<User />} />
            <Route exact path="feeds" element={<Feed />} />
          </Route>
        </Routes>
      </Main>
    </BrowserRouter>
  );
}

export default App;
