import ExpiredNotice from "./ExpiredNotice";
import ShowCounter from "./ShowCounter";
import { useCountdown } from "./hook/useCountdown";

type Props = {
  targetDate: number;
};

const CountdownTimer = ({ targetDate }: Props) => {
  const [minutes, seconds] = useCountdown(targetDate);

  if (minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return <ShowCounter minutes={minutes} seconds={seconds} />;
  }
};

export default CountdownTimer;
