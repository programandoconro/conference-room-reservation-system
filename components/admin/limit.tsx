import { useEffect, useState, useContext } from "react";
import { Input, Typography } from "@mui/material";
import { getLimitTime, postLimitTime } from "@comp/utils/requests";
import AdminContext from "@comp/contexts/adminContext";

const Limit = () => {
  const [limitSmall, setLimitSmall] = useState(0);
  const [limitMed, setLimitMed] = useState(0);
  const [limitBig, setLimitBig] = useState(0);
  const { admin } = useContext(AdminContext);
  useEffect(() => {
    admin.company &&
      getLimitTime(setLimitSmall, setLimitMed, setLimitBig, admin.company);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePost = () => {
    if (admin.company) {
      postLimitTime(
        limitSmall.toString(),
        limitMed.toString(),
        limitBig.toString(),
        admin.company
      );
    }
    alert("保存しました");
  };

  const handleChange = (e: string, setState: (v: number) => void) => {
    Number(e) >= 0 && setState(Number(e));
  };

  return (
    <div className="flex flex-col items-center">
      <h5 className="p-2 m-2 underline">会社: {admin.company}</h5>
      <Typography variant="subtitle1">制限間「週」:</Typography>
      <div className="flex justify-center items-center p-2 flex-col rounded shadow-lg bg-slate-300 shadow-slate-300">
        <div className="flex p-2 items-end ">
          <Typography paddingRight={"10px"}>小会議室</Typography>
          <Input
            type="number"
            onChange={(e) => {
              handleChange(e.target.value, setLimitSmall);
            }}
            value={limitSmall}
            style={{
              paddingLeft: "10px",
              width: "40px",
            }}
          />
        </div>
        <div className="flex p-2 items-end ">
          <Typography paddingRight={"10px"}>中会議室</Typography>
          <Input
            type="number"
            onChange={(e) => {
              handleChange(e.target.value, setLimitMed);
            }}
            value={limitMed}
            style={{
              paddingLeft: "10px",
              width: "40px",
            }}
          />
        </div>
        <div className="flex p-2 items-end ">
          <Typography paddingRight={"10px"}>大会議室</Typography>
          <Input
            type="number"
            style={{
              paddingLeft: "10px",
              width: "40px",
            }}
            onChange={(e) => {
              handleChange(e.target.value, setLimitBig);
            }}
            value={limitBig}
          />
        </div>

        <button
          onClick={handlePost}
          className="bg-blue-800 rounded transition hover:bg-blue-400 w-full text-white"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default Limit;
