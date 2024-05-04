export function DeliveryBoxWithNoShippingZoneOnOnlinePortal({
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
      <path d="m17.5 24c-3.584 0-6.5-2.916-6.5-6.5s2.916-6.5 6.5-6.5 6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5zm0-11.5c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
      <path d="m13.43 22.32c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.061l8.141-8.141c.293-.293.768-.293 1.061 0s.293.768 0 1.061l-8.141 8.141c-.148.147-.339.22-.531.22z" />
      <path d="m9.25 20h-6.5c-.965 0-1.75-.785-1.75-1.75v-11c0-.414.336-.75.75-.75h16.5c.414 0 .75.336.75.75v2.06c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.31h-15v10.25c0 .136.114.25.25.25h6.5c.414 0 .75.336.75.75s-.336.75-.75.75z" />
      <path d="m12.25 11h-4.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.5c.414 0 .75.336.75.75s-.336.75-.75.75z" />
      <path d="m19.25 8h-18.5c-.414 0-.75-.336-.75-.75v-3.5c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75v3.5c0 .414-.336.75-.75.75zm-17.75-1.5h17v-2h-17z" />
      <path d="m19.25 4.5c-.203 0-.405-.082-.553-.243l-2.527-2.757h-12.34l-2.527 2.757c-.278.306-.755.326-1.06.046-.306-.279-.326-.754-.046-1.06l2.75-3c.142-.155.343-.243.553-.243h13c.21 0 .411.088.553.243l2.75 3c.28.306.26.78-.046 1.06-.144.132-.325.197-.507.197z" />
    </svg>
  );
}
