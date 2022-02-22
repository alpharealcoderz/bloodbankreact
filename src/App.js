import { render } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Theme from "./Theme";

import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import User from "./Components/Admin/Components/User";
import { Feed } from "./Components/Admin/Components/Feed";
import Notification from "./Components/Admin/Components/Notification";
import Requests from "./Components/Admin/Components/Request";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Theme />} />
      </Routes>

      <Routes>
        <Route path="admin">
          <Route exact path="users" element={<User />} />
          <Route exact path="feeds" element={<Feed />} />
          <Route exact path="notifications" element={<Notification />} />
          <Route exact path="requests" element={<Requests />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
