import SideBar from "../../components/SideBar/SideBar";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] p-4 rounded-lg  overflow-hidden  bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <SideBar />
    </div>
  );
};

export default Home;
