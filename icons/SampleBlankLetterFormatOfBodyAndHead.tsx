export function SampleBlankLetterFormatOfBodyAndHead({
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
          d="M22.25,6H1.75C0.785,6,0,5.215,0,4.25v-2.5C0,0.785,0.785,0,1.75,0h20.5C23.215,0,24,0.785,24,1.75v2.5
		C24,5.215,23.215,6,22.25,6z M1.75,1.5C1.612,1.5,1.5,1.612,1.5,1.75v2.5c0,0.138,0.112,0.25,0.25,0.25h20.5
		c0.138,0,0.25-0.112,0.25-0.25v-2.5c0-0.138-0.112-0.25-0.25-0.25H1.75z"
        />
      </g>
      <g>
        <path
          d="M22.25,24H1.75C0.785,24,0,23.215,0,22.25V9.75C0,8.785,0.785,8,1.75,8h20.5C23.215,8,24,8.785,24,9.75v12.5
		C24,23.215,23.215,24,22.25,24z M1.75,9.5C1.612,9.5,1.5,9.612,1.5,9.75v12.5c0,0.138,0.112,0.25,0.25,0.25h20.5
		c0.138,0,0.25-0.112,0.25-0.25V9.75c0-0.138-0.112-0.25-0.25-0.25H1.75z"
        />
      </g>
    </svg>
  );
}
