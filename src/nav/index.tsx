import Logo from "../assets/logo.svg";
function NavBar() {
  return (
    <nav className="flex justify-between items-center content-center w-[95%] mx-auto py-4">
      <div className="flex items-end">
        <img src={Logo} height={56} width={56} />
        <div className="flex flex-col items-start h-full leading-4">
          <p className="text-[18px] font-[500]">Torii Gate</p>
          <p className="text-[12px]">Homing made easy to home</p>
        </div>
      </div>
      <nav className="w-[460px] flex justify-between text-[16px] font-[600]">
        <a href="">Home</a>
        <a href="">Buy</a>
        <a href="">List Property</a>
        <a href="">Company</a>
      </nav>
      <div>
        <button className="w-[150px] h-[51px] rounded-[10px] bg-[#1e1e1e]">
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
