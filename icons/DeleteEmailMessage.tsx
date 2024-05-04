export function DeleteEmailMessage({
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
      <path d="m20.25 18.25h-5.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h5.5c.414 0 .75.336.75.75s-.336.75-.75.75z" />
      <path d="m9.25 15h-7c-1.241 0-2.25-1.009-2.25-2.25v-9.5c0-1.241 1.009-2.25 2.25-2.25h17.5c1.241 0 2.25 1.009 2.25 2.25v6c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-6c0-.414-.336-.75-.75-.75h-17.5c-.414 0-.75.336-.75.75v9.5c0 .414.336.75.75.75h7c.414 0 .75.336.75.75s-.336.75-.75.75z" />
      <path d="m11.001 9.827c-.404 0-.808-.092-1.176-.276l-9.408-4.659c-.371-.184-.523-.633-.339-1.005.184-.371.633-.522 1.005-.339l9.41 4.66c.313.157.7.157 1.011.001l9.413-4.661c.37-.185.821-.032 1.005.339.184.372.032.821-.339 1.005l-9.41 4.66c-.366.183-.769.275-1.172.275z" />
    </svg>
  );
}
