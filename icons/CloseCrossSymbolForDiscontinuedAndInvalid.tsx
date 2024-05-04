export function CloseCrossSymbolForDiscontinuedAndInvalid({
  size = 24,
}: {
  size?: number;
}): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      version="1.1"
      id="regular"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 24 24"
      enable-background="new 0 0 24 24"
      xmlSpace="preserve"
    >
      <g>
        <path
          d="M5.459,19.291c-0.192,0-0.384-0.073-0.53-0.22c-0.293-0.293-0.293-0.768,0-1.061L18.01,4.929
		c0.293-0.293,0.768-0.293,1.061,0s0.293,0.768,0,1.061L5.99,19.071C5.843,19.217,5.651,19.291,5.459,19.291z"
        />
      </g>
      <g>
        <path
          d="M18.541,19.291c-0.192,0-0.384-0.073-0.53-0.22L4.929,5.99c-0.293-0.293-0.293-0.768,0-1.061s0.768-0.293,1.061,0
		L19.071,18.01c0.293,0.293,0.293,0.768,0,1.061C18.924,19.217,18.732,19.291,18.541,19.291z"
        />
      </g>
    </svg>
  );
}
