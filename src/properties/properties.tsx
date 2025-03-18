import { useState } from "react";
import Img1 from "../assets/images/img1.png";
import Img2 from "../assets/images/img2.png";
import Img3 from "../assets/images/img3.png";

function Properties() {
  const images: string[] = [Img1, Img2, Img3];
  const properties: { name: string; value: string }[] = [
    { name: "Available Properties", value: "300k" },
    { name: "Sold Properties ", value: "90k" },
    { name: "Listed Properties", value: "90k" },
  ];

  const assets = [
    {
      image: Img1,
      status: "Rent",
      price: "$23.4M/yr",
      title: "Crystal Brogs residence",
      address: "22, mabadieje, Iowa, Garage, ikd, lagos",
      beds: 4,
      baths: 5,
      area: "400 sq.ft",
      type: "house",
    },
    {
      image: Img1,
      status: "Sale",
      price: "$23.4M/yr",
      title: "Crystal Brogs residence",
      address: "22, mabadieje, Iowa, Garage, ikd, lagos",
      beds: 4,
      baths: 5,
      area: "400 sq.ft",
      type: "apartment",
    },
    {
      image: Img1,
      status: "Sale",
      price: "$23.4M/yr",
      title: "Crystal Brogs residence",
      address: "22, mabadieje, Iowa, Garage, ikd, lagos",
      beds: 4,
      baths: 5,
      area: "400 sq.ft",
      type: "land",
    },
    {
      image: Img1,
      status: "Rent",
      price: "$23.4M/yr",
      title: "Crystal Brogs residence",
      address: "22, mabadieje, Iowa, Garage, ikd, lagos",
      beds: 4,
      baths: 5,
      area: "400 sq.ft",
      type: "apartment",
    },
    {
      image: Img1,
      status: "Sale",
      price: "$23.4M/yr",
      title: "Crystal Brogs residence",
      address: "22, mabadieje, Iowa, Garage, ikd, lagos",
      beds: 4,
      baths: 5,
      area: "400 sq.ft",
      type: "house",
    },
    {
      image: Img1,
      status: "Rent",
      price: "$23.4M/yr",
      title: "Crystal Brogs residence",
      address: "22, mabadieje, Iowa, Garage, ikd, lagos",
      beds: 4,
      baths: 5,
      area: "400 sq.ft",
      type: "land",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F7F7] pt-[50px] text-[#1e1e1e] pt-[50px]">
      <div className="w-[86.1%] mx-auto">
        <div className="flex justify-between w-full">
          <p className="text-[35px] max-w-[391px] font-[800] h-[129px]">
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

        <div className="flex justify-between w-full mt-[100px]">
          {images.map((image, index) => (
            <img
              src={image}
              alt={`property${index}`}
              className="w-[500px] h-[369px] rounded-[10px]"
            />
          ))}
        </div>

        <div className="mt-[100px]">
          <p className="text-[35px] font-[800]">Property Listing</p>
          <div className="mt-[30px]">
            <nav className="flex w-[650px] h-[48px] gap-[30px]">
              <div className="w-[63px] h-full ring-1 ring-[#535353] rounded-[8px] flex place-items-center justify-center text-[#1d1d1d] font-[600]">
                All
              </div>
              <div className="w-[97px] h-full ring-1 ring-[#535353] rounded-[8px] flex place-items-center justify-center text-[#1d1d1d] font-[600]">
                House
              </div>
              <div className="w-[136px] h-full ring-1 ring-[#535353] rounded-[8px] flex place-items-center justify-center text-[#1d1d1d] font-[600]">
                Apartment
              </div>
              <div className="w-[85px] h-full ring-1 ring-[#535353] rounded-[8px] flex place-items-center justify-center text-[#1d1d1d] font-[600]">
                Land
              </div>
            </nav>
          </div>
          {/* Properties */}
          <div>
            {assets.map((asset, index) => (
              <div>
                <img src={asset?.image} />{" "}
                <div>
                  <div>{asset?.price}</div>
                  <div>{asset?.title}</div>
                  <div>{asset?.address}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Properties;
