const Conversation = () => {
  return (
    <>
      <div className="flex gap-4 items-center hover:bg-neutral-950 rounded p-2 py-1 cursor-pointer">
        <div className="w-12 rounded-full">
          <img
            src="https://mirafit.co.uk/wp/wp-content/uploads/2023/11/Athletes-Page-Big-Loz-1024x1024.jpg"
            alt="user avatar"
          />
        </div>
        <div>
          <p className="font-bold text-gray-200">Big loz</p>
        </div>
      </div>
      <hr className="my-2" />
    </>
  );
};

export default Conversation;
