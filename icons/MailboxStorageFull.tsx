export function MailboxStorageFull({
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
      <path d="m21.25 22h-18.5c-1.517 0-2.75-1.233-2.75-2.75v-6.5c0-.106.022-.211.066-.308l4.5-10c.121-.269.389-.442.684-.442h13.5c.295 0 .563.173.684.442l4.5 10c.044.097.066.202.066.308v6.5c0 1.517-1.233 2.75-2.75 2.75zm-19.75-9.089v6.339c0 .689.561 1.25 1.25 1.25h18.5c.689 0 1.25-.561 1.25-1.25v-6.339l-4.235-9.411h-12.53z" />
      <path d="m16.506 18.5h-9.012c-.778 0-1.452-.501-1.676-1.247l-1.073-3.574c-.031-.106-.129-.179-.239-.179h-3.756c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3.756c.778 0 1.452.501 1.676 1.247l1.073 3.574c.032.106.13.179.239.179h9.012c.109 0 .208-.073.239-.179l1.073-3.574c.224-.746.897-1.247 1.676-1.247h3.756c.414 0 .75.336.75.75s-.336.75-.75.75h-3.756c-.109 0-.208.073-.239.179l-1.073 3.574c-.224.746-.898 1.247-1.676 1.247z" />
    </svg>
  );
}
