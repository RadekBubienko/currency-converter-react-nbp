import { ClockContainer } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {

  const {
    myDate,
  } = useCurrentDate();

  const dateRender = myDate.toLocaleDateString(undefined, {
    month: "long",
    weekday: "long",
    day: "numeric",
    year: "numeric",
  });

  const timeRender = myDate.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  return (
    <ClockContainer>
      Dzisiaj jest {dateRender}, {timeRender}
    </ClockContainer>
  )
};

export default Clock;