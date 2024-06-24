import { useEffect, useRef } from "react";
import Message from "./Message";
import MessageSkeleton from "../skeletons/MessageSkeletons"
import useGetMessages from "../../hooks/useGetMessages.js";
import useListenMessages from "../../hooks/useListenMessages.js";

const Messages = () => {

  const { loading, messages } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth"});
    }, 100);
  },[messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">

      {!loading && messages.length > 0 && messages.map((message) => (
        <div 
          key={message._id}
          ref={lastMessageRef}
        >
          <Message
            key={message._id}
            message={message}
          />
        </div>
      ))}
        {/* edge cases */}
        {loading && [...Array(3)].map((_, index) => <MessageSkeleton key={index} />)}
        {!loading && messages.length === 0 && (
          <p className="text-center text-red-200">Send message to start a conversation</p>
        )}
    </div>
  )
}

export default Messages;