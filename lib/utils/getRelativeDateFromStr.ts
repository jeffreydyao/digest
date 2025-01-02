export default (dateString: string) => {
  // Parse the date string into a Date object
  const date = new Date(dateString);

  // Get the current date
  const now = new Date();

  // Calculate the difference in milliseconds
  const diffInMs = date.getTime() - now.getTime();

  // Calculate the difference in various units
  const diffInSeconds = Math.round(diffInMs / 1000);
  const diffInMinutes = Math.round(diffInMs / (1000 * 60));
  const diffInHours = Math.round(diffInMs / (1000 * 60 * 60));
  const diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24));

  // Create a new Intl.RelativeTimeFormat instance
  const rtf = new Intl.RelativeTimeFormat("en-AU", { numeric: "auto" });

  // Determine the appropriate unit to use
  if (Math.abs(diffInSeconds) < 60) {
    return rtf.format(diffInSeconds, "second");
  } else if (Math.abs(diffInMinutes) < 60) {
    return rtf.format(diffInMinutes, "minute");
  } else if (Math.abs(diffInHours) < 24) {
    return rtf.format(diffInHours, "hour");
  } else {
    return rtf.format(diffInDays, "day");
  }
};
