import React from "react";

import aPic from "../Images/a.jpg";
import bPic from "../Images/b.jpg";
import cPic from "../Images/c.jpg";
import PropsImageComp from "./PropsImageComp";
import userPic from "../Images/userPic.png";

import e1 from "../Images/e1.mp4";
import e4 from "../Images/e4.mp4";
import e6 from "../Images/e6.mp4";
import e7 from "../Images/e7.mp4";
import e8 from "../Images/e8.mp4";
import e9 from "../Images/e9.mp4";
import e10 from "../Images/e10.mp4";
import e11 from "../Images/e11.mp4";
import e12 from "../Images/e12.mp4";
import e13 from "../Images/e13.mp4";
import e14 from "../Images/e14.mp4";
import e10_render from "../Images/e10_render.mp4";
import hull_render1 from "../Images/hull_render1.png";
import hull_render2 from "../Images/hull_render2.png";
import hull_render3 from "../Images/hull_render3.png";
import hull_render4 from "../Images/hull_render4.png";
import hull_render5 from "../Images/hull_render5.png";
import hull_render6 from "../Images/hull_render6.png";
import hull_render7 from "../Images/hull_render7.png";
import hull_render8 from "../Images/hull_render8.png";
import hull_render9 from "../Images/hull_render9.png";

import AOS from "aos";
import "aos/dist/aos.css";
import "./props.css";

const environmentImgs = [
  {
    imgData: [
      { img: e6, txtHdng: "Hull", txtDesc: "" },
      { img: hull_render1, txtHdng: "Render_1", txtDesc: "" },
      { img: hull_render2, txtHdng: "Render_2", txtDesc: "" },
      { img: hull_render3, txtHdng: "Render_3", txtDesc: "" },
      { img: hull_render4, txtHdng: "Render_4", txtDesc: "" },
      { img: hull_render5, txtHdng: "Render_5", txtDesc: "" },
      { img: hull_render6, txtHdng: "Render_6", txtDesc: "" },
      { img: hull_render7, txtHdng: "Render_7", txtDesc: "" },
      { img: hull_render8, txtHdng: "Render_8", txtDesc: "" },
      { img: hull_render9, txtHdng: "Render_9", txtDesc: "" },
    ],
    coverPic: e6,
    path: "/img",
    titleTxt: "Hull",
    descriptionTxt: "An intensive realtime environment",
    navigatePath: "/a",
    dataAos: "fade-right",
  },
  {
    imgData: [
      { img: e10, txtHdng: "Render_1", txtDesc: "" },
      { img: e10_render, txtHdng: "Render_2", txtDesc: "" }
    ],
    coverPic: e10,
    path: "/img",
    titleTxt: "Unreal",
    descriptionTxt: "An intensive realtime environment",
    navigatePath: "/a",
    dataAos: "fade-left",
  },
  {
    imgData: [{ img: e4, txtHdng: "Render_1", txtDesc: "" }],
    coverPic: e4,
    path: "/img",
    titleTxt: "Unreal",
    descriptionTxt: "An intensive realtime environment",
    navigatePath: "/a",
    dataAos: "fade-in",
  },
  {
    imgData: [{ img: e7, txtHdng: "Render_1", txtDesc: "" }],
    coverPic: e7,
    path: "/img",
    titleTxt: "Unreal",
    descriptionTxt: "An intensive realtime environment",
    navigatePath: "/a",
    dataAos: "fade-left",
  },
  {
    imgData: [{ img: e8, txtHdng: "Render_1", txtDesc: "" }],
    coverPic: e8,
    path: "/img",
    titleTxt: "Unreal",
    descriptionTxt: "An intensive realtime environment",
    navigatePath: "/a",
    dataAos: "fade-right",
  },
  {
    imgData: [{ img: e9, txtHdng: "Render_1", txtDesc: "" }],
    coverPic: e9,
    path: "/img",
    titleTxt: "Unreal",
    descriptionTxt: "An intensive realtime environment",
    navigatePath: "/a",
    dataAos: "fade-in",
  },
  
  {
    imgData: [{ img: e11, txtHdng: "Render_1", txtDesc: "" }],
    coverPic: e11,
    path: "/img",
    titleTxt: "Unreal",
    descriptionTxt: "An intensive realtime environment",
    navigatePath: "/a",
    dataAos: "fade-right",
  },
  {
    imgData: [{ img: e12, txtHdng: "Render_1", txtDesc: "" }],
    coverPic: e12,
    path: "/img",
    titleTxt: "Unreal",
    descriptionTxt: "An intensive realtime environment",
    navigatePath: "/a",
    dataAos: "fade-in",
  },
  {
    imgData: [{ img: e13, txtHdng: "Render_1", txtDesc: "" }],
    coverPic: e13,
    path: "/img",
    titleTxt: "Unreal",
    descriptionTxt: "An intensive realtime environment",
    navigatePath: "/a",
    dataAos: "fade-left",
  },
  {
    imgData: [{ img: e14, txtHdng: "Render_1", txtDesc: "" }],
    coverPic: e14,
    path: "/img",
    titleTxt: "Unreal",
    descriptionTxt: "An intensive realtime environment",
    navigatePath: "/a",
    dataAos: "fade-right",
  },
];

const MainComponent = () => {
  return (
    <div className="mainDiv md:justify-between flex flex-col md:grid md:grid-cols-3 w-full p-2 gap-4">
      {environmentImgs.map((item, index) => (
        <div
          key={index}
          className="item w-full m-auto"
          data-aos={item.dataAos}
          data-aos-delay="50"
          data-aos-duration="800"
          data-aos-offset="100"
          data-aos-mirror="true"
        >
          <PropsImageComp
            imgTxtArr={item.imgData}
            coverPic={item.coverPic}
            path={item.path}
            navigatePath={item.navigatePath}
            titleTxt={item.titleTxt}
            descriptionTxt={item.descriptionTxt}
          />
        </div>
      ))}
    </div>
  );
};

export default MainComponent;
