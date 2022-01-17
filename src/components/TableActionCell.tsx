import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import client from "../utils/client";
import Button from "./Button";

export default function TableActionCell(params: any) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const id = params.row.original.id;

  const deleteMutation = useMutation(() => client.delete(`/v1/address/${id}`), {
    onSuccess: () => {
      queryClient.invalidateQueries("/v1/address");
    },
  });

  return (
    <div className="flex space-x-4">
      <Button onClick={() => navigate(`/${id}`)}>Edit</Button>
      <Button
        varient="danger"
        onClick={() => deleteMutation.mutate()}
        loading={deleteMutation.isLoading}
      >
        Delete
      </Button>
    </div>
  );
}
