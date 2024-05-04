export function UnsplashAllowsUserContributePhotographersAndGeneratesIncome({
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
      <path d="m23.25 24h-22.5c-.414 0-.75-.336-.75-.75v-12.656c0-.414.336-.75.75-.75h7.031c.414 0 .75.336.75.75v5.578h6.938v-5.578c0-.414.336-.75.75-.75h7.031c.414 0 .75.336.75.75v12.656c0 .414-.336.75-.75.75zm-21.75-1.5h21v-11.156h-5.531v5.578c0 .414-.336.75-.75.75h-8.438c-.414 0-.75-.336-.75-.75v-5.578h-5.531z" />
      <path d="m16.219 7.828h-8.438c-.414 0-.75-.336-.75-.75v-6.328c0-.414.336-.75.75-.75h8.438c.414 0 .75.336.75.75v6.328c0 .414-.336.75-.75.75zm-7.688-1.5h6.938v-4.828h-6.938z" />
    </svg>
  );
}
