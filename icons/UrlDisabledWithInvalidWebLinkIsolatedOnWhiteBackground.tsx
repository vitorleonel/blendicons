export function UrlDisabledWithInvalidWebLinkIsolatedOnWhiteBackground({
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
      <path d="m22.25 23c-.192 0-.384-.073-.53-.22l-20.5-20.5c-.293-.293-.293-.768 0-1.061s.768-.293 1.061 0l20.5 20.5c.293.293.293.768 0 1.061-.147.147-.339.22-.531.22z" />
      <path d="m18.139 18.89c-.356 0-.671-.254-.737-.616-.073-.408.197-.798.605-.872 1.095-.197 2.091-.721 2.883-1.512 1.039-1.038 1.61-2.42 1.61-3.89 0-3.032-2.467-5.5-5.5-5.5h-2.25c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h2.25c3.86 0 7 3.141 7 7 0 1.87-.728 3.629-2.05 4.95-1.008 1.009-2.28 1.675-3.677 1.928-.044.008-.089.012-.134.012z" />
      <path d="m5.854 6.604c-.354 0-.67-.253-.737-.614-.074-.407.195-.798.603-.873.421-.078.851-.117 1.28-.117h2.25c.414 0 .75.336.75.75s-.336.75-.75.75h-2.25c-.337 0-.677.031-1.009.092-.046.009-.091.012-.137.012z" />
      <path d="m9.25 19h-2.25c-3.86 0-7-3.141-7-7 0-2.083.918-4.043 2.519-5.379.318-.266.791-.223 1.057.096.265.318.222.791-.096 1.056-1.258 1.049-1.98 2.59-1.98 4.227 0 3.032 2.467 5.5 5.5 5.5h2.25c.414 0 .75.336.75.75s-.336.75-.75.75z" />
      <path d="m15.25 12.75h-3.25c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3.25c.414 0 .75.336.75.75s-.336.75-.75.75z" />
    </svg>
  );
}
