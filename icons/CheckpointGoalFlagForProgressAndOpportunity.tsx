export function CheckpointGoalFlagForProgressAndOpportunity({
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
        <path d="M3.75,24C3.336,24,3,23.664,3,23.25V0.75C3,0.336,3.336,0,3.75,0S4.5,0.336,4.5,0.75v22.5C4.5,23.664,4.164,24,3.75,24z" />
      </g>
      <g>
        <path
          d="M20,13H3.75C3.336,13,3,12.664,3,12.25s0.336-0.75,0.75-0.75h15.497L14.43,7.88c-0.437-0.342-0.68-0.842-0.68-1.38
		s0.243-1.038,0.667-1.37l4.83-3.63H3.75C3.336,1.5,3,1.164,3,0.75S3.336,0,3.75,0H20c0.689,0,1.25,0.561,1.25,1.25
		c0,0.395-0.179,0.755-0.489,0.99l-5.431,4.08c-0.021,0.018-0.08,0.079-0.08,0.181s0.059,0.163,0.093,0.19l5.417,4.07
		c0.312,0.234,0.49,0.595,0.49,0.99C21.25,12.439,20.689,13,20,13z M20,1.5h0.01H20z"
        />
      </g>
    </svg>
  );
}
