import React from "react";
import float1 from "../assets/float1.svg";
import float2 from "../assets/float2.svg";
import float3 from "../assets/float3.svg";
import float4 from "../assets/float4.svg";
import float5 from "../assets/float5.svg";
import float6 from "../assets/float6.svg";

export const FloatingEmojis = () => {
  return (
    <div className="flex justify-center">
      <div className="floating-emojis absolute top-28">
        <span
          role="img"
          aria-label="emoji"
          className="emoji emoji1 relative md:top-[180px] md:left-[400px] lg:top-[260px] lg:left-[600px]"
        >
          <img
            className="lg:w-16 md:w-12 w-0 icon_shadow"
            src={float6}
            alt="float6"
          />
        </span>
        <span
          role="img"
          aria-label="emoji"
          className="emoji emoji2 relative md:top-[100px] md:right-[100px] lg:top-[140px] lg:right-[100px]"
        >
          <img
            className="lg:w-16 md:w-12 w-0 icon_shadow"
            src={float5}
            alt="float5"
          />
        </span>
        <span
          role="img"
          aria-label="emoji"
          className="emoji emoji3 relative md:top-[80px] md:left-[170px] lg:top-[80px] lg:left-[250px]"
        >
          <img
            className="lg:w-16 md:w-12 w-0 icon_shadow"
            src={float4}
            alt="float4"
          />
        </span>
        <span
          role="img"
          aria-label="emoji"
          className="emoji emoji4 relative md:top-[10px] md:right-[330px] lg:top-0 lg:right-[440px]"
        >
          <img
            className="lg:w-16 md:w-12 w-0 icon_shadow"
            src={float3}
            alt="float3"
          />
        </span>
        <span
          role="img"
          aria-label="emoji"
          className="emoji emoji5 relative md:top-[5px] md:left-[250px] lg:top-[10px] lg:left-[360px]"
        >
          <img
            className="lg:w-16 md:w-12 w-0 icon_shadow"
            src={float1}
            alt="float1"
          />
        </span>
        <span
          role="img"
          aria-label="emoji"
          className="emoji emoji6 relative md:top-[170px] md:right-[450px] lg:top-[240px] lg:right-[700px]"
        >
          <img
            className="lg:w-16 md:w-12 w-0 icon_shadow"
            src={float2}
            alt="float2"
          />
        </span>
      </div>
    </div>
  );
};
