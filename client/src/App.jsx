import {
  BrowserRouter,Route,Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import GradeKnaji from "./pages/GradeKnaji";
import FindKanji from "./pages/FindKanji";
import HomePage from "./pages/HomePage";
import Footer from "./componets/Footer";
import NavBar from "./componets/NavBar";
import ResgirterKanji from "./pages/ResgirterKanji";
function App() {
  return (<>
    <BrowserRouter>
    <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/logout" element={<h1>loguot</h1>}/>
        <Route path="/register" element={<ResgirterKanji/>}/>
        <Route path="/kanjifind" element={<FindKanji />}/>
        <Route path="/kanjigrade" element={<GradeKnaji/>}/>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App