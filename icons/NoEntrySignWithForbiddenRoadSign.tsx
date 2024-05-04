export function NoEntrySignWithForbiddenRoadSign({
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
          d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12S18.617,24,12,24z M12,1.5C6.21,1.5,1.5,6.21,1.5,12
		S6.21,22.5,12,22.5S22.5,17.79,22.5,12S17.79,1.5,12,1.5z"
        />
      </g>
      <g>
        <path
          d="M17.25,12.75H6.75C6.336,12.75,6,12.414,6,12s0.336-0.75,0.75-0.75h10.5c0.414,0,0.75,0.336,0.75,0.75
		S17.664,12.75,17.25,12.75z"
        />
      </g>
    </svg>
  );
}
