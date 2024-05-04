export function BatteryChargingCellStatusNotificationOnKeyboard({
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
      <path d="m19.25 18h-14.5c-.965 0-1.75-.785-1.75-1.75v-8.5c0-.965.785-1.75 1.75-1.75h14.5c.965 0 1.75.785 1.75 1.75v8.5c0 .965-.785 1.75-1.75 1.75zm-14.5-10.5c-.138 0-.25.112-.25.25v8.5c0 .138.112.25.25.25h14.5c.138 0 .25-.112.25-.25v-8.5c0-.138-.112-.25-.25-.25z" />
      <path d="m9.25 18c-.414 0-.75-.336-.75-.75v-10.5c0-.414.336-.75.75-.75s.75.336.75.75v10.5c0 .414-.336.75-.75.75z" />
      <path d="m14.75 18c-.414 0-.75-.336-.75-.75v-10.5c0-.414.336-.75.75-.75s.75.336.75.75v10.5c0 .414-.336.75-.75.75z" />
      <path d="m21.25 24h-18.5c-1.517 0-2.75-1.233-2.75-2.75v-18.5c0-1.517 1.233-2.75 2.75-2.75h18.5c1.517 0 2.75 1.233 2.75 2.75v18.5c0 1.517-1.233 2.75-2.75 2.75zm-18.5-22.5c-.689 0-1.25.561-1.25 1.25v18.5c0 .689.561 1.25 1.25 1.25h18.5c.689 0 1.25-.561 1.25-1.25v-18.5c0-.689-.561-1.25-1.25-1.25z" />
    </svg>
  );
}
