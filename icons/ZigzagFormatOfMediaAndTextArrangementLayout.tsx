export function ZigzagFormatOfMediaAndTextArrangementLayout({
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
      style="enable-background:new 0 0 24 24;"
      xmlSpace="preserve"
    >
      <g>
        <path
          d="M7.25,6h-5.5C0.785,6,0,5.215,0,4.25v-2.5C0,0.785,0.785,0,1.75,0h5.5C8.215,0,9,0.785,9,1.75v2.5C9,5.215,8.215,6,7.25,6z
		 M1.75,1.5C1.612,1.5,1.5,1.612,1.5,1.75v2.5c0,0.138,0.112,0.25,0.25,0.25h5.5c0.138,0,0.25-0.112,0.25-0.25v-2.5
		c0-0.138-0.112-0.25-0.25-0.25H1.75z"
        />
      </g>
      <g>
        <path
          d="M7.25,24h-5.5C0.785,24,0,23.215,0,22.25v-2.5C0,18.785,0.785,18,1.75,18h5.5C8.215,18,9,18.785,9,19.75v2.5
		C9,23.215,8.215,24,7.25,24z M1.75,19.5c-0.138,0-0.25,0.112-0.25,0.25v2.5c0,0.138,0.112,0.25,0.25,0.25h5.5
		c0.138,0,0.25-0.112,0.25-0.25v-2.5c0-0.138-0.112-0.25-0.25-0.25H1.75z"
        />
      </g>
      <g>
        <path d="M23.25,2h-11.5C11.336,2,11,1.664,11,1.25s0.336-0.75,0.75-0.75h11.5C23.664,0.5,24,0.836,24,1.25S23.664,2,23.25,2z" />
      </g>
      <g>
        <path d="M23.25,5h-11.5C11.336,5,11,4.664,11,4.25s0.336-0.75,0.75-0.75h11.5C23.664,3.5,24,3.836,24,4.25S23.664,5,23.25,5z" />
      </g>
      <g>
        <path
          d="M23.25,20h-11.5C11.336,20,11,19.664,11,19.25s0.336-0.75,0.75-0.75h11.5c0.414,0,0.75,0.336,0.75,0.75S23.664,20,23.25,20
		z"
        />
      </g>
      <g>
        <path
          d="M23.25,23h-11.5C11.336,23,11,22.664,11,22.25s0.336-0.75,0.75-0.75h11.5c0.414,0,0.75,0.336,0.75,0.75S23.664,23,23.25,23
		z"
        />
      </g>
      <g>
        <path
          d="M22.5,15h-5.75C15.785,15,15,14.215,15,13.25v-2.5C15,9.785,15.785,9,16.75,9h5.75c0.692,0,1.5,0.458,1.5,1.75v2.5
		C24,14.542,23.192,15,22.5,15z M22.455,10.454L16.75,10.5c-0.138,0-0.25,0.112-0.25,0.25v2.5c0,0.138,0.112,0.25,0.25,0.25h5.748
		c-0.019-0.018,0.002-0.106,0.002-0.25v-2.5C22.5,10.566,22.467,10.474,22.455,10.454z"
        />
      </g>
      <g>
        <path d="M12.25,11H0.75C0.336,11,0,10.664,0,10.25S0.336,9.5,0.75,9.5h11.5c0.414,0,0.75,0.336,0.75,0.75S12.664,11,12.25,11z" />
      </g>
      <g>
        <path d="M12.25,14H0.75C0.336,14,0,13.664,0,13.25s0.336-0.75,0.75-0.75h11.5c0.414,0,0.75,0.336,0.75,0.75S12.664,14,12.25,14z" />
      </g>
    </svg>
  );
}
