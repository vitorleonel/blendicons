export function BoxTruckOtCargoDeliveryByLogisticCompany({
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
      <path d="m15.75 19h-9c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8.25v-12h-13.5v12h1.25c.414 0 .75.336.75.75s-.336.75-.75.75h-2c-.414 0-.75-.336-.75-.75v-13.5c0-.414.336-.75.75-.75h15c.414 0 .75.336.75.75v13.5c0 .414-.336.75-.75.75z" />
      <path d="m23.25 19h-2.25c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.5v-5.75c0-1.792-1.458-3.25-3.25-3.25h-2.75v9h.5c.414 0 .75.336.75.75s-.336.75-.75.75h-1.25c-.414 0-.75-.336-.75-.75v-10.5c0-.414.336-.75.75-.75h3.5c2.619 0 4.75 2.131 4.75 4.75v6.5c0 .414-.336.75-.75.75z" />
      <path d="m19 21c-1.517 0-2.75-1.233-2.75-2.75s1.233-2.75 2.75-2.75 2.75 1.233 2.75 2.75-1.233 2.75-2.75 2.75zm0-4c-.689 0-1.25.561-1.25 1.25s.561 1.25 1.25 1.25 1.25-.561 1.25-1.25-.561-1.25-1.25-1.25z" />
      <path d="m4.75 21c-1.517 0-2.75-1.233-2.75-2.75s1.233-2.75 2.75-2.75 2.75 1.233 2.75 2.75-1.233 2.75-2.75 2.75zm0-4c-.689 0-1.25.561-1.25 1.25s.561 1.25 1.25 1.25 1.25-.561 1.25-1.25-.561-1.25-1.25-1.25z" />
    </svg>
  );
}
