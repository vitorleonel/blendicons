export function ResidentialEntranceDoorLockWithSafePadlock({
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
      <path d="m12.25 22h-6.5c-1.517 0-2.75-1.233-2.75-2.75v-16.5c0-1.517 1.233-2.75 2.75-2.75h10.5c1.517 0 2.75 1.233 2.75 2.75v7.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-7.5c0-.689-.561-1.25-1.25-1.25h-10.5c-.689 0-1.25.561-1.25 1.25v16.5c0 .689.561 1.25 1.25 1.25h6.5c.414 0 .75.336.75.75s-.336.75-.75.75z" />
      <path d="m6.75 13c-.414 0-.75-.336-.75-.75v-2.5c0-.414.336-.75.75-.75s.75.336.75.75v2.5c0 .414-.336.75-.75.75z" />
      <path d="m22.25 24h-5.5c-.965 0-1.75-.785-1.75-1.75v-3.5c0-.965.785-1.75 1.75-1.75h5.5c.965 0 1.75.785 1.75 1.75v3.5c0 .965-.785 1.75-1.75 1.75zm-5.5-5.5c-.138 0-.25.112-.25.25v3.5c0 .138.112.25.25.25h5.5c.138 0 .25-.112.25-.25v-3.5c0-.138-.112-.25-.25-.25z" />
      <path d="m21.25 18.5h-3.5c-.414 0-.75-.336-.75-.75v-2.25c0-1.379 1.121-2.5 2.5-2.5s2.5 1.121 2.5 2.5v2.25c0 .414-.336.75-.75.75zm-2.75-1.5h2v-1.5c0-.552-.448-1-1-1s-1 .448-1 1z" />
    </svg>
  );
}
