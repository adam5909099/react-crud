import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { Address } from "../hooks/useGetAddresses";
import client from "../utils/client";
import Button from "./Button";
import Input from "./Input";

interface Props {
  address?: Address;
  onSubmitSuccess: () => void;
}

export default function AddressForm({ address, onSubmitSuccess }: Props) {
  const defaultValues = {
    name: address?.name ?? "",
    address1: address?.address1 ?? "",
    address2: address?.address2 ?? "",
    city: address?.city ?? "",
    state: address?.state ?? "",
    zip: address?.zip ?? "",
  };

  const { register, handleSubmit } = useForm<Address>({ defaultValues });

  const submitMutation = useMutation(
    (variables: Address) =>
      address
        ? client.patch(`/v1/address/${address.id}`, variables)
        : client.post("/v1/address", variables),
    { onSuccess: onSubmitSuccess }
  );

  const onSubmit = (address: Address) => {
    submitMutation.mutate(address);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="Name" required {...register("name")} />

      <Input label="Address" required {...register("address1")} />

      <Input
        label="Address 2 (optional)"
        id="address2"
        {...register("address2")}
      />

      <Input label="City" required {...register("city")} />

      <Input label="State" required {...register("state")} />

      <Input label="Zip" required {...register("zip")} />

      <Button type="submit" loading={submitMutation.isLoading}>
        Save
      </Button>
    </form>
  );
}
