import { useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import AddressForm from "../components/AddressForm";
import Page from "../components/Page";
import useGetAddresses from "../hooks/useGetAddresses";

export default function AddressEdit() {
  const { data } = useGetAddresses();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { id } = useParams<Record<string, string>>();

  const address = data?.find((item) => String(item.id) === id);

  return (
    <Page title="Edit Address">
      {address && (
        <AddressForm
          address={address}
          onSubmitSuccess={() => {
            queryClient.invalidateQueries("/v1/address");
            navigate("/");
          }}
        />
      )}
    </Page>
  );
}
