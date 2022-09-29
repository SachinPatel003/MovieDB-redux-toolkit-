import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import MoviesContainer from "./moduls/Movies/MoviesContainer";
import TVshowsContainer from "./moduls/TVShows/TVshowsContainer";
import HeaderContainer from "./common/Header/HeaderContainer";
import FooterContainer from "./common/Footer/FooterContainer";

function App() {
  return (
    <div>  
      <BrowserRouter>
        <HeaderContainer />
        <Container sx={{ marginY: 5 }}>
          <Routes>
            <Route path="/" element={<MoviesContainer />} exact />
            <Route path="/TVShows" element={<TVshowsContainer />} />
          </Routes>
        </Container>
        <FooterContainer />
      </BrowserRouter>
    </div>
  );
}  

export default App;
