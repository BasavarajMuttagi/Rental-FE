import BillingInfoCard from "../components/BillingInfoCard";
import ConfirmationCard from "../components/ConfirmationCard";
import Footer from "../components/Footer";
import PaymentMethodCard from "../components/PaymentMethodCard";
import RentalInfoCard from "../components/RentalInfoCard";
import RentalSummary from "../components/RentalSummary";
import TopNav from "../components/TopNav";

function PaymentLayout() {
  return (
    <div className="bg-[#F6F7F9] h-dvh  w-screen overflow-y-scroll overflow-x-hidden no-scrollbar">
      <TopNav />
      <div className="py-10 space-y-4 p-4 sm:space-y-0 sm:flex sm:flex-row sm:space-x-4">
        <div className="w-full space-y-4 sm:w-[70%]">
          <BillingInfoCard />
          <RentalInfoCard />
          <PaymentMethodCard />
          <ConfirmationCard />
        </div>
        <div className="w-full sm:w-[30%]">
          <RentalSummary />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PaymentLayout;
