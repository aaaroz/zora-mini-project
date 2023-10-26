import React, { useState } from "react";
import { Spinner } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { BsPersonCircle } from "react-icons/bs";
import { RiOpenaiFill, RiSendPlaneFill } from "react-icons/ri";
import { openai } from "../../configs/openai";
import Markdown from "react-markdown";

const systemMessage = {
  role: "system",
  content:
    "Explain things like you're talking to an administrator of ecommerce.",
};

export default function ChatbotAi() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm Brody! Ask me anything!",
      sentTime: "now",
      sender: "Brody",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const { register, handleSubmit, resetField } = useForm();

  //function for handle send button
  const handleSend = async ({ message }) => {
    resetField("message");
    //add a newMessage from user
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setIsTyping(true);
    //call a function for process message to chatgpt
    await processMessageToChatGPT(newMessages);
  };

  //async function for process message to chatgpt
  async function processMessageToChatGPT(chatMessages) {
    //format messages for OpenAI API
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    //call openai API with try & catch
    try {
      //create chat completions with model gpt-3.5-turbo
      const response = await openai.chat.completions
        .create({
          model: "gpt-3.5-turbo",
          messages: [systemMessage, ...apiMessages],
          max_tokens: 50,
        })
        .then((data) => {
          setMessages([
            ...chatMessages,
            {
              message: data.choices[0].message.content,
              sender: "Brody",
            },
          ]);
          setIsTyping(false);
        });

      //catch error case
    } catch (error) {
      console.error(error);
      setMessages([
        ...chatMessages,
        {
          message: error,
          sender: "Brody",
        },
      ]);
    }
  }
  return (
    <>
      <div className="bg-neutral-800 rounded-sm text-neutral-300 text-center text-sm pt-5 h-[480px]  overflow-y-auto">
        Default(GPT-3.5) - lite
        {messages.map((message, i) => {
          return (
            <div
              className="p-5 text-sm text-left text-white odd:bg-neutral-800 even:bg-neutral-900"
              key={i}
            >
              <div
                className={`flex flex-row items-center ${
                  message.sentTime === "now" && "hidden"
                }`}
              >
                <span>
                  {message.sender === "Brody" ? (
                    <div className="bg-green-400 p-1 me-5 md:p-2 rounded-sm text-2xl md:me-16">
                      <RiOpenaiFill />
                    </div>
                  ) : (
                    <div className="bg-neutral-800 p-1 me-5 md:p-2 rounded-sm text-2xl md:me-16">
                      <BsPersonCircle />
                    </div>
                  )}
                </span>

                <Markdown>{message.message}</Markdown>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full flex flex-row rounded-sm justify-center p-3 bg-gradient-to-t from-neutral-950 via-neutral-900 to-neutral-800">
        <form onSubmit={handleSubmit(handleSend)}>
          <div className="flex flex-row items-center w-64 sm:w-96 lg:w-[28rem] rounded-lg bg-neutral-700 ">
            {isTyping && (
              <span className="flex p-2">
                <Spinner className="h-5 w-5 text-neutral-300/50" />
                <p className="ms-2 text-sm animate-pulse text-neutral-300">
                  Generating...
                </p>
              </span>
            )}
            {!isTyping ? (
              <input
                type="text"
                placeholder="Send a message"
                className="w-full h-auto text-sm text-white bg-transparent border-transparent focus:ring-transparent focus:border-transparent"
                {...register("message")}
              />
            ) : (
              <input
                type="text"
                className="w-full h-auto text-sm text-white bg-transparent border-transparent focus:ring-transparent focus:border-transparent"
                {...register("message")}
                disabled
              />
            )}
            <button
              type="submit"
              className="m-2 p-2 rounded-md text-white bg-green-400 "
            >
              <RiSendPlaneFill />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
