import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import TopNav from "../components/TopNav";

function LoginLayout() {
  return (
    <div className="bg-[#F6F7F9] h-dvh w-screen overflow-y-scroll overflow-x-hidden no-scrollbar">
      <TopNav />
      <div className="overflow-y-scroll no-scrollbar w-full  p-2 py-10 pb-20 sm:flex sm:justify-center sm:items-center">
        <LoginForm />
      </div>
      <Footer />
    </div>
  );
}

export default LoginLayout;
