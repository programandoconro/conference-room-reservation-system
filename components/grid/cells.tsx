import { ReservationType } from "@comp/utils/types";

const Cell = (props: {
  title?: string;
  hour?: string;
  reservation?: ReservationType[];
  room?: string;
}) => {
  const { title, hour, reservation } = props;
  const hover = "hover:border-purple-500";
  const noHover = `h-10 border flex justify-center items-center`;
  const className = title ? noHover : noHover + " " + hover;

  const totalCols = 14;
  const widthCol = 2;
  const calcWidth = String((widthCol / totalCols) * 100) + "%";
  const marginUnit = "5.76" + " rem";

  return (
    <div>
      {reservation?.map((res: ReservationType, key: number) => {
        const start = new Date(res.start).getHours().toString();
        console.log(start, hour);

        return (
          <div key={key}>
            {hour === start && !title && (
              <div
                style={{ width: calcWidth, marginLeft: marginUnit }}
                className="absolute bg-yellow-200 h-10 border-none flex justify-center items-center"
              >
                {hour}
              </div>
            )}
          </div>
        );
      })}
      <div className={className}>{title}</div>
    </div>
  );
};

export default Cell;
