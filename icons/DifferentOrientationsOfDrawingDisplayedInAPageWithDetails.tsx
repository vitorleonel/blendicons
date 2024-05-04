export function DifferentOrientationsOfDrawingDisplayedInAPageWithDetails({
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
          d="M9.25,15h-7.5C0.785,15,0,14.215,0,13.25V1.75C0,0.785,0.785,0,1.75,0h7.5C10.215,0,11,0.785,11,1.75v11.5
		C11,14.215,10.215,15,9.25,15z M1.75,1.5C1.612,1.5,1.5,1.612,1.5,1.75v11.5c0,0.138,0.112,0.25,0.25,0.25h7.5
		c0.138,0,0.25-0.112,0.25-0.25V1.75c0-0.138-0.112-0.25-0.25-0.25H1.75z"
        />
      </g>
      <g>
        <path
          d="M22.25,15h-7.5C13.785,15,13,14.215,13,13.25V1.75C13,0.785,13.785,0,14.75,0h7.5C23.215,0,24,0.785,24,1.75v11.5
		C24,14.215,23.215,15,22.25,15z M14.75,1.5c-0.138,0-0.25,0.112-0.25,0.25v11.5c0,0.138,0.112,0.25,0.25,0.25h7.5
		c0.138,0,0.25-0.112,0.25-0.25V1.75c0-0.138-0.112-0.25-0.25-0.25H14.75z"
        />
      </g>
      <g>
        <path d="M23.25,18H0.75C0.336,18,0,17.664,0,17.25s0.336-0.75,0.75-0.75h22.5c0.414,0,0.75,0.336,0.75,0.75S23.664,18,23.25,18z" />
      </g>
      <g>
        <path d="M23.25,21H0.75C0.336,21,0,20.664,0,20.25s0.336-0.75,0.75-0.75h22.5c0.414,0,0.75,0.336,0.75,0.75S23.664,21,23.25,21z" />
      </g>
      <g>
        <path d="M23.25,24H0.75C0.336,24,0,23.664,0,23.25s0.336-0.75,0.75-0.75h22.5c0.414,0,0.75,0.336,0.75,0.75S23.664,24,23.25,24z" />
      </g>
    </svg>
  );
}
