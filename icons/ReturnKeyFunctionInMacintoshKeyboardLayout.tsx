export function ReturnKeyFunctionInMacintoshKeyboardLayout({
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
      <path d="m22.25 17.5h-11.761c-.901 0-1.713-.535-2.068-1.364l-2.221-5.181c-.118-.276-.388-.455-.689-.455h-3.761c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3.761c.901 0 1.713.535 2.068 1.364l2.221 5.181c.118.276.388.455.689.455h11.761c.414 0 .75.336.75.75s-.336.75-.75.75z" />
      <path d="m22.25 10.5h-11.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h11.5c.414 0 .75.336.75.75s-.336.75-.75.75z" />
    </svg>
  );
}
