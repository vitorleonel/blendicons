export function ToggleOnTheFunctionAssociatedWithSwitch({
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
      <path d="m17 19h-10c-3.86 0-7-3.141-7-7s3.14-7 7-7h10c3.86 0 7 3.141 7 7s-3.14 7-7 7zm-10-12.5c-3.033 0-5.5 2.468-5.5 5.5s2.467 5.5 5.5 5.5h10c3.033 0 5.5-2.468 5.5-5.5s-2.467-5.5-5.5-5.5z" />
      <path d="m17 16c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6.5c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5z" />
    </svg>
  );
}
