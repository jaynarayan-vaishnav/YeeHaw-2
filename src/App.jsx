import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from "./pages/Home";
import Bounty from "./pages/Bounty"

function App() {
  return (
    <div className="min-h-screen">
      <HashRouter>
					<Routes>
						<Route path="/" element={<Home />} />
            <Route path="/bounty" element={<Bounty />} />
					</Routes>
			</HashRouter>
    </div>
  )
}

export default App
