import header from "./main-header.png";
import Image from "next/image";
import Logout from "./logout";

const Header = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div
        style={{
          display: "flex",
          maxHeight: "60vh",
          maxWidth: "60vw",
        }}
      >
        <Image src={header} alt="main-header" />
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
