const rooms = ["大会議室", "中会議室", "小会議室"];
const Rooms = () => {
  return (
    <div className="pt-10">
      {rooms.map((room, key) => {
        return (
          <div
            key={key}
            className="h-10 translate-y-[2px] flex justify-center items-center border-b-2 border-r "
          >
            {room}
          </div>
        );
      })}
    </div>
  );
};

export default Rooms;
