import LiveClockUpdate from "../tool/Clock";

const Footer = () => {
  const date = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const showDate =
    months[date.getMonth()] + " " + date.getDate() + "," + date.getFullYear();
  return (
    <div className="flex flex-col items-center py-5 text-gray-700 dark:text-white">
      <div className=" flex flex-row gap-2">
        <div>{showDate}</div>
        <LiveClockUpdate />
      </div>

      <div className=" font-serif">©2024 therinkit || All Rights Reserved</div>
    </div>
  );
};

export default Footer;
