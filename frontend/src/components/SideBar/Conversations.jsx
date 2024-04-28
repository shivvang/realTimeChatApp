import useFindChatMate from "../../hooks/useFindChatmate";
import Conversation from "./Conversation";

const Conversations = () => {
  const { conversations } = useFindChatMate();

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {Object.keys(conversations).length > 0 &&
        conversations.map((conversation, idx) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            lastIdx={idx == conversations.length - 1}
          />
        ))}
    </div>
  );
};

export default Conversations;
