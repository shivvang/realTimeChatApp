import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const SentByme = message.senderId === authUser._id;
  const dynamicClassForChatAppearance = SentByme
    ? "justify-end"
    : "justify-start";
  const changingProfilePicDynamically = SentByme
    ? authUser.profilePicture
    : selectedConversation.profilePicture;
  const chatBgColor = SentByme ? "bg-slate-600 " : "bg-slate-900";
  const formattedTime = extractTime(message.createdAt);
  //here justify start and end will be changed dynamically
  return (
    <>
      <div
        className={`flex ${dynamicClassForChatAppearance} items-start gap-2`}
      >
        <div
          className={`bg-${chatBgColor} rounded-lg text-xl text-white p-3`}
          style={{
            maxWidth: "70%",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          {message.message}
        </div>
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={changingProfilePicDynamically}
            alt="Profile"
          />
        </div>
      </div>
      <div className="text-xs text-gray-500 mt-1 ml-14">{formattedTime}</div>
    </>
  );
};

export default Message;
