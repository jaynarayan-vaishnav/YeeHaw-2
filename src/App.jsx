import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen">
      <HashRouter>
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
			</HashRouter>
    </div>
  )
}

export default App
