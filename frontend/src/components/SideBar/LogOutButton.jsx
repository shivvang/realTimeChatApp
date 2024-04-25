import { BiLogOut } from "react-icons/bi";
import useLogOut from "../../hooks/userLogOut";

const LogOutButton = () => {
  const { loading, logOut } = useLogOut();
  return (
    <div className="mt-auto">
      {!loading ? (
        <BiLogOut
          className="w-6 h-6 text-white cursor-pointer"
          onClick={logOut}
        />
      ) : (
        <span>...loading</span>
      )}
    </div>
  );
};

export default LogOutButton;
