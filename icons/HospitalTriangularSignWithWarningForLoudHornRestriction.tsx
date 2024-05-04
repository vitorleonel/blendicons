export function HospitalTriangularSignWithWarningForLoudHornRestriction({
  size = 24,
}: {
  size?: number;
}): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      version="1.1"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g fill="#000" fill-rule="evenodd">
        <path d="M10.4491,1.848c0.6547,-1.25241 2.4471,-1.25241 3.1018,0l9.8489,18.8414c0.609,1.1651 -0.2362,2.5607 -1.5509,2.5607h-19.6978c-1.31473,0 -2.15995,-1.3956 -1.55089,-2.5607l9.84888,-18.8414Zm1.7725,0.69488c-0.0936,-0.17892 -0.3496,-0.17892 -0.4432,0l-9.84885,18.8413c-0.087,0.1665 0.03374,0.3659 0.22156,0.3659h19.6978c0.1878,0 0.3086,-0.1994 0.2215,-0.3659l-9.8488,-18.8413Z"></path>
        <path d="M12,9.25c0.4142,0 0.75,0.33579 0.75,0.75v10c0,0.4142 -0.3358,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.3358 -0.75,-0.75v-10c0,-0.41421 0.3358,-0.75 0.75,-0.75Z"></path>
        <path d="M17.75,15c0,0.4142 -0.3358,0.75 -0.75,0.75h-10c-0.41421,0 -0.75,-0.3358 -0.75,-0.75c0,-0.4142 0.33579,-0.75 0.75,-0.75h10c0.4142,0 0.75,0.3358 0.75,0.75Z"></path>
      </g>
    </svg>
  );
}
