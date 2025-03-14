import { useState } from "react";

function Properties() {
  const [properties, setProperties] = useState<
    { name: string; value: string }[]
  >([
    { name: "Available Properties", value: "300k" },
    { name: "SoldProperties ", value: "90k" },
    { name: "Listed Properties", value: "90k" },
  ]);

  return (
    <div className="min-h-screen bg-[#F7F7F7] pt-[50px] text-[#1e1e1e] pt-[50px]">
      <div className="w-[80%] mx-auto">
        <div className="flex gap-[214px]">
          <p className="text-[35px] min-w-[391px] font-[800] h-[129px]">
            Experience <br /> Unparalleled Property Search with Torii Gate
          </p>
          <div className="w-[635px] h-[186px] flex flex-col gap-[20px]">
            <p className="text-[16px] font-[500]">
              At Torii Gate, we believe finding your perfect home should be easy
              and exciting. Founded to transform the homebuying experience, we
              simplify the property search process with advanced technology and
              a team of experts. Our mission is to provide unparalleled
              convenience and personalized service, making every step towards
              your dream home effortless.
            </p>
            <div className="flex w-[482px] gap-[43px]">
              {properties.map((property) => (
                <div>
                  <p className="text-[25px] font-[800]">{property.value}</p>
                  <p>{property.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Properties;
