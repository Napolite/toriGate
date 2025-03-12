import NavBar from "../nav";
import "./landing.css";

function Landing() {
  return (
    <div
      className="bg-[url('../assets/landingBg.png')] w-[100%] h-[100vh] landing"
      // style={{ background: "url('../assets/landingBg.png')" }}
    >
      <NavBar />
      <div className="w-[80%] m-auto relative top-[35%] translate-y-[-50%]">
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
