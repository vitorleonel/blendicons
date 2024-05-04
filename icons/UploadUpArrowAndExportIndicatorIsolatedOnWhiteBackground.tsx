export function UploadUpArrowAndExportIndicatorIsolatedOnWhiteBackground({
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
          d="M12,19c-0.414,0-0.75-0.336-0.75-0.75V5.75C11.25,5.336,11.586,5,12,5s0.75,0.336,0.75,0.75v12.5
		C12.75,18.664,12.414,19,12,19z"
        />
      </g>
      <g>
        <path
          d="M16,10.5c-0.192,0-0.384-0.073-0.53-0.22L12,6.811l-3.47,3.47c-0.293,0.293-0.768,0.293-1.061,0s-0.293-0.768,0-1.061l4-4
		c0.293-0.293,0.768-0.293,1.061,0l4,4c0.293,0.293,0.293,0.768,0,1.061C16.384,10.427,16.192,10.5,16,10.5z"
        />
      </g>
    </svg>
  );
}
