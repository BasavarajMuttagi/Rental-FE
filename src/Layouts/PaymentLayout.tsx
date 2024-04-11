import { useForm } from "react-hook-form";
import BillingInfoCard from "../components/BillingInfoCard";
import ConfirmationCard from "../components/ConfirmationCard";
import Footer from "../components/Footer";
import PaymentMethodCard from "../components/PaymentMethodCard";
import RentalInfoCard from "../components/RentalInfoCard";
import RentalSummary from "../components/RentalSummary";
import TopNav from "../components/TopNav";
import { zodResolver } from "@hookform/resolvers/zod";
import { PaymentSchema, PaymentSchemaType } from "../Zod/schemas";

import { QueryClient, useQuery } from "@tanstack/react-query";
import AxiosClient from "../Axios/AxiosClient";
import BillingInfoSK from "../skeletons/BillingInfoSK";
import useRental from "../store";
import { useNavigate } from "react-router-dom";

function PaymentLayout() {
  const client = new QueryClient();
  const navigate = useNavigate();
  const {
    rentalInfo,
    paymentInfo,
    setPaymentInfo,
    resetPaymentInfo,
    resetRentalInfo,
  } = useRental();
  const getBillingInfo = async () => {
    const result = await AxiosClient().get("/auth/billinginfo");
    return result;
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    getValues,
  } = useForm<PaymentSchemaType>({
    resolver: zodResolver(PaymentSchema),
    defaultValues: {
      carId: paymentInfo.carId,
      billingInfo: paymentInfo.billingInfo,
      rentalInfo: rentalInfo,
      cardInfo: paymentInfo.cardInfo,
      confirmation: paymentInfo.confirmation,
    },
  });

  const { isLoading } = useQuery({
    queryKey: ["billinginfo"],
    queryFn: async () =>
      getBillingInfo().then((res) => {
        setValue("billingInfo", {
          fullname: res.data.result.fullname,
          address: res.data.result.address,
          city: res.data.result.city,
          phone: res.data.result.phone,
        });
        return res;
      }),
  });

  const PayNow = async () => {
    try {
      await AxiosClient().post("/booking/create", paymentInfo);
      resetPaymentInfo();
      resetRentalInfo();
      client.invalidateQueries({
        queryKey: ["bookings"],
      });
      navigate("/bookings", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const setPaymentInfoToStore = (data: PaymentSchemaType) => {
    setPaymentInfo(data);
  };
  return (
    <div className="bg-[#F6F7F9] h-dvh  w-screen overflow-y-scroll overflow-x-hidden no-scrollbar">
      <TopNav />
      <form
        onChange={() => setPaymentInfoToStore(getValues())}
        onSubmit={handleSubmit(PayNow)}
        className="py-10 space-y-4 p-4 sm:space-y-0 sm:flex sm:flex-row sm:space-x-4"
      >
        <div className="w-full space-y-4 sm:w-[70%]">
          {isLoading ? (
            <BillingInfoSK />
          ) : (
            <BillingInfoCard register={register} errors={errors} />
          )}
          <RentalInfoCard register={register} errors={errors} />
          <PaymentMethodCard register={register} errors={errors} />
          <ConfirmationCard register={register} errors={errors} />
        </div>
        <div className="w-full sm:w-[30%]">
          <RentalSummary id={paymentInfo.carId} />
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default PaymentLayout;
