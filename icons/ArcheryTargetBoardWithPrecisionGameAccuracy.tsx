export function ArcheryTargetBoardWithPrecisionGameAccuracy({
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
          d="M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z M12,5.5c-3.584,0-6.5,2.916-6.5,6.5
		s2.916,6.5,6.5,6.5s6.5-2.916,6.5-6.5S15.584,5.5,12,5.5z"
        />
      </g>
      <g>
        <path
          d="M12,16c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S14.206,16,12,16z M12,9.5c-1.378,0-2.5,1.122-2.5,2.5
		s1.122,2.5,2.5,2.5s2.5-1.122,2.5-2.5S13.378,9.5,12,9.5z"
        />
      </g>
    </svg>
  );
}
