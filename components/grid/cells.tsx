import { ReservationType } from "@comp/utils/types";
import differenceInMinutes from "date-fns/differenceInMinutes";

const Cell = (props: {
  title?: string;
  hour?: string;
  reservation?: ReservationType[];
  room?: string;
}) => {
  const { title, hour, reservation } = props;
  const hover = "hover:border-purple-600 hover:border-2 transition";
  const noHover = `h-10 border flex justify-center items-center`;
  const className = title ? noHover : noHover + " " + hover;

  const totalCols = 14;
  const marginUnit = "1" + " rem";

  return (
    <div>
      {reservation?.map((res: ReservationType, key: number) => {
        const startHour = new Date(res.start).getHours().toString();
        const endHour = new Date(res.end).getHours().toString();
        const startMinutes =
          new Date(res.start).getMinutes().toString() === "0"
            ? "00"
            : new Date(res.start).getMinutes().toString();
        const endMinutes =
          new Date(res.end).getMinutes().toString() === "0"
            ? "00"
            : new Date(res.end).getMinutes().toString();
        const diff = differenceInMinutes(
          new Date(res.end),
          new Date(res.start)
        );
        const calcWidth = String(diff / 9) + "%";
        console.log(calcWidth);

        return (
          <div key={key}>
            {hour === startHour && !title && (
              <div
                style={{ width: calcWidth }}
                className="absolute rounded border border-1 border-yellow-400 bg-yellow-200 h-[39px] flex justify-center items-center"
              >
                {startHour}:{startMinutes} - {endHour}:{endMinutes}
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
