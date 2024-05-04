export function SquareFramePartingIntoTwoEqualParts({
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
      <path d="m22.25 0h-20.5c-.965 0-1.75.785-1.75 1.75v20.5c0 .965.785 1.75 1.75 1.75h20.5c.965 0 1.75-.785 1.75-1.75v-20.5c0-.965-.785-1.75-1.75-1.75zm-20.5 1.5h20.5c.138 0 .25.112.25.25v9.5h-21v-9.5c0-.138.112-.25.25-.25zm20.5 21h-20.5c-.138 0-.25-.112-.25-.25v-9.5h21v9.5c0 .138-.112.25-.25.25z" />
    </svg>
  );
}
