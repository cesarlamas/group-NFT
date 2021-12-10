import { MainPage } from "./screens/MainPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import User from "./screens/User";
function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" caseSensitive={false} element={<MainPage/>} />
      </Routes>
      <Routes>
        <Route path="/user" caseSensitive={false} element={<User/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
