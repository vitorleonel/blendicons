export function UpNavigationShiftKeyOnComputerKeyboard({
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
      <path d="m15.25 22h-6.5c-.414 0-.75-.336-.75-.75v-8.75h-4.25c-.298 0-.566-.176-.687-.448s-.067-.589.134-.809l8.25-9c.283-.311.822-.311 1.105 0l8.25 9c.201.22.254.536.134.809s-.388.448-.686.448h-4.25v8.75c0 .414-.336.75-.75.75zm-5.75-1.5h5v-8.75c0-.414.336-.75.75-.75h3.295l-6.545-7.14-6.545 7.14h3.295c.414 0 .75.336.75.75z" />
    </svg>
  );
}
