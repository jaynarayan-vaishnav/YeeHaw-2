import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from "./pages/Home";
import Bounty from "./pages/Bounty"
import Shop from './pages/Shop';

function App() {
  return (
    <div className="min-h-screen">
      <HashRouter>
					<Routes>
						<Route path="/" element={<Home />} />
            <Route path="/bounty" element={<Bounty />} />
            <Route path="/shop" element={<Shop />} />
					</Routes>
			</HashRouter>
    </div>
  )
}

export default App
