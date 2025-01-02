export default function DeploymentFooter() {
  const timestamp = new Intl.DateTimeFormat("en-AU", {
    timeZone: "Australia/Sydney",
    timeStyle: "medium",
  }).format(new Date());

  return (
    <footer className="text-sm text-gray-700 dark:text-gray-500">
      <span>Last updated {timestamp} Sydney time</span>
      <span className="mx-1">|</span>
      <span>▲ {process.env.VERCEL_DEPLOYMENT_ID || "localhost"}</span>
    </footer>
  );
}
