import DateTimeDisplay from "./DateTimeDisplay";

type Props = {
  minutes: number;
  seconds: number;
};

const ShowCounter = ({ minutes, seconds }: Props) => {
  return (
    <div className="show-counter">
      <a
        href="https://tapasadhikary.com"
        target="_blank"
        rel="noopener noreferrer"
        className="countdown-link"
      >
        <DateTimeDisplay
          value={minutes}
          type={"Mins"}
          isDanger={minutes === 0 && seconds <= 15}
        />
        <p>:</p>
        <DateTimeDisplay
          value={seconds}
          type={"Seconds"}
          isDanger={minutes === 0 && seconds <= 15}
        />
      </a>
    </div>
  );
};

export default ShowCounter;
