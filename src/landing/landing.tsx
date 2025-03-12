import NavBar from "../nav";
import "./landing.css";

function Landing() {
  return (
    <div
      className="bg-[url('../assets/landingBg.png')] w-[100%] h-[100vh] landing"
      // style={{ background: "url('../assets/landingBg.png')" }}
    >
      <NavBar />
      <div className="w-[95%] m-auto">
        <div>
          <p className="text-[18px] font-[500]">
            Explore A Wide Range of properties that suits you
          </p>
          <p className="font-[800] text-[70px]">Home convenience</p>
          <p className="font-[800] text-[70px]">meets seemless search</p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
