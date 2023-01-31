import styled from "styled-components";
import SideNavbar from "./components/SideNavbar/SideNavbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmptyPage from "./pages/EmptyPage";

function App() {
  return (
    <AppWrapper id="app">
      <Router>
        <SideNavbar />

        <Routes>
          <Route path="/path1" component={EmptyPage} />
          <Route path="/path2" component={EmptyPage} />
          <Route path="/path3" component={EmptyPage} />
        </Routes>
      </Router>
    </AppWrapper>
  );
}

export const AppWrapper = styled.div`
  display: flex;
  background: #3c445a;
  height: 100vh;
`;

export default App;
