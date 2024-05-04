export function AlertNotificationWithExclamationMarkOnWebBrowser({
  size = 24,
}: {
  size?: number;
}): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      version="1.1"
      id="_x31__x2C_5"
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
          d="M12,16c-0.414,0-0.75-0.336-0.75-0.75v-5.5C11.25,9.336,11.586,9,12,9s0.75,0.336,0.75,0.75v5.5
		C12.75,15.664,12.414,16,12,16z"
        />
      </g>
      <g>
        <circle cx="12" cy="17.75" r="0.75" />
      </g>
      <g>
        <path
          d="M21.25,23H2.75C1.233,23,0,21.767,0,20.25V3.75C0,2.233,1.233,1,2.75,1h18.5C22.767,1,24,2.233,24,3.75v16.5
		C24,21.767,22.767,23,21.25,23z M2.75,2.5C2.061,2.5,1.5,3.061,1.5,3.75v16.5c0,0.689,0.561,1.25,1.25,1.25h18.5
		c0.689,0,1.25-0.561,1.25-1.25V3.75c0-0.689-0.561-1.25-1.25-1.25H2.75z"
        />
      </g>
      <g>
        <path d="M23.25,6H0.75C0.336,6,0,5.664,0,5.25S0.336,4.5,0.75,4.5h22.5C23.664,4.5,24,4.836,24,5.25S23.664,6,23.25,6z" />
      </g>
    </svg>
  );
}
