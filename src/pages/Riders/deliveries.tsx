import DeliveringCard from "./components/DeliveringCard";

const deliveries = [
    {
      id: "AZ34KLO",
      delivery: "Same Day Delivery",
      address: "Malu road Idumota, Abuja State",
      status: "On the way",
      date: "14 May 2024, 3:04 PM",
      product: "Macbook",
      weight: "2 kg",
      trackingId: "AZ34KLO",
      stops: [
          {
            label: "Delivery Booked",
            location: "2, Malu road Idumota, Abuja",
            status: "Done",
            time: "14 May 2024, 3:04 PM",
          },
          {
            label: "Arrived at pick up point",
            location: "2, Malu road Idumota, Abuja",
            status: "Done",
            time: "14 May 2024, 3:04 PM",
          },
          {
            label: "Route to delivery",
            location: "2, Malu road Idumota, Abuja",
            status: "Ongoing",
            time: "Pending",
          },
          {
            label: "Arrived at delivery",
            location: "Pending",
            status: "Pending",
            time: "Pending",
          },
          {
            label: "Delivery accepted",
            location: "Pending",
            status: "Pending",
            time: "Pending",
          },
      ],
      mapUrl: "https://via.placeholder.com/600x400.png?text=Map", // Placeholder image
    },
    {
      id: "BZ23POI",
      delivery: "Next Day Delivery",
      address: "Malu road Idumota, Abuja State",
      status: "Pending",
      date: "14 May 2024, 3:04 PM",
      product: "Laptop",
      weight: "1.8 kg",
      trackingId: "BZ23POI",
      stops: [
          {
            label: "Delivery Booked",
            location: "3, Malu road Idumota, Abuja",
            status: "Done",
            time: "15 May 2024, 3:04 PM",
          },
          {
            label: "Arrived at pick up point",
            location: "3, Malu road Idumota, Abuja",
            status: "Pending",
            time: "Pending",
          },
          {
            label: "Route to delivery",
            location: "Pending",
            status: "Pending",
            time: "Pending",
          },
      ],
      mapUrl: "https://via.placeholder.com/600x400.png?text=Map",
    },
  ];

const DeliveriesPage = () => {
     
  return (
    <div className="p-3 lg:p-6">
      <div className="flex justify-between border-b border-gray-400 mb-12 pb-4">
        <div className="font-bold text-lg">All Deliveries</div>
      </div>

      <div className="my-4 bg-white p-4 rounded-2xl">
        {deliveries.map((delivery) => (
            <DeliveringCard
                key={delivery.id}
                id={delivery.id}
                delivery={delivery.delivery}
                address={delivery.address}
                status={delivery.status}
                date={delivery.date}
                selected = { false }
                showAction= {false}
            />
        ))}

      </div>

    </div>
  );
};

export default DeliveriesPage;