export function InstantOnlineMoneyTransferOverMessagingService({
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
      <path d="m4.75 24c-.097 0-.194-.019-.287-.057-.28-.116-.463-.389-.463-.693v-4.25h-1.25c-1.517 0-2.75-1.233-2.75-2.75v-13.5c0-1.517 1.233-2.75 2.75-2.75h18.5c1.517 0 2.75 1.233 2.75 2.75v13.5c0 1.517-1.233 2.75-2.75 2.75h-11.189l-4.78 4.78c-.144.144-.336.22-.531.22zm-2-22.5c-.689 0-1.25.561-1.25 1.25v13.5c0 .689.561 1.25 1.25 1.25h2c.414 0 .75.336.75.75v3.189l3.72-3.72c.141-.141.332-.22.53-.22h11.5c.689 0 1.25-.561 1.25-1.25v-13.499c0-.689-.561-1.25-1.25-1.25z" />
      <path d="m12.38 13h-2.13c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h2.13c.342 0 .62-.278.62-.62 0-.352-.278-.63-.62-.63h-.76c-1.169 0-2.12-.951-2.12-2.12 0-1.179.951-2.13 2.12-2.13h2.13c.414 0 .75.336.75.75s-.336.75-.75.75h-2.13c-.342 0-.62.278-.62.62 0 .352.278.63.62.63h.76c1.169 0 2.12.951 2.12 2.12 0 1.179-.951 2.13-2.12 2.13z" />
      <path d="m12 7.5c-.414 0-.75-.336-.75-.75v-1.5c0-.414.336-.75.75-.75s.75.336.75.75v1.5c0 .414-.336.75-.75.75z" />
      <path d="m12 14.5c-.414 0-.75-.336-.75-.75v-1.5c0-.414.336-.75.75-.75s.75.336.75.75v1.5c0 .414-.336.75-.75.75z" />
    </svg>
  );
}
