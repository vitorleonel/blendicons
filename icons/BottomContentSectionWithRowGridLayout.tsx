export function BottomContentSectionWithRowGridLayout({
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
      <path d="m1.75 24h20.5c.965 0 1.75-.785 1.75-1.75v-20.5c0-.965-.785-1.75-1.75-1.75h-20.5c-.965 0-1.75.785-1.75 1.75v20.5c0 .965.785 1.75 1.75 1.75zm20.5-1.5h-20.5c-.138 0-.25-.112-.25-.25v-9.5h21v9.5c0 .138-.112.25-.25.25zm-13.75-11.25v-9.75h7v9.75zm14-9.5v9.5h-5.5v-9.75h5.25c.138 0 .25.112.25.25zm-20.75-.25h5.25v9.75h-5.5v-9.5c0-.138.112-.25.25-.25z" />
    </svg>
  );
}
