export function ThreeSectionBlocksInAFrameTemplateLayout({
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
      <path d="m24 14.75c0-.965-.785-1.75-1.75-1.75h-7.5c-.965 0-1.75.785-1.75 1.75v7.5c0 .965.785 1.75 1.75 1.75h7.5c.965 0 1.75-.785 1.75-1.75zm-1.5 7.5c0 .138-.112.25-.25.25h-7.5c-.138 0-.25-.112-.25-.25v-7.5c0-.138.112-.25.25-.25h7.5c.138 0 .25.112.25.25z" />
      <path d="m1.75 24h7.5c.965 0 1.75-.785 1.75-1.75v-7.5c0-.965-.785-1.75-1.75-1.75h-7.5c-.965 0-1.75.785-1.75 1.75v7.5c0 .965.785 1.75 1.75 1.75zm-.25-9.25c0-.138.112-.25.25-.25h7.5c.138 0 .25.112.25.25v7.5c0 .138-.112.25-.25.25h-7.5c-.138 0-.25-.112-.25-.25z" />
      <path d="m1.75 11h20.5c.965 0 1.75-.785 1.75-1.75v-7.5c0-.965-.785-1.75-1.75-1.75h-20.5c-.965 0-1.75.785-1.75 1.75v7.5c0 .965.785 1.75 1.75 1.75zm-.25-9.25c0-.138.112-.25.25-.25h20.5c.138 0 .25.112.25.25v7.5c0 .138-.112.25-.25.25h-20.5c-.138 0-.25-.112-.25-.25z" />
    </svg>
  );
}
