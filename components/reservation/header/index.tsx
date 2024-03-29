import { useContext } from "react";
import Logout from "./logout";
import Info from "./info";
import News from "./news";
import UserContext from "@comp/contexts/userContext";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import roomsPic from "./upper-area.png";
import Image from "next/image";
import CoreTime from "./coreTime";

const Header = (props: { company: string }) => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <div className="flex justify-end p-1">
        <div className="flex m-1 ">
          <p
            className=" my-2 mx-1 text-xs "
            style={{
              fontWeight: "lighter",
            }}
          >
            ようこそ
          </p>
          <p className="p-0 m-1" style={{ fontWeight: "bold" }}>
            {user?.name}様
          </p>
        </div>
        <button className="bg-white font-black m-1 p-1 hover:bg-purple-300 rounded transition">
          <LiveHelpIcon />
        </button>
        <Logout />
      </div>
      <div
        className="flex m-1 justify-end gap-1 overflow-hidden"
        style={{ maxHeight: "40vh" }}
      >
        <div className="w-1/3 overflow-hidden border-0 rounded-full">
          <Image
            placeholder="blur"
            layout="responsive"
            src={roomsPic}
            alt="pic"
          />
        </div>
        <div className=" w-2/3 align-middle">
          <News />
          <div className="flex h-1/2 justify-center items-center">
            <CoreTime company={props.company} />
          </div>
        </div>
        <Info />
      </div>
    </div>
  );
};

export default Header;
