import { Star, Check } from "lucide-react";
import React from "react";
import { testemonials } from "../../constant";
import { Icons } from "./icons";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Testmonials = () => {
  return (
    <MaxWidthWrapper className=" bg-slate-100 py-24 flex flex-col items-center gap-16 sm:gap-32">
      <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
        <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
          What our{" "}
          <span className="relative px-2">
            customers{" "}
            <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500" />
          </span>{" "}
          say
        </h2>
        <img src="/snake-2.png" className="w-24 order-0 lg:order-2" />
      </div>

      {testemonials.map((item) => (
        <div
          key={item.userName}
          className="mx-auto grid max-w-2xl grid-col px-4 lg:mx-0 lg:max-w-none lg:grid-col-2 gap-y-16"
        >
          <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
            <div className="flex gap-0.5 mb-2">
              <Star className="h-5 w-5 text-green-600 fill-green-600 " />
              <Star className="h-5 w-5 text-green-600 fill-green-600 " />
              <Star className="h-5 w-5 text-green-600 fill-green-600 " />
              <Star className="h-5 w-5 text-green-600 fill-green-600 " />
              <Star className="h-5 w-5 text-green-600 fill-green-600 " />
            </div>
            <div className="text-lg leading-8">
              <p>
                {item.text1}
                <span className="p-0.5 bg-slate-800 text-white">
                  {item.lightedText}
                </span>
                {item.text2}
              </p>
            </div>
            <div className="flex gap-4 mt-2">
              <img
                src={item.profileImg}
                className="rounded-full h-12 w-12 object-cover"
              />
              <div className="flex flex-col">
                <p className="font-semibold">{item.userName}</p>
                <div className="flex gap-1.5 items-center text-green-600">
                  <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                  <p className="text-sm">{item.profileStatus}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </MaxWidthWrapper>
  );
};

export default Testmonials;
