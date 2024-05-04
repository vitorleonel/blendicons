export function VolumeMuteFunctionKeyOnComputerKeyboard({
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
      <path d="m21.25 24h-18.5c-1.517 0-2.75-1.233-2.75-2.75v-18.5c0-1.517 1.233-2.75 2.75-2.75h18.5c1.517 0 2.75 1.233 2.75 2.75v18.5c0 1.517-1.233 2.75-2.75 2.75zm-18.5-22.5c-.689 0-1.25.561-1.25 1.25v18.5c0 .689.561 1.25 1.25 1.25h18.5c.689 0 1.25-.561 1.25-1.25v-18.5c0-.689-.561-1.25-1.25-1.25z" />
      <path d="m15.25 19c-.15 0-.3-.045-.429-.134l-5.556-3.866h-2.015c-.689 0-1.25-.561-1.25-1.25v-3.5c0-.689.561-1.25 1.25-1.25h2.015l5.557-3.866c.232-.159.529-.178.776-.049.247.13.402.386.402.665v12.5c0 .279-.155.535-.402.665-.11.057-.229.085-.348.085zm-7.75-5.5h2c.153 0 .303.047.429.134l4.571 3.18v-9.628l-4.571 3.18c-.126.087-.276.134-.429.134h-2z" />
    </svg>
  );
}
