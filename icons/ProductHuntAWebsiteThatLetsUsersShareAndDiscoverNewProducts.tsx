export function ProductHuntAWebsiteThatLetsUsersShareAndDiscoverNewProducts({
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
      <path d="m12 24c-6.617 0-12-5.383-12-12s5.383-12 12-12 12 5.383 12 12-5.383 12-12 12zm0-22.5c-5.79 0-10.5 4.71-10.5 10.5s4.71 10.5 10.5 10.5 10.5-4.71 10.5-10.5-4.71-10.5-10.5-10.5z" />
      <path d="m9.554 17.152c-.414 0-.75-.336-.75-.75v-8.804c0-.414.336-.75.75-.75h3.913c2.032 0 3.685 1.653 3.685 3.685s-1.653 3.685-3.685 3.685h-3.163v2.185c0 .413-.336.749-.75.749zm.75-4.435h3.163c1.205 0 2.185-.98 2.185-2.185s-.98-2.185-2.185-2.185h-3.163z" />
    </svg>
  );
}
