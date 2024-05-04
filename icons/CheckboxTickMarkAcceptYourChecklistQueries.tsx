export function CheckboxTickMarkAcceptYourChecklistQueries({
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
          d="M11.5,16c-0.192,0-0.384-0.073-0.53-0.22l-3.25-3.25c-0.293-0.293-0.293-0.768,0-1.061s0.768-0.293,1.061,0l2.72,2.72
		l4.97-4.97c0.293-0.293,0.768-0.293,1.061,0s0.293,0.768,0,1.061l-5.5,5.5C11.884,15.927,11.692,16,11.5,16z"
        />
      </g>
      <g>
        <path
          d="M21.25,24H2.75C1.233,24,0,22.767,0,21.25V2.75C0,1.233,1.233,0,2.75,0h18.5C22.767,0,24,1.233,24,2.75v18.5
		C24,22.767,22.767,24,21.25,24z M2.75,1.5C2.061,1.5,1.5,2.061,1.5,2.75v18.5c0,0.689,0.561,1.25,1.25,1.25h18.5
		c0.689,0,1.25-0.561,1.25-1.25V2.75c0-0.689-0.561-1.25-1.25-1.25H2.75z"
        />
      </g>
    </svg>
  );
}
