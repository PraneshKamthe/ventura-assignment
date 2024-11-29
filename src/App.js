import { Route, Routes } from "react-router-dom";
import IPOListingPage from "./pages/listing";
import ListingDetailPage from "./pages/listing-detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IPOListingPage />} />
      <Route path="/ipo/:id" element={<ListingDetailPage />} />
    </Routes>
  );
}

export default App;
