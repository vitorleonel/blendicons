export function UnlockSecurityLockWithPermissionGrantedToAccess({
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
      <path d="m18.75 24h-13.5c-1.24 0-2.25-1.009-2.25-2.25v-10.5c0-1.241 1.01-2.25 2.25-2.25h13.5c1.24 0 2.25 1.009 2.25 2.25v10.5c0 1.241-1.01 2.25-2.25 2.25zm-13.5-13.5c-.413 0-.75.336-.75.75v10.5c0 .414.337.75.75.75h13.5c.413 0 .75-.336.75-.75v-10.5c0-.414-.337-.75-.75-.75z" />
      <path d="m6.75 10.5c-.414 0-.75-.336-.75-.75v-3.75c0-3.309 2.691-6 6-6s6 2.691 6 6c0 .414-.336.75-.75.75s-.75-.336-.75-.75c0-2.481-2.019-4.5-4.5-4.5s-4.5 2.019-4.5 4.5v3.75c0 .414-.336.75-.75.75z" />
    </svg>
  );
}
