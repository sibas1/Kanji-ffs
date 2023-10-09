import {
  BrowserRouter,Route,Routes} from "react-router-dom";
import LoginPgae from "./pages/LoginPgae";
import GradeKnaji from "./pages/GradeKnaji";
import FindKanji from "./pages/findKanji";
import HomePage from "./pages/HomePage";
import Footer from "./componets/Footer";
import NavBar from "./componets/NavBar";
function App() {
  return (<>
    <BrowserRouter>
    <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPgae/>}/>
        <Route path="/logout" element={<h1>loguot</h1>}/>
        <Route path="/register" element={<h1>register</h1>}/>
        <Route path="/kanjifind" element={<FindKanji />}/>
        <Route path="/kanjigrade" element={<GradeKnaji/>}/>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App