export function LuggageStorageBoxesOnTrolleyCartAtAirport({
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
      <path d="m23.18 20.5-17.93-.003c-1.517 0-2.75-1.233-2.75-2.75v-9.997c0-.138-.112-.25-.25-.25h-1.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.5c.965 0 1.75.785 1.75 1.75v9.997c0 .689.561 1.25 1.25 1.25l17.93.003c.414 0 .75.336.75.75s-.336.75-.75.75z" />
      <path d="m9 24c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-2.5c-.275 0-.5.224-.5.5s.225.5.5.5.5-.224.5-.5-.225-.5-.5-.5z" />
      <path d="m19 24c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-2.5c-.275 0-.5.224-.5.5s.225.5.5.5.5-.224.5-.5-.225-.5-.5-.5z" />
      <path d="m13.75 18h-8c-.414 0-.75-.336-.75-.75v-16.5c0-.414.336-.75.75-.75h8c.414 0 .75.336.75.75v16.5c0 .414-.336.75-.75.75zm-7.25-1.5h6.5v-15h-6.5z" />
      <path d="m22.25 18h-8.5c-.414 0-.75-.336-.75-.75v-7.5c0-.414.336-.75.75-.75h8.5c.414 0 .75.336.75.75v7.5c0 .414-.336.75-.75.75zm-7.75-1.5h7v-6h-7z" />
      <path d="m21.25 10.5h-5.5c-.414 0-.75-.336-.75-.75v-5c0-.414.336-.75.75-.75h5.5c.414 0 .75.336.75.75v5c0 .414-.336.75-.75.75zm-4.75-1.5h4v-3.5h-4z" />
    </svg>
  );
}
