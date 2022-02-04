import header from "./main-header.png";
import Image from "next/image";
import Logout from "./logout";

const Header = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div className="image-container">
        <div className="room-info">
          <h1>Room Info</h1>
        </div>
        <div className="header-left">
          <Image src={header} alt="main-header" />
        </div>
      </div>
      <div
        style={{
          height: "60px",
          display: "flex",
          justifyContent: "end",
          padding: "10px",
        }}
      >
        <Logout />
      </div>
    </div>
  );
};

export default Header;
