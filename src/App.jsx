import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import RackImageDashboard from "./Rack/RackImageDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<RackImageDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;