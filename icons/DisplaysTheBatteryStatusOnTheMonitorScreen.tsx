export function DisplaysTheBatteryStatusOnTheMonitorScreen({
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
          d="M22.25,20H1.75C0.785,20,0,19.215,0,18.25V5.75C0,4.785,0.785,4,1.75,4h4.5C6.664,4,7,4.336,7,4.75S6.664,5.5,6.25,5.5
		h-4.5C1.612,5.5,1.5,5.612,1.5,5.75v12.5c0,0.138,0.112,0.25,0.25,0.25h20.5c0.138,0,0.25-0.112,0.25-0.25v-6.5
		c0-0.414,0.336-0.75,0.75-0.75S24,11.336,24,11.75v6.5C24,19.215,23.215,20,22.25,20z"
        />
      </g>
      <g>
        <path d="M16.25,24h-8.5C7.336,24,7,23.664,7,23.25s0.336-0.75,0.75-0.75h8.5c0.414,0,0.75,0.336,0.75,0.75S16.664,24,16.25,24z" />
      </g>
      <g>
        <path
          d="M12,24c-0.414,0-0.75-0.336-0.75-0.75v-4c0-0.414,0.336-0.75,0.75-0.75s0.75,0.336,0.75,0.75v4
		C12.75,23.664,12.414,24,12,24z"
        />
      </g>
      <g>
        <path
          d="M20.25,9h-9.5C9.785,9,9,8.215,9,7.25v-5.5C9,0.785,9.785,0,10.75,0h9.5C21.215,0,22,0.785,22,1.75V2h0.25
		C23.215,2,24,2.785,24,3.75v1.5C24,6.215,23.215,7,22.25,7H22v0.25C22,8.215,21.215,9,20.25,9z M10.75,1.5
		c-0.138,0-0.25,0.112-0.25,0.25v5.5c0,0.138,0.112,0.25,0.25,0.25h9.5c0.138,0,0.25-0.112,0.25-0.25v-1
		c0-0.414,0.336-0.75,0.75-0.75h1c0.138,0,0.25-0.112,0.25-0.25v-1.5c0-0.138-0.112-0.25-0.25-0.25h-1
		c-0.414,0-0.75-0.336-0.75-0.75v-1c0-0.138-0.112-0.25-0.25-0.25H10.75z"
        />
      </g>
      <g>
        <path
          d="M12.75,7C12.336,7,12,6.664,12,6.25v-3.5C12,2.336,12.336,2,12.75,2s0.75,0.336,0.75,0.75v3.5C13.5,6.664,13.164,7,12.75,7
		z"
        />
      </g>
      <g>
        <path
          d="M15.75,7C15.336,7,15,6.664,15,6.25v-3.5C15,2.336,15.336,2,15.75,2s0.75,0.336,0.75,0.75v3.5C16.5,6.664,16.164,7,15.75,7
		z"
        />
      </g>
    </svg>
  );
}
