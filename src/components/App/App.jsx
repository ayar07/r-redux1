import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { FirstBody, SecondBody } from "../../pages/index"


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<FirstBody />} />
                <Route path="/SecondBody" element={<SecondBody />} />
            </Routes>
        </Router>
    )
}

export default App