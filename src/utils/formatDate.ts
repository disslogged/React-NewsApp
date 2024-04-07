const formatDate = (timestamp: string): string => {
  const date = new Date(timestamp);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  };
  return date.toLocaleString("en-US", options);
};

export default formatDate;
