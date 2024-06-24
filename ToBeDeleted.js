import { useState } from "react";
import { useSocketContext } from "./frontend/src/context/SocketContext.jsx";
import useConversation from "./frontend/src/zustand/useConversation";

const useListenMessages = () => {

    const { socket } = useSocketContext();
    const [ messages, setMessages ] = useConversation();

    useEffect(() => {

        socket?.on("newMessage", (newMessage) => {
            setMessages([...messages, newMessage]);
        });

        return socket.off("newMessage");
    }, [messages, socket, setMessages])

}

export default useListenMessages;