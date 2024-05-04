export function PuchCartMaterialHandlingWithHandleSupport({
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
      <path d="m23.25 24c-.236 0-.469-.111-.615-.32l-1.153-1.646c-.234-.334-.617-.533-1.024-.533h-9.008c-.414 0-.75-.336-.75-.75s.336-.751.75-.751h9.008c.896 0 1.739.438 2.253 1.174l1.153 1.646c.238.339.155.807-.184 1.044-.131.092-.281.136-.43.136z" />
      <path d="m8.379 19.16c-.348 0-.661-.244-.733-.599l-3.306-16.034c-.118-.57-.626-.99-1.208-.997l-2.391-.03c-.415-.005-.746-.346-.741-.76s.312-.755.759-.74l2.391.03c1.282.016 2.4.938 2.659 2.194l3.305 16.034c.084.405-.177.803-.583.886-.051.011-.102.016-.152.016z" />
      <path d="m9 23.997c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z" />
      <path d="m19.25 19h-5.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.75v-7h-7v5.75c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-6.5c0-.414.336-.75.75-.75h8.5c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75z" />
      <path d="m16.25 13h-2.5c-.414 0-.75-.336-.75-.75v-2.5c0-.414.336-.75.75-.75h2.5c.414 0 .75.336.75.75v2.5c0 .414-.336.75-.75.75zm-1.75-1.5h1v-1h-1z" />
    </svg>
  );
}
