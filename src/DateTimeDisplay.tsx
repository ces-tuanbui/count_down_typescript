type Props = {
  value: number;
  type: string;
  isDanger: boolean;
};

const DateTimeDisplay = ({ value, type, isDanger }: Props) => {
  return (
    <div className={isDanger ? "countdown danger" : "countdown"}>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
