import SignUpForm from "../components/SignUpForm";

function SignUpLayout() {
  return (
    <div className="bg-[#F6F7F9] h-dvh w-screen overflow-y-scroll overflow-x-hidden no-scrollbar">
      <div className="overflow-y-scroll no-scrollbar w-full  p-2 py-10 pb-20 sm:flex sm:justify-center sm:items-center">
        <SignUpForm />
      </div>
    </div>
  );
}

export default SignUpLayout;
