export function FormulaeTableWithRowAndColumnCells({
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
      <path d="m21.25 23h-18.5c-1.517 0-2.75-1.233-2.75-2.75v-16.5c0-1.517 1.233-2.75 2.75-2.75h18.5c1.517 0 2.75 1.233 2.75 2.75v16.5c0 1.517-1.233 2.75-2.75 2.75zm-18.5-20.5c-.689 0-1.25.561-1.25 1.25v16.5c0 .689.561 1.25 1.25 1.25h18.5c.689 0 1.25-.561 1.25-1.25v-16.5c0-.689-.561-1.25-1.25-1.25z" />
      <path d="m23.25 8.5h-22.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h22.5c.414 0 .75.336.75.75s-.336.75-.75.75z" />
      <path d="m23.25 13.5h-22.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h22.5c.414 0 .75.336.75.75s-.336.75-.75.75z" />
      <path d="m23.25 18.5h-22.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h22.5c.414 0 .75.336.75.75s-.336.75-.75.75z" />
      <path d="m6.25 23c-.414 0-.75-.336-.75-.75v-14.5c0-.414.336-.75.75-.75s.75.336.75.75v14.5c0 .414-.336.75-.75.75z" />
      <path d="m12 23c-.414 0-.75-.336-.75-.75v-14.5c0-.414.336-.75.75-.75s.75.336.75.75v14.5c0 .414-.336.75-.75.75z" />
      <path d="m17.75 23c-.414 0-.75-.336-.75-.75v-14.5c0-.414.336-.75.75-.75s.75.336.75.75v14.5c0 .414-.336.75-.75.75z" />
    </svg>
  );
}
