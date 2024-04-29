import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  const lastMessage = useRef();
  console.log(lastMessage);
  useEffect(() => {
    setTimeout(() => {
      lastMessage.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessage}>
            <Message message={message} />
          </div>
        ))}
      {loading && <div>....loading...gotta take few minutes</div>}
      {!loading && messages.length === 0 && (
        <p className="text-center">Maybe you could say hi To them </p>
      )}
    </div>
  );
};

export default Messages;
