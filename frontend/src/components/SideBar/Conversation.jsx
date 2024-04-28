import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;

  return (
    <>
      <div
        className={`flex gap-4 items-center hover:bg-neutral-950 rounded p-2 py-1 cursor-pointer ${
          isSelected ? "bg-neutral-950" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="w-12 rounded-full">
          <img src={conversation.profilePicture} alt="user avatar" />
        </div>
        <div>
          <p className="font-bold text-gray-200">{conversation.fullName}</p>
        </div>
      </div>
      {!lastIdx && <hr className="my-2" />}
    </>
  );
};

export default Conversation;
