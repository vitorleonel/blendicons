export function AirplaneModeToTurnOffAndOnCellularNetwork({
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
      <path d="m14.463 14c-.034 0-.067-.001-.102-.004-.376-.03-.719-.222-.94-.527l-1.161-1.591-1.733-1.285c-.304-.223-.494-.566-.522-.942s.107-.744.374-1.01c.385-.385.978-.498 1.478-.28l1.076.471 2.319-2.5-4.322-2.287c-.39-.232-.621-.59-.672-1s.087-.813.379-1.106c.296-.297.718-.423 1.124-.33l6.519 1.381 2.306-2.449c.311-.336.824-.532 1.405-.541.584-.018 1.149.181 1.489.521.339.339.529.882.52 1.489-.009.581-.205 1.094-.538 1.408l-2.456 2.314 1.499 6.594c.095.406-.031.846-.329 1.141-.286.288-.688.427-1.095.381-.409-.048-.767-.275-.983-.626l-2.42-4.473-2.494 2.318.47 1.077c.222.506.112 1.086-.279 1.478-.244.243-.571.378-.912.378zm6.579-1.341c.001.001.001.002.001.003zm-3.321-5.512c.062 0 .122.004.184.012.397.055.745.282.955.624l1.853 3.424-1.188-5.229c-.109-.457.038-.949.388-1.276l2.516-2.37c.103-.14.095-.622-.012-.756-.124-.098-.613-.106-.747-.002l-2.36 2.508c-.317.34-.798.491-1.258.391l-5.179-1.097 3.3 1.746c.384.231.613.58.669.979s-.069.797-.343 1.092l-2.828 3.048c-.218.233-.56.305-.851.178l-.001-.001.303.224c.14.104.258.223.354.355l.108.147c-.107-.283-.033-.605.19-.814l3.042-2.827c.249-.231.572-.356.905-.356zm3.217-1.352c0 .001 0 .001 0 0zm.046-.157.001.004c-.001-.001-.001-.002-.001-.004zm-9.54-2.565c.001.001.002.001.003.001zm11.503-.201h.01z" />
      <path d="m11.25 24h-7.5c-1.517 0-2.75-1.233-2.75-2.75v-15.5c0-1.517 1.233-2.75 2.75-2.75h4.35c.414 0 .75.336.75.75s-.336.75-.75.75h-4.35c-.689 0-1.25.561-1.25 1.25v15.5c0 .689.561 1.25 1.25 1.25h7.5c.689 0 1.25-.561 1.25-1.25v-5.21c0-.414.336-.75.75-.75s.75.336.75.75v5.21c0 1.517-1.233 2.75-2.75 2.75z" />
      <path d="m8.75 6.5h-2.5c-.965 0-1.75-.785-1.75-1.75 0-.136-.114-.25-.25-.25h-.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h.5c.965 0 1.75.785 1.75 1.75 0 .136.114.25.25.25h2.5c.049 0 .086-.01.123-.032.357-.216.816-.098 1.029.256.214.355.099.816-.256 1.029-.272.164-.574.247-.896.247z" />
    </svg>
  );
}
