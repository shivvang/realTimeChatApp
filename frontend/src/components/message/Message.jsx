const Message = () => {
  //here justify start and end will be changed dynamically
  return (
    <>
      <div className="flex justify-end items-center gap-2">
        <div className="bg-slate-600 rounded-lg text-xl text-white">
          something i guess
        </div>
        <div className="w-14 rounded-full">
          <img
            src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQIP_HLdL9BhsvtlSFi7C8gUj--bTCBEslGxNmHLaKaMSBSdVgDA6h8QG9VpqZzk3qBwZmbUOjYPe2OkBw"
            alt="some chat text i guess"
          />
        </div>
      </div>
      <div className="text-xs">3.30 am</div>
    </>
  );
};

export default Message;
