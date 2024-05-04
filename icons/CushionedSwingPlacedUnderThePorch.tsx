export function CushionedSwingPlacedUnderThePorch({
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
        <path d="M0.75,4.25c0,-0.41421 0.33579,-0.75 0.75,-0.75h21c0.4142,0 0.75,0.33579 0.75,0.75v15.5c0,0.4142 -0.3358,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.3358 -0.75,-0.75v-14.75h-19.5v14.75c0,0.4142 -0.33579,0.75 -0.75,0.75c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-15.5Z"></path>
        <path d="M4.75,4.25c0,-0.41421 0.33579,-0.75 0.75,-0.75h13c0.4142,0 0.75,0.33579 0.75,0.75v9c0,0.4142 -0.3358,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.3358 -0.75,-0.75v-8.25h-11.5v8.25c0,0.4142 -0.33579,0.75 -0.75,0.75c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-9Z"></path>
        <path d="M4.80365,12.9715c0.11389,-0.2848 0.38968,-0.4715 0.69635,-0.4715h13c0.3067,0 0.5825,0.1867 0.6964,0.4715l1,2.5c0.0924,0.231 0.0642,0.4929 -0.0753,0.699c-0.1396,0.2061 -0.3722,0.3295 -0.6211,0.3295h-15c-0.24886,0 -0.48152,-0.1234 -0.62105,-0.3295c-0.13952,-0.2061 -0.16773,-0.468 -0.0753,-0.699l1,-2.5Zm1.20413,1.0285l-0.4,1h12.7844l-0.4,-1h-11.9844Z"></path>
        <path d="M4.75,13.25c0,-2.3472 1.90279,-4.25 4.25,-4.25h6c2.3472,0 4.25,1.9028 4.25,4.25h-0.75v0.75h-13v-0.75h-0.75Zm1.60352,-0.75h11.293c-0.3265,-1.1543 -1.3877,-2 -2.6465,-2h-6c-1.25878,0 -2.32002,0.8457 -2.64648,2Z"></path>
      </g>
    </svg>
  );
}
