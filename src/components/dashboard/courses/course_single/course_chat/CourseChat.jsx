import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import CustomInput from "../../../../forms/CustomInput";
import CollapseSendIcon from "../../../../icons/CollapseSendIcon";
import AvatarIcon from "../../../../icons/AvatarIcon";
import InfiniteScroll from "react-infinite-scroll-component";

const CourseChat = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello!", sender: "user" },
    { id: 2, text: "Hi there!", sender: "bot" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [hasMore, setHasMore] = useState(true);

  const [menu, setMenu] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const divRef = useRef(null);

  const { t } = useTranslation();

  //     *infinity scroll function
  const scrollToDiv = () => {
    //     divRef.current.scrollIntoView({ behavior: "smooth" });
    //     divRef.current.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      divRef.current.scrollIntoView({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 300);
  };
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth", // This makes the scroll smooth
    });
  };
  const refreshData = () => {
    // Your logic to refresh data
    console.log("Refreshing data...");
  };
  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    setMessages([
      ...messages,
      { id: Date.now(), text: inputValue, sender: "user" },
    ]);
    scrollToDiv();
    setInputValue("");
  };

  //     *window resize function
  useLayoutEffect(() => {
    const updateSize = () => {
      const body = document.body;
      const { width, height } = body.getBoundingClientRect();
      setWindowSize({ width, height });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="overflow-hidden">
      <div
        className={`select-none md:rounded-2xl rounded-none  lg:h-[calc(100vh_-_120px)] h-[calc(100vh_-_90px)]
      ${
        windowSize?.width <= 768
          ? `${menu ? "border-b border-gray bg-white" : ""}`
          : "border border-gray bg-white"
      }
      `}
      >
        <p
          className="flex justify-between items-center md:p-3 px-3 py-2 border-b border-gray 
         text-sm md:text-xl font-bold text-black md:cursor-auto cursor-pointer"
          onClick={() => {
            if (windowSize?.width <= 768) {
              setMenu(!menu);
            }
          }}
        >
          <span>Online Chat</span>
          <span className="md:hidden flex">
            {menu ? (
              <HiOutlineMenuAlt2 color="#2A85FF" size="30" />
            ) : (
              <HiOutlineMenuAlt3 color="#2A85FF" size="30" />
            )}
          </span>
        </p>

        <div
          className={
            windowSize?.width <= 768
              ? `${menu ? "block" : "hidden"}`
              : "md:block hidden"
          }
        >
          <div
            className="flex items-center px-3 py-1 border-b border-gray 
         text-sm md:text-xl font-bold h-[68px] text-black md:cursor-auto cursor-pointer"
          >
            <div className="w-[60px]">
              <AvatarIcon className="w-[40px] h-[40px]" />
            </div>
            <div className="w-full">
              <p className="text-sm font-bold text-black line-clamp-2">
                Kirill Sukhov
              </p>
              <p className="text-sm font-medium text-grayDark">Mentor</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col-reverse space-y-2 overflow-y-auto overflow-x-hidden lg:h-[calc(100vh_-_308px)] h-[calc(100vh_-_268px)]">
              <InfiniteScroll
                dataLength={messages.length} //This is important field to render the next data
                //   next={fetchData}
                hasMore={true}
                //     loader={<h4>Loading...</h4>}
                endMessage={
                  <p style={{ textAlign: "center" }}>
                    <b>Yay! You have seen it all</b>
                  </p>
                }
                refreshFunction={handleMessageSubmit}
                pullDownToRefresh
                pullDownToRefreshThreshold={50}
                pullDownToRefreshContent={
                  <h3 style={{ textAlign: "center" }}>
                    &#8595; Pull down to refresh
                  </h3>
                }
                releaseToRefreshContent={
                  <h3 style={{ textAlign: "center" }}>
                    &#8593; Release to refresh
                  </h3>
                }
              >
                <div className="flex flex-col space-y-2 px-2">
                  {messages.map((message) => (
                    <div
                      ref={divRef}
                      key={message.id}
                      className={`p-2 rounded-lg max-w-xs ${
                        message.sender === "user"
                          ? "bg-red self-end"
                          : message.sender === "bot"
                          ? "bg-blue self-start"
                          : ""
                      }`}
                    >
                      {message.text}
                    </div>
                  ))}
                </div>
              </InfiniteScroll>
            </div>
            <form className="flex items-center justify-between gap-3 p-3">
              <CustomInput
                placeholder="Text message"
                className="h-[44px]"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <div className="w-[44px]">
                <button
                  type="submit"
                  className="w-[44px] h-[44px] flex justify-center items-center 
                bg-transparent hover:bg-gray border-2 border-gray duration-200 rounded-xl"
                  onClick={handleMessageSubmit}
                >
                  <span className="-ml-0.5 mt-0.5">
                    <CollapseSendIcon />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseChat;
