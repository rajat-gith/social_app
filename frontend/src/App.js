import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import "./App.css";
import LoginScreen from "./screens/LoginScreen";
import PostScreen from "./screens/PostScreen";
import Header from "./components/Header";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/post/:id" component={PostScreen} />

      </Container>
    </Router>
  );
}

export default App;
