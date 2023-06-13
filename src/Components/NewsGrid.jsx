import React from "react";
import web3_desktop from "../images/image-web-3-desktop.jpg";
const NewsGrid = () => {
  return (
    <div className="container sm:flex inline-block grid-cols-2	mx-auto gap-x-8 font-inter 	 ">
      <div
        id="right-part"
        className=" sm:flex flex-col col-span-2 grid-rows-2	gap-y-9	max-w-3xl		 "
      >
        <div id="top" className="container 			">
          <img src={web3_desktop} alt="" />
        </div>
        <div id="bottom" className="sm:flex grid-cols-2 gap-x-20	">
          <h1 className="xl:text-5xl font-extrabold text-4xl	">
            The Bright Future of Web 3.0?
          </h1>
          <div className=" flex flex-col grid-rows-2 gap-y-8	">
            <p className="mx-auto">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <div className="md:text-left ">
              <button className="h-12 w-48 tracking-widest bg-[#F15E50] text-white">READ MORE</button>
            </div>
          </div>
        </div>
      </div>
      <div
        id="left-part 	"
        className="sm:flex sm:mt-0 mt-6 sm:mx-auto flex-col col-span-1 	bg-darkblue text-white p-8 gap-y-4 max-w-fit text-left	 mx-auto"
      >
        <h1 className="text-[#E9AB53]  text-4xl font-bold	">New</h1>
        <ul className="flex  flex-col grid-rows-3 gap-y-8	">
          <li>
            <h4 className="text-xl">Hydrogen VS Electric Cars</h4>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </li>
          <li>
            <h4 className="text-xl">The Downsides of Al Artistry</h4>
            <p>What are the possible adverse effects of</p>
          </li>
          <li>
            <h4 className="text-xl">Is VC Funding Drying Up?</h4>
            <p>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NewsGrid;
