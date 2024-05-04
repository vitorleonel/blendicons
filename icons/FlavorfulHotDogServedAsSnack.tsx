export function FlavorfulHotDogServedAsSnack({
  size = 24,
}: {
  size?: number;
}): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      version="1.1"
      viewBox="0 0 24 25"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g fill="#000" fill-rule="evenodd">
        <path d="M0.25,12.5c0,-1.5188 1.23122,-2.75 2.75,-2.75h18c1.5188,0 2.75,1.2312 2.75,2.75c0,1.5188 -1.2312,2.75 -2.75,2.75h-18c-1.51878,0 -2.75,-1.2312 -2.75,-2.75Zm2.75,-1.25c-0.69036,0 -1.25,0.5596 -1.25,1.25c0,0.6904 0.55964,1.25 1.25,1.25h18c0.6904,0 1.25,-0.5596 1.25,-1.25c0,-0.6904 -0.5596,-1.25 -1.25,-1.25h-18Z"></path>
        <path d="M2.25,14.5c0,-0.4142 0.33579,-0.75 0.75,-0.75h18c0.4142,0 0.75,0.3358 0.75,0.75v1c0,2.0711 -1.6789,3.75 -3.75,3.75h-12c-2.07107,0 -3.75,-1.6789 -3.75,-3.75v-1Zm1.5,0.75v0.25c0,1.2426 1.00736,2.25 2.25,2.25h12c1.2426,0 2.25,-1.0074 2.25,-2.25v-0.25h-16.5Z"></path>
        <path d="M2.25,10.5c0,0.4142 0.33579,0.75 0.75,0.75h18c0.4142,0 0.75,-0.3358 0.75,-0.75v-1c0,-2.07107 -1.6789,-3.75 -3.75,-3.75h-12c-2.07107,0 -3.75,1.67893 -3.75,3.75v1Zm1.5,-0.75v-0.25c0,-1.24264 1.00736,-2.25 2.25,-2.25h12c1.2426,0 2.25,1.00736 2.25,2.25v0.25h-16.5Z"></path>
      </g>
    </svg>
  );
}
