export function PlurkNetworkThatAllowsUsersToSendUpdatesThroughShortMessagesOrLinks({
  size = 24,
}: {
  size?: number;
}): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      enable-background="new 0 0 24 24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m7.821 24h-5.571c-.414 0-.75-.336-.75-.75v-22.5c0-.414.336-.75.75-.75h19.5c.414 0 .75.336.75.75v16.875c0 .414-.336.75-.75.75h-13.179v4.875c0 .414-.336.75-.75.75zm-4.821-1.5h4.071v-4.875c0-.414.336-.75.75-.75h13.179v-15.375h-18zm13.179-9.75h-8.358c-.414 0-.75-.336-.75-.75v-5.625c0-.414.336-.75.75-.75h8.357c.414 0 .75.336.75.75v5.625c.001.414-.335.75-.749.75zm-7.608-1.5h6.857v-4.125h-6.857z" />
    </svg>
  );
}
