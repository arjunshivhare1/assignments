const liveClock = () => {
  setInterval(() => {
    const date = new Date();
    // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    console.log(getTimeIn12Hours(date));
  }, 1000);
};

liveClock();

getTimeIn12Hours = (date) => {
  const hour = date?.getHours() % 12 || 12;
  const formatAmPm = date?.getHours() >= 12 ? "PM" : "AM";
  return `${hour}:${date.getMinutes()}::${date.getSeconds()} ${formatAmPm}`;
};
