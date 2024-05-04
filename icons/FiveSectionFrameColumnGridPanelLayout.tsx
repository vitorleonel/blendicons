export function FiveSectionFrameColumnGridPanelLayout({
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
      <path d="m1.75 24h20.5c.965 0 1.75-.785 1.75-1.75v-20.5c0-.965-.785-1.75-1.75-1.75h-20.5c-.965 0-1.75.785-1.75 1.75v20.5c0 .965.785 1.75 1.75 1.75zm-.25-1.75v-9.5h9.75v9.75h-9.5c-.138 0-.25-.112-.25-.25zm7-11v-9.75h7v9.75zm13.75 11.25h-9.5v-9.75h9.75v9.5c0 .138-.112.25-.25.25zm.25-20.75v9.5h-5.5v-9.75h5.25c.138 0 .25.112.25.25zm-20.75-.25h5.25v9.75h-5.5v-9.5c0-.138.112-.25.25-.25z" />
    </svg>
  );
}
