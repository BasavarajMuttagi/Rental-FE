import CarCard from "./CarCard";

function BookedCardCarousel({ data }: { data: [] }) {
  return (
    <div className="space-y-6 py-7 w-full p-1">
      <div className="text-slate-600 px-7 font-bold">{`${data.length} Results`}</div>
      <div className="flex flex-col justify-between items-center space-y-4 sm:space-y-0 sm:grid grid-cols-2  sm:place-items-center sm:gap-4  min-[1330px]:grid-cols-3 min-[1800px]:grid-cols-4">
        {data.map((eachObject: Booking) => (
          <CarCard
            id={eachObject.id}
            key={eachObject.id}
            url={eachObject.car.baseUrl + eachObject.car.imageUrl}
            favorite={eachObject.car.favorite}
            name={eachObject.car.name}
            carType={eachObject.car.carType}
            fuelcapacity={eachObject.car.fuelcapacity}
            seats={eachObject.car.seats}
            gearType={eachObject.car.gearType}
            offerPrice={eachObject.car.price.offerPrice}
            rentalPrice={eachObject.car.price.rentalPrice}
          />
        ))}
      </div>
    </div>
  );
}

export default BookedCardCarousel;

type CarType = "SEDAN" | "SUV" | "SPORT" | "TRUCK" | "VAN" | "OTHER";
type GearType = "AT" | "MT" | "AMT" | "CVT" | "DCT" | "DSG" | "SMG" | "ECT";

interface Car {
  baseUrl: string;
  imageUrl: string;
  name: string;
  fuelcapacity: number;
  favorite: {
    id: string;
    userId: string;
    carId: string;
  }[];
  carType: CarType;
  gearType: GearType;
  seats: number;
  price: {
    rentalPrice: number;
    offerPrice: number;
  };
}

interface Booking {
  id: string;
  pickUp: string;
  dropOff: string;
  startDate: string;
  endDate: string;
  totalCost: number;
  isPaid: boolean;
  payment_status: "PENDING" | "PAID" | "FAILED";
  booking_status: "PENDING" | "CONFIRMED" | "CANCELLED";
  rating: number;
  review: string;
  additionalFees: number;
  discounts: number;
  carId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  car: Car;
}
