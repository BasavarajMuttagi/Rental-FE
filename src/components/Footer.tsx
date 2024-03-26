function Footer() {
  return (
    <div className="bg-white border-t">
      <footer className=" w-full text-[#90A3BF] flex flex-col md:flex-row md:justify-between  md:items-baseline p-5 space-y-9">
        <div>
          <div className="text-blue-500 font-semibold  text-3xl">MORENT</div>
          <div className="text-base-100">
            Our vision is to provide convenience and help increase your sales
            business.
          </div>
        </div>
        <div className="flex items-baseline justify-between flex-wrap space-y-9 md:flex md:space-x-16 md:flex-none">
          <div className="space-y-7">
            <h1 className="text-xl text-black font-bold">About</h1>
            <ul className="space-y-3">
              <li>How it works</li>
              <li>Featured</li>
              <li>Partnership</li>
              <li>Bussiness Relation</li>
            </ul>
          </div>
          <div className="space-y-7">
            <h1 className="text-xl text-black font-bold">Socials</h1>
            <ul className="space-y-3">
              <li>Discord</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
          <div className="space-y-7">
            <h1 className="text-xl text-black font-bold">Community</h1>
            <ul className="space-y-3">
              <li>Events</li>
              <li>Blog</li>
              <li>Podcast</li>
              <li>Invite a friend</li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="w-full border border-slate-300"></div>
      <div className="flex flex-col justify-center items-center space-y-4 text-slate-700 p-4 md:flex-row md:justify-between md:items-baseline">
        <div>©2022 MORENT. All rights reserved</div>
        <div className="flex  text-sm justify-between items-baseline space-x-8">
          <div>Privacy & Policy</div>
          <div>Terms & Condition</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
