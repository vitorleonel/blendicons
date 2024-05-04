export function MergeCellOfWorksheetToExpandMargin({
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
      <path d="m21.25 24h-18.5c-1.517 0-2.75-1.233-2.75-2.75v-18.5c0-1.517 1.233-2.75 2.75-2.75h18.5c1.517 0 2.75 1.233 2.75 2.75v18.5c0 1.517-1.233 2.75-2.75 2.75zm-18.5-22.5c-.689 0-1.25.561-1.25 1.25v18.5c0 .689.561 1.25 1.25 1.25h18.5c.689 0 1.25-.561 1.25-1.25v-18.5c0-.689-.561-1.25-1.25-1.25z" />
      <path d="m23.25 18.5h-22.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h22.5c.414 0 .75.336.75.75s-.336.75-.75.75z" />
      <path d="m23.25 7h-22.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h22.5c.414 0 .75.336.75.75s-.336.75-.75.75z" />
      <path d="m19.25 12.75h-14.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75z" />
      <path d="m16.5 15.5c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.061l2.22-2.22-2.22-2.22c-.293-.293-.293-.768 0-1.061s.768-.293 1.061 0l2.75 2.75c.293.293.293.768 0 1.061l-2.75 2.75c-.147.148-.339.221-.531.221z" />
      <path d="m7.5 15.5c-.192 0-.384-.073-.53-.22l-2.75-2.75c-.293-.293-.293-.768 0-1.061l2.75-2.75c.293-.293.768-.293 1.061 0s.293.768 0 1.061l-2.22 2.22 2.22 2.22c.293.293.293.768 0 1.061-.147.146-.339.219-.531.219z" />
      <path d="m12 7c-.414 0-.75-.336-.75-.75v-5.5c0-.414.336-.75.75-.75s.75.336.75.75v5.5c0 .414-.336.75-.75.75z" />
      <path d="m12 24c-.414 0-.75-.336-.75-.75v-5.5c0-.414.336-.75.75-.75s.75.336.75.75v5.5c0 .414-.336.75-.75.75z" />
    </svg>
  );
}
