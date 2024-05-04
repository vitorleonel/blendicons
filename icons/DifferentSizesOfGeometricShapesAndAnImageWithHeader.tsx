export function DifferentSizesOfGeometricShapesAndAnImageWithHeader({
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
      xmlSpace="preserve"
    >
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
        <g>
          <path
            d="M22.25,24h-7.5C13.785,24,13,23.215,13,22.25V9.75C13,8.785,13.785,8,14.75,8h7.5C23.215,8,24,8.785,24,9.75v12.5
			C24,23.215,23.215,24,22.25,24z M14.75,9.5c-0.138,0-0.25,0.112-0.25,0.25v12.5c0,0.138,0.112,0.25,0.25,0.25h7.5
			c0.138,0,0.25-0.112,0.25-0.25V9.75c0-0.138-0.112-0.25-0.25-0.25H14.75z"
          />
        </g>
        <g>
          <path
            d="M13.75,19.75c-0.192,0-0.384-0.073-0.53-0.22c-0.293-0.293-0.293-0.768,0-1.061l2.04-2.04c0.685-0.684,1.797-0.683,2.48,0
			l0.521,0.521c0.062,0.062,0.14,0.067,0.18,0.068c0.042-0.002,0.123-0.017,0.187-0.093l1.025-1.235
			c0.669-0.801,2.026-0.8,2.693-0.001l1.48,1.781c0.265,0.318,0.221,0.791-0.097,1.057c-0.319,0.264-0.791,0.222-1.056-0.098
			l-1.48-1.78c-0.129-0.154-0.257-0.155-0.387,0.001l-1.029,1.239c-0.321,0.38-0.784,0.606-1.273,0.627
			c-0.492,0.039-0.961-0.163-1.304-0.505l-0.521-0.521c-0.097-0.098-0.262-0.098-0.359,0l-2.04,2.04
			C14.134,19.677,13.942,19.75,13.75,19.75z"
          />
        </g>
      </g>
      <g>
        <path
          d="M22.25,6H1.75C0.785,6,0,5.215,0,4.25v-2.5C0,0.785,0.785,0,1.75,0h20.5C23.215,0,24,0.785,24,1.75v2.5
		C24,5.215,23.215,6,22.25,6z M1.75,1.5C1.612,1.5,1.5,1.612,1.5,1.75v2.5c0,0.138,0.112,0.25,0.25,0.25h20.5
		c0.138,0,0.25-0.112,0.25-0.25v-2.5c0-0.138-0.112-0.25-0.25-0.25H1.75z"
        />
      </g>
    </svg>
  );
}
