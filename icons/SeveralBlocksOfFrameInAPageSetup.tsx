export function SeveralBlocksOfFrameInAPageSetup({
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
          d="M22.25,6H1.75C0.785,6,0,5.215,0,4.25v-2.5C0,0.785,0.785,0,1.75,0h20.5C23.215,0,24,0.785,24,1.75v2.5
		C24,5.215,23.215,6,22.25,6z M1.75,1.5C1.612,1.5,1.5,1.612,1.5,1.75v2.5c0,0.138,0.112,0.25,0.25,0.25h20.5
		c0.138,0,0.25-0.112,0.25-0.25v-2.5c0-0.138-0.112-0.25-0.25-0.25H1.75z"
        />
      </g>
      <g>
        <path
          d="M9.25,15h-7.5C0.785,15,0,14.215,0,13.25v-3.5C0,8.785,0.785,8,1.75,8h7.5C10.215,8,11,8.785,11,9.75v3.5
		C11,14.215,10.215,15,9.25,15z M1.75,9.5C1.612,9.5,1.5,9.612,1.5,9.75v3.5c0,0.138,0.112,0.25,0.25,0.25h7.5
		c0.138,0,0.25-0.112,0.25-0.25v-3.5c0-0.138-0.112-0.25-0.25-0.25H1.75z"
        />
      </g>
      <g>
        <path
          d="M9.25,24h-7.5C0.785,24,0,23.215,0,22.25v-3.5C0,17.785,0.785,17,1.75,17h7.5c0.965,0,1.75,0.785,1.75,1.75v3.5
		C11,23.215,10.215,24,9.25,24z M1.75,18.5c-0.138,0-0.25,0.112-0.25,0.25v3.5c0,0.138,0.112,0.25,0.25,0.25h7.5
		c0.138,0,0.25-0.112,0.25-0.25v-3.5c0-0.138-0.112-0.25-0.25-0.25H1.75z"
        />
      </g>
      <g>
        <path
          d="M22.25,15h-7.5C13.785,15,13,14.215,13,13.25v-3.5C13,8.785,13.785,8,14.75,8h7.5C23.215,8,24,8.785,24,9.75v3.5
		C24,14.215,23.215,15,22.25,15z M14.75,9.5c-0.138,0-0.25,0.112-0.25,0.25v3.5c0,0.138,0.112,0.25,0.25,0.25h7.5
		c0.138,0,0.25-0.112,0.25-0.25v-3.5c0-0.138-0.112-0.25-0.25-0.25H14.75z"
        />
      </g>
      <g>
        <path
          d="M22.25,24h-7.5C13.785,24,13,23.215,13,22.25v-3.5c0-0.965,0.785-1.75,1.75-1.75h7.5c0.965,0,1.75,0.785,1.75,1.75v3.5
		C24,23.215,23.215,24,22.25,24z M14.75,18.5c-0.138,0-0.25,0.112-0.25,0.25v3.5c0,0.138,0.112,0.25,0.25,0.25h7.5
		c0.138,0,0.25-0.112,0.25-0.25v-3.5c0-0.138-0.112-0.25-0.25-0.25H14.75z"
        />
      </g>
    </svg>
  );
}
