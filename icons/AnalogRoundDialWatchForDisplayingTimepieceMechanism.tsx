export function AnalogRoundDialWatchForDisplayingTimepieceMechanism({
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
          d="M19.25,13.25H11.5c-0.414,0-0.75-0.336-0.75-0.75V4.75C10.75,4.336,11.086,4,11.5,4s0.75,0.336,0.75,0.75v7h7
		c0.414,0,0.75,0.336,0.75,0.75S19.664,13.25,19.25,13.25z"
        />
      </g>
      <g>
        <path
          d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12S18.617,24,12,24z M12,1.5C6.21,1.5,1.5,6.21,1.5,12
		S6.21,22.5,12,22.5S22.5,17.79,22.5,12S17.79,1.5,12,1.5z"
        />
      </g>
    </svg>
  );
}
