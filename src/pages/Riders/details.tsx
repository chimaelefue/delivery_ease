import { useParams } from "react-router-dom";
import DeliveringCard from "./components/DeliveringCard";
import OverviewCard from "./components/OverviewCard";
import { useGetDeliveryQuery } from "@/api/apiSlice";
import { CircularProgress } from "@mui/material";
import { Delivery } from "@/types/types";


const RiderDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useGetDeliveryQuery({ id: parseInt(`${id}`) });


  return (
    <div className="p-3 lg:p-6">
      <div className="mb-12 flex justify-between border-b border-gray-400 pb-4">
        <div className="text-lg font-bold">Delivery Details</div>
      </div>

      {isLoading ? (
        <CircularProgress size={"24px"} color="inherit" />
      ) : (
        <>
          <div className="my-4 rounded-2xl bg-white p-4">
            <DeliveringCard
              key={data?.id}
              id={`${data?.id}`}
              delivery={`${data?.product_name}`}
              address={`${data?.pickup_address}`}
              status={`${data?.delivery_status}`}
              date={`${data?.created_at}`}
              selected={true}
              showAction={false}
            />
          </div>

          <div className="">
            <OverviewCard selectedDelivery={data as Delivery} />
          </div>
        </>
      )}
    </div>
  );
};

export default RiderDetail;
