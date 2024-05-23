import React from "react";
import TransitionEffect from "@/Components/TransitionEffect";

const chatbot = () => {
  return (
    <>
      <TransitionEffect></TransitionEffect>
      <div className="h-[45vw] w-[35vw] bg-[white] shadow-[2vw_2vw_12vw_3vw_#ccc] ml-[30vw] mt-[5vw] m-4 rounded-lg">
        <div className=" bg-black text-white h-[5vw] p-[0vw] rounded-lg">
          <h1 className=" text-white text-[2vw] p-[1vw]">MindHarbour</h1>
        </div>
        <div className="h-[32vw] overflow-y-auto px-[2.5vw] py-0">
          <div className="relative min-h-[1.5vw] bg-white  rounded-[0px_1.5vw_1.5vw_1.8vw] border-[0.15vw] border-solid border-[#777] bottom-0 text-black clear-both leading-[1.2vw] text-[1.2vw] max-w-[85%] z-[2] mx-0 my-2 p-2">
            <span id="bot-response">Hello.. I'm listening! Go on..</span>
          </div>
        </div>
        <div className="z-[1] flex flex-row items-end overflow-hidden h-[6vw] w-full px-[2.5vw] py-0">
          <input
            className=" text-black min-w-[0.5vw] h-[5vw] w-[26vw] border-t-[none] border-b-[solid] border-b-[0.1vw] border-x-[none]"
            type="text"
            placeholder="Type a message"
            autocomplete="off"
            autofocus="autofocus"
          />
          <button className="cursor-pointer flex-[0_0_auto] relative ml-[1.4vw] mr-[0vw] p-0 border-0" onclick="sendMessage()">
            <div className="relative w-[4.8vw] h-[4.8vw] flex items-center justify-center">
              <i className="text-[3vw] ml-[-1vw] mt-[1vw]"></i>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default chatbot;
