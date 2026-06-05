import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import RackDashboard from "./Rack/RackDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<RackDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;