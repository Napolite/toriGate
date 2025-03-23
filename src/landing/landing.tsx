import NavBar from "../nav";
import "./landing.css";
import Landimg from "../assets/landingBg.png";

function Landing() {
  return (
    <div
      className="bg-[url('../assets/landingBg.png')] w-[100%] h-[100vh]"
      // style={{ background: "url()" }}
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <img src={Landimg} className="w-full h-full scale-forward" />
      </div>
      <NavBar />
      <div className="w-[86.1%] m-auto relative top-[35%] translate-y-[-50%]">
        <div>
          <p className="text-[18px] font-[500]">
            Explore A Wide Range of properties that suits you
          </p>
          <p className="font-bold text-[70px] w-[781px] h-[172px]">
            Home convenience meets seemless search
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
