export function EnterButtonWithArrowIndicationKeyLayout({
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
      <path d="m19.25 17.5h-14.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h13.75v-11.25c0-.414.336-.75.75-.75s.75.336.75.75v12c0 .414-.336.75-.75.75z" />
      <path d="m8.75 21.5c-.192 0-.384-.073-.53-.22l-4-4c-.293-.293-.293-.768 0-1.061l4-4c.293-.293.768-.293 1.061 0s.293.768 0 1.061l-3.47 3.47 3.47 3.47c.293.293.293.768 0 1.061-.147.146-.339.219-.531.219z" />
    </svg>
  );
}
