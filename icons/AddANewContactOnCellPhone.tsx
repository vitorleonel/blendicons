export function AddANewContactOnCellPhone({
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
      <path d="m16 4c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-2.5c-.276 0-.5.224-.5.5s.224.5.5.5.5-.224.5-.5-.224-.5-.5-.5z" />
      <path d="m19.25 9c-.414 0-.75-.336-.75-.75v-.5c0-.689-.561-1.25-1.25-1.25h-2.5c-.689 0-1.25.561-1.25 1.25v.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-.5c0-1.517 1.233-2.75 2.75-2.75h2.5c1.517 0 2.75 1.233 2.75 2.75v.5c0 .414-.336.75-.75.75z" />
      <path d="m22 5.5c-.414 0-.75-.336-.75-.75v-2.5c0-.414.336-.75.75-.75s.75.336.75.75v2.5c0 .414-.336.75-.75.75z" />
      <path d="m23.25 4.25h-2.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h2.5c.414 0 .75.336.75.75s-.336.75-.75.75z" />
      <path d="m11.25 24h-7.5c-1.517 0-2.75-1.233-2.75-2.75v-15.5c0-1.517 1.233-2.75 2.75-2.75h7.5c.211 0 .409.025.606.064.406.081.67.476.59.882-.081.407-.476.673-.882.59-.103-.021-.205-.036-.314-.036h-7.5c-.689 0-1.25.561-1.25 1.25v15.5c0 .689.561 1.25 1.25 1.25h7.5c.689 0 1.25-.561 1.25-1.25v-10.04c0-.414.336-.75.75-.75s.75.336.75.75v10.04c0 1.517-1.233 2.75-2.75 2.75z" />
      <path d="m13.25 21h-11.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h11.5c.414 0 .75.336.75.75s-.336.75-.75.75z" />
    </svg>
  );
}
