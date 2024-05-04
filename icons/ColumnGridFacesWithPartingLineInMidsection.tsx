export function ColumnGridFacesWithPartingLineInMidsection({
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
      <path d="m1.75 24h20.5c.965 0 1.75-.785 1.75-1.75v-20.5c0-.965-.785-1.75-1.75-1.75h-20.5c-.965 0-1.75.785-1.75 1.75v20.5c0 .965.785 1.75 1.75 1.75zm20.75-22.25v20.5c0 .138-.112.25-.25.25h-9.5v-21h9.5c.138 0 .25.112.25.25zm-21 0c0-.138.112-.25.25-.25h9.5v21h-9.5c-.138 0-.25-.112-.25-.25z" />
    </svg>
  );
}
