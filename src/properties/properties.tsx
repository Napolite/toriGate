import Img1 from "../assets/images/img1.png";
import Img2 from "../assets/images/img2.png";
import Img3 from "../assets/images/img3.png";
import Big1 from "../assets/images/Big1.png";
import Big2 from "../assets/images/Big2.png";
import Big3 from "../assets/images/Big3.png";
import Big4 from "../assets/images/Big4.png";

import { SlLocationPin } from "react-icons/sl";

import PropertiesList from "./property.list";
import { LuBath, LuBedDouble } from "react-icons/lu";

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
      price: "$23.4M",
      title: "Crystal Brogs Residence",
      address: "22, Mabadieje, Iowa, Garage, IKD, Lagos",
      beds: 4,
      baths: 5,
      area: "400 sq.ft",
      type: "house",
    },
    {
      image: Img2,
      status: "Sale",
      price: "$18.2M",
      title: "Sunset Villas",
      address: "45, Ocean Drive, Victoria Island, Lagos",
      beds: 3,
      baths: 4,
      area: "350 sq.ft",
      type: "apartment",
    },
    {
      image: Img3,
      status: "Sale",
      price: "$12M",
      title: "Golden Acres Land",
      address: "10, Lekki Phase 1, Lagos",
      beds: 0,
      baths: 0,
      area: "1200 sq.ft",
      type: "land",
    },
    {
      image: Img1,
      status: "Rent",
      price: "$5M",
      title: "Luxury Heights Apartment",
      address: "88, Bourdillon Road, Ikoyi, Lagos",
      beds: 2,
      baths: 3,
      area: "300 sq.ft",
      type: "apartment",
    },
    {
      image: Img2,
      status: "Sale",
      price: "$45M",
      title: "Palm View Estate",
      address: "12, Banana Island, Lagos",
      beds: 6,
      baths: 7,
      area: "800 sq.ft",
      type: "house",
    },
    {
      image: Img3,
      status: "Rent",
      price: "$3.2M",
      title: "Meadow Land",
      address: "90, Ajah, Lagos",
      beds: 0,
      baths: 0,
      area: "1500 sq.ft",
      type: "land",
    },
    {
      image: Img1,
      status: "Sale",
      price: "$9.8M",
      title: "Silver Crest Apartment",
      address: "15, Ikeja GRA, Lagos",
      beds: 4,
      baths: 4,
      area: "450 sq.ft",
      type: "apartment",
    },
    {
      image: Img2,
      status: "Rent",
      price: "$7.5M",
      title: "Urban Elite House",
      address: "70, Ikorodu Road, Lagos",
      beds: 5,
      baths: 6,
      area: "500 sq.ft",
      type: "house",
    },
  ];

  const commercialAssets = [
    {
      image: Big1,
      title: "Boston Brown Hall",
      price: "$56,982",
      area: "400 sq.ft",
      beds: 4,
      baths: 5,
      address: "22, mabadieje, Iowa, Garage, ikd, lagos",
    },
    {
      image: Big2,
      title: "Boston Brown Hall",
      price: "$56,982",
      area: "400 sq.ft",
      beds: 4,
      baths: 5,
      address: "22, mabadieje, Iowa, Garage, ikd, lagos",
    },
    {
      image: Big3,
      title: "Boston Brown Hall",
      price: "$56,982",
      area: "400 sq.ft",
      beds: 4,
      baths: 5,
      address: "22, mabadieje, Iowa, Garage, ikd, lagos",
    },
    {
      image: Big4,
      title: "Boston Brown Hall",
      price: "$56,982",
      area: "400 sq.ft",
      beds: 4,
      baths: 5,
      address: "22, mabadieje, Iowa, Garage, ikd, lagos",
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
          <PropertiesList assets={assets} />

          {/* Explore commetcial properties*/}
          <div className="grid grid-cols-2 gap-[20px]">
            {commercialAssets.map((asset) => (
              <div className="relative w-full">
                <img src={asset.image} className="w-full rounded-[12px]" />
                <div className="absolute w-[90%] h-[180px] py-[20px] z-1000 top-[50%] left-[50%] translate-x-[-50%] rounded-[8px] bg-[rgba(256,256,256,0.7)]">
                  <div className="flex justify-between px-[20px]">
                    <div>
                      <p>{asset?.title}</p>
                      <p>
                        <strong className="inline text-[20px] font-[600]">
                          {asset?.price}
                        </strong>
                        /day
                      </p>
                    </div>
                    <div>
                      <div className="grid grid-cols-2 gap-[17px]">
                        <div>
                          <p className="inline">王</p>
                          {asset?.area}
                        </div>
                        <div>
                          <p className="inline-block rotate-90">王</p>{" "}
                          {asset?.area}
                        </div>
                        <div className="flex items-center content-center gap-[5px]">
                          <LuBedDouble />
                          <p>{asset?.beds} beds</p>
                        </div>
                        <div className="flex flex items-center content-center gap-[5px]">
                          <LuBath /> <p>{asset?.baths} bath</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between p-[20px] items-center content-center">
                    <div className="flex items-center content-center gap-[5px] text-[18px] font-[500]">
                      <SlLocationPin />
                      <p>{asset?.address}</p>
                    </div>
                    <div>
                      <button className="w-[123px] h-[48px] bg-[#1e1e1e] text-white rounded-[8px]">
                        Explore
                      </button>
                    </div>
                  </div>
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
