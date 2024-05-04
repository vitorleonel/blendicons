export function SquareBoxShapeSelectionApplicationButtonEqualSides({
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
      <path d="m15.25 24h-13.5c-.965 0-1.75-.785-1.75-1.75v-13.5c0-.965.785-1.75 1.75-1.75h13.5c.965 0 1.75.785 1.75 1.75v13.5c0 .965-.785 1.75-1.75 1.75zm-13.5-15.5c-.138 0-.25.112-.25.25v13.5c0 .138.112.25.25.25h13.5c.138 0 .25-.112.25-.25v-13.5c0-.138-.112-.25-.25-.25z" />
      <path d="m23.25 4.5c-.414 0-.75-.336-.75-.75v-1c0-.689-.561-1.25-1.25-1.25h-1c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1c1.517 0 2.75 1.233 2.75 2.75v1c0 .414-.336.75-.75.75z" />
      <path d="m4.75 4.5c-.414 0-.75-.336-.75-.75v-1c0-1.517 1.233-2.75 2.75-2.75h1c.414 0 .75.336.75.75s-.336.75-.75.75h-1c-.689 0-1.25.561-1.25 1.25v1c0 .414-.336.75-.75.75z" />
      <path d="m16.25 1.5h-4.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.5c.414 0 .75.336.75.75s-.336.75-.75.75z" />
      <path d="m21.25 20h-1c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1c.689 0 1.25-.561 1.25-1.25v-1c0-.414.336-.75.75-.75s.75.336.75.75v1c0 1.517-1.233 2.75-2.75 2.75z" />
      <path d="m23.25 13c-.414 0-.75-.336-.75-.75v-4.5c0-.414.336-.75.75-.75s.75.336.75.75v4.5c0 .414-.336.75-.75.75z" />
    </svg>
  );
}
