export function RectangularSquareBuildingBlocksDimensionIsolatedOnAWhiteBackground({
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
          d="M22.25,11H1.75C0.785,11,0,10.215,0,9.25v-7.5C0,0.785,0.785,0,1.75,0h20.5C23.215,0,24,0.785,24,1.75v7.5
		C24,10.215,23.215,11,22.25,11z M1.75,1.5C1.612,1.5,1.5,1.612,1.5,1.75v7.5c0,0.138,0.112,0.25,0.25,0.25h20.5
		c0.138,0,0.25-0.112,0.25-0.25v-7.5c0-0.138-0.112-0.25-0.25-0.25H1.75z"
        />
      </g>
      <g>
        <path
          d="M22.25,24H1.75C0.785,24,0,23.215,0,22.25v-7.5C0,13.785,0.785,13,1.75,13h20.5c0.965,0,1.75,0.785,1.75,1.75v7.5
		C24,23.215,23.215,24,22.25,24z M1.75,14.5c-0.138,0-0.25,0.112-0.25,0.25v7.5c0,0.138,0.112,0.25,0.25,0.25h20.5
		c0.138,0,0.25-0.112,0.25-0.25v-7.5c0-0.138-0.112-0.25-0.25-0.25H1.75z"
        />
      </g>
    </svg>
  );
}
