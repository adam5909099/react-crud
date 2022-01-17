import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import AddressCreate from "./pages/AddressCreate";
import AddressEdit from "./pages/AddressEdit";
import AddressList from "./pages/AddressList";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<AddressList />} />
        <Route path="/edit" element={<AddressEdit />} />
        <Route path="/create" element={<AddressCreate />} />
      </Routes>
    </QueryClientProvider>
  );
}
