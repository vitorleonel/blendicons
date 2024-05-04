export function TopRightContentCellsWithHorizontalColumns({
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
      <path d="m1.75 24h20.5c.965 0 1.75-.785 1.75-1.75v-20.5c0-.965-.785-1.75-1.75-1.75h-20.5c-.965 0-1.75.785-1.75 1.75v20.5c0 .965.785 1.75 1.75 1.75zm13.75-15.5v7h-14v-7zm-7-1.5v-5.5h7v5.5zm14 8.5h-5.5v-7h5.5zm-21 6.75v-5.25h14v5.5h-13.75c-.138 0-.25-.112-.25-.25zm20.75.25h-5.25v-5.5h5.5v5.25c0 .138-.112.25-.25.25zm.25-20.75v5.25h-5.5v-5.5h5.25c.138 0 .25.112.25.25zm-20.75-.25h5.25v5.5h-5.5v-5.25c0-.138.112-.25.25-.25z" />
    </svg>
  );
}
