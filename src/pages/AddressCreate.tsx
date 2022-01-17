import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import AddressForm from "../components/AddressForm";
import Page from "../components/Page";

export default function AddressCreate() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return (
    <Page title="Create Address">
      <AddressForm
        onSubmitSuccess={() => {
          queryClient.invalidateQueries("/v1/address");
          navigate("/");
        }}
      />
    </Page>
  );
}
