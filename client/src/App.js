import HomePage from "./scenes/HomePage.jsx";
import About from "./scenes/About.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import { UserContextProvider } from "./UserContext.js";
import Contact from "./scenes/Contact.jsx";
import Projects from "./scenes/Projects.jsx";

function App() {
  return (
    <UserContextProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          {/* Additional routes */}
        </Route>
      </Routes>
    </Router>
    </UserContextProvider>
  );
}

export default App;
