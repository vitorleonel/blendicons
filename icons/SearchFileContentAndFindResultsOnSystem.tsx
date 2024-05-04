export function SearchFileContentAndFindResultsOnSystem({
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
          d="M9.5,19C4.262,19,0,14.738,0,9.5S4.262,0,9.5,0S19,4.262,19,9.5S14.738,19,9.5,19z M9.5,1.5c-4.411,0-8,3.589-8,8
		s3.589,8,8,8s8-3.589,8-8S13.911,1.5,9.5,1.5z"
        />
      </g>
      <g>
        <path
          d="M23.25,24c-0.192,0-0.384-0.073-0.53-0.22l-7.56-7.56c-0.293-0.293-0.293-0.768,0-1.061s0.768-0.293,1.061,0l7.56,7.56
		c0.293,0.293,0.293,0.768,0,1.061C23.634,23.927,23.442,24,23.25,24z"
        />
      </g>
    </svg>
  );
}
