import { LuBedDouble, LuBath } from "react-icons/lu";

function PropertiesList({ assets }: { assets: any[] }) {
  return (
    <div className="full">
      <div className="grid grid-cols-4 gap-[30px] mt-[30px] pb-[100px]">
        {assets.map((asset, index) => (
          <div className="w-full ">
            <img
              src={asset?.image}
              className="rounded-[8px] w-full h-[295.4px]"
            />
            <div>
              <div className="text-[20px] font-[600] mb-[8px] mt-[10px]">
                {asset?.price}/yr
              </div>
              <div className="text-[16px] font-[600] mb-[5px]">
                {asset?.title}
              </div>
              <div className="text-[14px] mb-[10px]">{asset?.address}</div>
              <div className="flex items-center contenr-center gap-[22px]">
                <div className="flex items-center content-center gap-[5px]">
                  <LuBedDouble />
                  <p>{asset?.beds} beds</p>
                </div>
                <div className="flex flex items-center content-center gap-[5px]">
                  <LuBath /> <p>{asset?.baths} baths</p>
                </div>
                <div>王 {asset?.area}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-center">
        <button className="w-[123px] h-[48px] bg-[#1e1e1e] text-white rounded-[8px] mb-[20px]">
          See More
        </button>
      </div>
    </div>
  );
}

export default PropertiesList;
