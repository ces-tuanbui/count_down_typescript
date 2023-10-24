import ExpiredNotice from "./ExpiredNotice";
import ShowCounter from "./ShowCounter";
import { useCountdown } from "./hook/useCountdown";

type Props = {
  targetDate: number;
};

const CountdownTimer = ({ targetDate }: Props) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
