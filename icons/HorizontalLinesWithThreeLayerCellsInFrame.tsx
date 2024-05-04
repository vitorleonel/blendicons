export function HorizontalLinesWithThreeLayerCellsInFrame({
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
      <path d="m1.75 24h20.5c.965 0 1.75-.785 1.75-1.75v-20.5c0-.965-.785-1.75-1.75-1.75h-20.5c-.965 0-1.75.785-1.75 1.75v20.5c0 .965.785 1.75 1.75 1.75zm20.75-8.5h-21v-7h21zm-.25 7h-20.5c-.138 0-.25-.112-.25-.25v-5.25h21v5.25c0 .138-.112.25-.25.25zm-20.5-21h20.5c.138 0 .25.112.25.25v5.25h-21v-5.25c0-.138.112-.25.25-.25z" />
    </svg>
  );
}
