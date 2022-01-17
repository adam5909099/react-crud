import { Route, Routes } from "react-router-dom";
import AddressCreate from "./pages/AddressCreate";
import AddressEdit from "./pages/AddressEdit";
import AddressList from "./pages/AddressList";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AddressList />} />
      <Route path="/edit" element={<AddressEdit />} />
      <Route path="/create" element={<AddressCreate />} />
    </Routes>
  );
}
