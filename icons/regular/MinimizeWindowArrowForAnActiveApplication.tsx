/**
 * Original name: minimize window arrow for an active application Icon Free Download
 */
export function MinimizeWindowArrowForAnActiveApplication({
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
      <path d="m11.25 20h-8.5c-1.517 0-2.75-1.233-2.75-2.75v-14.5c0-1.517 1.233-2.75 2.75-2.75h14.5c1.517 0 2.75 1.233 2.75 2.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.689-.561-1.25-1.25-1.25h-14.5c-.689 0-1.25.561-1.25 1.25v14.5c0 .689.561 1.25 1.25 1.25h8.5c.414 0 .75.336.75.75s-.336.75-.75.75z" />
      <path d="m14.75 22c-.414 0-.75-.336-.75-.75v-6.5c0-.414.336-.75.75-.75h6.5c.414 0 .75.336.75.75s-.336.75-.75.75h-5.75v5.75c0 .414-.336.75-.75.75z" />
      <path d="m23.25 24c-.192 0-.384-.073-.53-.22l-8.5-8.5c-.293-.293-.293-.768 0-1.061s.768-.293 1.061 0l8.5 8.5c.293.293.293.768 0 1.061-.147.147-.339.22-.531.22z" />
    </svg>
  );
}
