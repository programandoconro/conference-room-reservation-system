import { useEffect, useContext } from "react";
import { postLimitTime } from "@comp/utils/requests";
import AdminContext from "@comp/contexts/adminContext";
import LimitsContext from "@comp/contexts/limitsContext";

const Limit = () => {
  const { admin } = useContext(AdminContext);
  const { limits, setLimits } = useContext(LimitsContext);

  const handlePost = () => {
    if (admin.company) {
      postLimitTime(limits);
      alert("保存しました");
    } else {
      console.log("会社名が入力されていません");
    }
  };

  useEffect(() => {
    setLimits({ ...limits, company: admin.company });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [admin.company]);

  return (
    <div className="flex flex-col items-center">
      <h5 className="p-2 m-2 underline">会社: {admin.company}</h5>
      <div className="flex gap-1 justify-center items-center p-2 flex-col rounded shadow-lg bg-slate-300 shadow-slate-300">
        <h5 className="underline p-2">会議室の時間制限</h5>
        <div className="flex p-2 items-end gap-1">
          <h5>小会議室:</h5>
          <input
            className="w-1/6 pl-1"
            type="number"
            onChange={(e) => {
              Number(e.target.value) >= 0 &&
                setLimits({
                  ...limits,
                  limitSmallRoom: Number(e.target.value),
                });
            }}
            value={limits.limitSmallRoom}
          />
          <h5>週</h5>
        </div>
        <div className="flex p-2 items-end gap-1">
          <h5>中会議室:</h5>
          <input
            className="w-1/6 pl-1"
            type="number"
            onChange={(e) => {
              Number(e.target.value) >= 0 &&
                setLimits({ ...limits, limitMedRoom: Number(e.target.value) });
            }}
            value={limits.limitMedRoom}
          />
          <h5>週</h5>
        </div>
        <div className="flex p-2 items-end gap-1">
          <h5>大会議室:</h5>
          <input
            className="w-1/6 pl-1"
            type="number"
            onChange={(e) => {
              Number(e.target.value) >= 0 &&
                setLimits({ ...limits, limitBigRoom: Number(e.target.value) });
            }}
            value={limits.limitBigRoom}
          />
          <h5>週</h5>
        </div>
        <hr className="w-full h-1 mt-2" />
        <h5 className="underline p-2">コアタイム</h5>
        <div className="flex p-2 items-end gap-1 justify-end">
          <h5>開始時間:</h5>
          <input
            className="w-1/6 pl-1"
            type={"number"}
            value={limits.coreTimeStart}
            onChange={(e) => {
              Number(e.target.value) >= 0 &&
                Number(e.target.value) <= 24 &&
                setLimits({ ...limits, coreTimeStart: Number(e.target.value) });
            }}
          />
          <h5>時</h5>
        </div>
        <div className="flex p-2 items-end gap-1 justify-end">
          <h5>終了時間:</h5>
          <input
            className="w-1/6 pl-1"
            type={"number"}
            value={limits.coreTimeEnd}
            onChange={(e) => {
              Number(e.target.value) >= 0 &&
                Number(e.target.value) <= 24 &&
                Number(e.target.value) >= limits.coreTimeStart &&
                setLimits({ ...limits, coreTimeEnd: Number(e.target.value) });
            }}
          />
          <h5>時</h5>
        </div>
        <hr className="w-full h-1 p-2 mt-2" />

        <button
          onClick={handlePost}
          className="w-1/2 p-2 mb-2 bg-blue-800 rounded transition hover:bg-blue-400  text-white"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default Limit;
