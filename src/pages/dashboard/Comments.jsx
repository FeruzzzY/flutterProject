import React, { useState } from "react";
import CardRounded16 from "../../components/cards/CardRounded16";
import UploadDefaultIcon from "../../components/icons/CommentIcon";
import ReplyIcon from "../../components/icons/ReplyIcon";
import MinusIcon from "../../components/icons/MinusIcon";
import CollapsePlusIcon from "../../components/icons/CollapsePlusIcon";
import SentIcon from "../../components/icons/SentIcon";
import BlueReplyIcon from "../../components/icons/BlueReplyIcon";
import ExitIcon from "../../components/icons/ExitIcon";
import { useTranslation } from "react-i18next";

const Comments = () => {
  const [showAnswers, setShowAnswers] = useState([]);

  const comments = [
    {
      id: 1,
      avatar: <UploadDefaultIcon />,
      name: "Muzaffar Fozilov",
      comment:
        "In the ever-evolving landscape of programming languages, Dart emerges as a powerful, open-source language that empowers developers to build dynamic and high-performance applications. Developed by Google, Dart is meticulously crafted with the vision of providing a seamless development experience across various platforms, from web applications to mobile solutions.",
      time: "Today 12:50",
      answers: [
        {
          id: 1,
          avatar: <UploadDefaultIcon />,
          name: "Muzaffar Fozilov",
          answer:
            "In the ever-evolving landscape of programming languages, Dart emerges as a powerful, open-source language that empowers developers to build dynamic and high-performance applications. Developed by Google, Dart is meticulously crafted with the vision of providing a seamless development experience across various platforms, from web applications to mobile solutions.",
          time: "Today 13:00",
        },
        {
          id: 1,
          avatar: <UploadDefaultIcon />,
          name: "Muzaffar Fozilov",
          answer:
            "In the ever-evolving landscape of programming languages, Dart emerges as a powerful, open-source language that empowers developers to build dynamic and high-performance applications. Developed by Google, Dart is meticulously crafted with the vision of providing a seamless development experience across various platforms, from web applications to mobile solutions.",
          time: "Today 13:00",
        },
        {
          id: 1,
          avatar: <UploadDefaultIcon />,
          name: "Muzaffar Fozilov",
          answer:
            "In the ever-evolving landscape of programming languages, Dart emerges as a powerful, open-source language that empowers developers to build dynamic and high-performance applications. Developed by Google, Dart is meticulously crafted with the vision of providing a seamless development experience across various platforms, from web applications to mobile solutions.",
          time: "Today 13:00",
        },
        {
          id: 1,
          avatar: <UploadDefaultIcon />,
          name: "Muzaffar Fozilov",
          answer:
            "In the ever-evolving landscape of programming languages, Dart emerges as a powerful, open-source language that empowers developers to build dynamic and high-performance applications. Developed by Google, Dart is meticulously crafted with the vision of providing a seamless development experience across various platforms, from web applications to mobile solutions.",
          time: "Today 13:00",
        },
        {
          id: 1,
          avatar: <UploadDefaultIcon />,
          name: "Muzaffar Fozilov",
          answer:
            "In the ever-evolving landscape of programming languages, Dart emerges as a powerful, open-source language that empowers developers to build dynamic and high-performance applications. Developed by Google, Dart is meticulously crafted with the vision of providing a seamless development experience across various platforms, from web applications to mobile solutions.",
          time: "Today 13:00",
        },
      ],
    },
    {
      id: 2,
      avatar: <UploadDefaultIcon />,
      name: "Muzaffar Fozilov",
      comment:
        "In the ever-evolving landscape of programming languages, Dart emerges as a powerful, open-source language that empowers developers to build dynamic and high-performance applications. Developed by Google, Dart is meticulously crafted with the vision of providing a seamless development experience across various platforms, from web applications to mobile solutions.",
      time: "Today 12:50",
      answers: [
        {
          id: 2,
          avatar: <UploadDefaultIcon />,
          name: "Muzaffar Fozilov",
          answer:
            "In the ever-evolving landscape of programming languages, Dart emerges as a powerful, open-source language that empowers developers to build dynamic and high-performance applications. Developed by Google, Dart is meticulously crafted with the vision of providing a seamless development experience across various platforms, from web applications to mobile solutions.",
          time: "Today 13:00",
        },
        {
          id: 2,
          avatar: <UploadDefaultIcon />,
          name: "Muzaffar Fozilov",
          answer:
            "In the ever-evolving landscape of programming languages, Dart emerges as a powerful, open-source language that empowers developers to build dynamic and high-performance applications. Developed by Google, Dart is meticulously crafted with the vision of providing a seamless development experience across various platforms, from web applications to mobile solutions.",
          time: "Today 13:00",
        },
        {
          id: 2,
          avatar: <UploadDefaultIcon />,
          name: "Muzaffar Fozilov",
          answer:
            "In the ever-evolving landscape of programming languages, Dart emerges as a powerful, open-source language that empowers developers to build dynamic and high-performance applications. Developed by Google, Dart is meticulously crafted with the vision of providing a seamless development experience across various platforms, from web applications to mobile solutions.",
          time: "Today 13:00",
        },
      ],
    },
  ];

  const handleToggleAnswers = (commentId) => {
    setShowAnswers((prevShowAnswers) =>
      prevShowAnswers.includes(commentId)
        ? prevShowAnswers.filter((id) => id !== commentId)
        : [...prevShowAnswers, commentId]
    );
  };

  return (
    <div className="lg:mt-[20px] mt-[60px] p-3.5 pt-[1px]">
      <div className="my-6 bg-white rounded-2xl border border-gray select-none max-h-[620px] overflow-y-auto pb-6 pr-6 pl-6">
        <div className="py-5 px-3.5 text-xl font-bold sticky top-0 bg-white z-10">
          Comments ({comments.length})
        </div>
        {comments.map((comment) => (
          <div key={comment.id} className="px-3.5 py-2 mb-5">
            <div className="flex items-center gap-3">
              {comment.avatar}
              <div>
                <p className="text-base font-bold">{comment.name}</p>
                <p className="text-sm text-[#B3B4B8]">{comment.time}</p>
              </div>
            </div>
            <div className="border-2 mt-5 p-3 rounded-lg border-[#e8e9eb] bg-[#fcfcfd] ">
              <p className="text-base font-normal">{comment.comment}</p>
            </div>
            {comment.answers.length > 0 && (
              <div className="mt-5">
                <div className="flex cursor-pointer gap-2 items-center mb-5 mt-2">
                  <div>
                    <ReplyIcon />
                  </div>
                  <div className="text-blue-600 cursor-pointer text-base">
                    Reply
                  </div>
                </div>
                <div className="flex -mt-3 items-centre">
                  <div
                    className="text-blue-600 cursor-pointer mr-2"
                    onClick={() => handleToggleAnswers(comment.id)}
                  >
                    {showAnswers.includes(comment.id) ? (
                      <MinusIcon />
                    ) : (
                      <CollapsePlusIcon />
                    )}
                  </div>
                  <div
                    className="font-medium cursor-pointer text-sm "
                    onClick={() => handleToggleAnswers(comment.id)}
                  >
                    answers ({comment.answers.length})
                  </div>
                </div>
              </div>
            )}
            {showAnswers.includes(comment.id) && (
              <div className="ml-8 mt-2">
                {comment.answers.map((answer) => (
                  <div
                    key={answer.id}
                    className="mt-5 mb-10 border-l-2 border-[#E8E9EB] pl-5 -ml-6"
                  >
                    <div className="flex items-center gap-3">
                      {answer.avatar}
                      <div>
                        <p className="font-semibold">{answer.name}</p>
                        <p className="text-sm text-[#B3B4B8]">{answer.time}</p>
                      </div>
                    </div>
                    <div className="border-2 mt-5 p-3 rounded-lg border-[#e8e9eb] bg-[#fcfcfd]">
                      <p>
                        <span className="text-base font-bold text-[#2A85FF]">
                          {comment.name}
                        </span>
                          
                        {answer.answer}
                      </p>
                    </div>
                    <div className="flex mt-5 gap-2">
                      <div>
                        <ReplyIcon />
                      </div>
                      <div className="text-blue-600 cursor-pointer text-base">
                        Reply
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex -mt-1 justify-between items-center bg-white rounded-2xl border border-gray select-none p-2">
        <div className="flex gap-3">
          <div>
            <BlueReplyIcon />
          </div>
          <div>
            <p className="text-sm font-semibold">
              Replied to 
              <span className="text-[#2A85FF]">Muzaffar Fozilov</span>
              <p className="text-base font-normal">
                In the ever-evolving landscape of programming languages...
              </p>
            </p>
          </div>
        </div>
        <div>
          <ExitIcon />
        </div>
      </div>
      <div className="-mt-4 flex gap-6">
        <input
          type="text"
          id="helper-text"
          aria-describedby="helper-text-explanation"
          class="my-6 bg-white rounded-3xl border border-gray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Type your comment"
        />
        <div className="bg-white rounded-2xl border border-gray pt-4 pl-4 pr-4 h-[54px] items-center content-centre mt-6">
          <SentIcon />
        </div>
      </div>
    </div>
  );
};

export default Comments;
