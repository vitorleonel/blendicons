export function TextMessageNotification({
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
      <path d="m16.25 11.5h-8.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8.5c.414 0 .75.336.75.75s-.336.75-.75.75z" />
      <path d="m16.25 8.5h-8.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8.5c.414 0 .75.336.75.75s-.336.75-.75.75z" />
      <path d="m12.25 5.5h-4.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.5c.414 0 .75.336.75.75s-.336.75-.75.75z" />
      <path d="m21.75 23h-19.5c-1.241 0-2.25-1.009-2.25-2.25v-12.1c0-.826.453-1.585 1.183-1.98l2.213-1.182c.367-.195.82-.057 1.015.308.195.366.057.82-.308 1.015l-2.21 1.18c-.237.129-.393.388-.393.659v12.1c0 .414.336.75.75.75h19.5c.414 0 .75-.336.75-.75v-12.1c0-.271-.156-.53-.397-.66l-2.207-1.178c-.365-.195-.503-.649-.308-1.015.195-.365.648-.504 1.015-.308l2.21 1.18c.734.396 1.187 1.155 1.187 1.981v12.1c0 1.241-1.009 2.25-2.25 2.25z" />
      <path d="m11.999 16.996c-.438 0-.875-.103-1.273-.309l-10.323-5.393c-.367-.191-.509-.645-.317-1.012.193-.367.646-.508 1.012-.317l10.32 5.39c.358.185.808.185 1.169-.002l10.317-5.388c.366-.192.82-.05 1.012.317s.05.82-.317 1.012l-10.32 5.39c-.403.208-.841.312-1.28.312z" />
      <path d="m20.25 12.95c-.414 0-.75-.336-.75-.75v-9.45c0-.689-.561-1.25-1.25-1.25h-12.5c-.689 0-1.25.561-1.25 1.25v9.45c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-9.45c0-1.516 1.233-2.75 2.75-2.75h12.5c1.517 0 2.75 1.234 2.75 2.75v9.45c0 .414-.336.75-.75.75z" />
    </svg>
  );
}
