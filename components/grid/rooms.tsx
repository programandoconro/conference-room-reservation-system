const rooms = ["大会議室", "中会議室", "小会議室"];
const Rooms = () => {
  return (
    <div className="pt-10">
      {rooms.map((room) => {
        return (
          <div
            key={room}
            className="h-10 flex justify-center items-center border-b"
          >
            {room}
          </div>
        );
      })}
    </div>
  );
};

export default Rooms;
