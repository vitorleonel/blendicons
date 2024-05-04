export function ResizeAndCropToolForImageProcessing({
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
      <path d="m18.25 24c-.414 0-.75-.336-.75-.75v-15.5c0-.689-.561-1.25-1.25-1.25h-15.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h15.5c1.517 0 2.75 1.233 2.75 2.75v15.5c0 .414-.336.75-.75.75z" />
      <path d="m23.25 19h-15.5c-1.517 0-2.75-1.233-2.75-2.75v-15.5c0-.414.336-.75.75-.75s.75.336.75.75v15.5c0 .689.561 1.25 1.25 1.25h15.5c.414 0 .75.336.75.75s-.336.75-.75.75z" />
    </svg>
  );
}
