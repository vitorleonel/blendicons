export function SearchBarTemplateIsolatedOnWhiteBackground({
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
          d="M11,14c-1.654,0-3-1.346-3-3s1.346-3,3-3s3,1.346,3,3S12.654,14,11,14z M11,9.5c-0.827,0-1.5,0.673-1.5,1.5
		s0.673,1.5,1.5,1.5s1.5-0.673,1.5-1.5S11.827,9.5,11,9.5z"
        />
      </g>
      <g>
        <path
          d="M14.25,15c-0.192,0-0.384-0.073-0.53-0.22l-1.5-1.5c-0.293-0.293-0.293-0.768,0-1.061s0.768-0.293,1.061,0l1.5,1.5
		c0.293,0.293,0.293,0.768,0,1.061C14.634,14.927,14.442,15,14.25,15z"
        />
      </g>
      <g>
        <path
          d="M22.25,24H1.75C0.785,24,0,23.215,0,22.25V1.75C0,0.785,0.785,0,1.75,0h20.5C23.215,0,24,0.785,24,1.75v20.5
		C24,23.215,23.215,24,22.25,24z M1.75,1.5C1.612,1.5,1.5,1.612,1.5,1.75v20.5c0,0.138,0.112,0.25,0.25,0.25h20.5
		c0.138,0,0.25-0.112,0.25-0.25V1.75c0-0.138-0.112-0.25-0.25-0.25H1.75z"
        />
      </g>
      <g>
        <path
          d="M19.25,18H4.75C3.785,18,3,17.215,3,16.25v-9.5C3,5.785,3.785,5,4.75,5h14.5C20.215,5,21,5.785,21,6.75v9.5
		C21,17.215,20.215,18,19.25,18z M4.75,6.5C4.612,6.5,4.5,6.612,4.5,6.75v9.5c0,0.138,0.112,0.25,0.25,0.25h14.5
		c0.138,0,0.25-0.112,0.25-0.25v-9.5c0-0.138-0.112-0.25-0.25-0.25H4.75z"
        />
      </g>
    </svg>
  );
}
