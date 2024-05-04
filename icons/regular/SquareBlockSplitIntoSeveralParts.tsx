/**
 * Original name: Square block split into several parts Icon Free Download
 */
export function SquareBlockSplitIntoSeveralParts({
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
      <path d="m1.75 24h20.5c.965 0 1.75-.785 1.75-1.75v-20.5c0-.965-.785-1.75-1.75-1.75h-20.5c-.965 0-1.75.785-1.75 1.75v20.5c0 .965.785 1.75 1.75 1.75zm-.25-1.75v-9.5h9.75v9.75h-9.5c-.138 0-.25-.112-.25-.25zm21-6.75h-9.75v-7h9.75zm-.25 7h-9.5v-5.5h9.75v5.25c0 .138-.112.25-.25.25zm.25-20.75v5.25h-9.75v-5.5h9.5c.138 0 .25.112.25.25zm-20.75-.25h9.5v9.75h-9.75v-9.5c0-.138.112-.25.25-.25z" />
    </svg>
  );
}
