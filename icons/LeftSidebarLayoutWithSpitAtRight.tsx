export function LeftSidebarLayoutWithSpitAtRight({
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
      <path d="m1.75 24h20.5c.965 0 1.75-.785 1.75-1.75v-20.5c0-.965-.785-1.75-1.75-1.75h-20.5c-.965 0-1.75.785-1.75 1.75v20.5c0 .965.785 1.75 1.75 1.75zm20.5-1.5h-13.75v-9.75h14v9.5c0 .138-.112.25-.25.25zm.25-20.75v9.5h-14v-9.75h13.75c.138 0 .25.112.25.25zm-21 0c0-.138.112-.25.25-.25h5.25v21h-5.25c-.138 0-.25-.112-.25-.25z" />
    </svg>
  );
}
