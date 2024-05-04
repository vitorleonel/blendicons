export function FloatingShelfUsedToDisplayItems({
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
        <path d="M9.25,9c0,-0.41421 0.33579,-0.75 0.75,-0.75h4c0.4142,0 0.75,0.33579 0.75,0.75v4c0,0.4142 -0.3358,0.75 -0.75,0.75h-4c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-4Zm1.5,0.75v2.5h2.5v-2.5h-2.5Z"></path>
        <path d="M9.25,6c0,-0.41421 0.33579,-0.75 0.75,-0.75h0.5c1.2426,0 2.25,1.00736 2.25,2.25v1.5c0,0.41421 -0.3358,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.33579 -0.75,-0.75v-1.5c0,-0.41421 -0.3358,-0.75 -0.75,-0.75h-0.5c-0.41421,0 -0.75,-0.33579 -0.75,-0.75Z"></path>
        <path d="M14.75,4.5c0,-0.41421 -0.3358,-0.75 -0.75,-0.75h-0.5c-1.2426,0 -2.25,1.00736 -2.25,2.25v3c0,0.41421 0.3358,0.75 0.75,0.75c0.4142,0 0.75,-0.33579 0.75,-0.75v-3c0,-0.41421 0.3358,-0.75 0.75,-0.75h0.5c0.4142,0 0.75,-0.33579 0.75,-0.75Z"></path>
        <path d="M1.25,13c0,-0.4142 0.33579,-0.75 0.75,-0.75h20c0.4142,0 0.75,0.3358 0.75,0.75v3c0,0.4142 -0.3358,0.75 -0.75,0.75h-20c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-3Zm1.5,0.75v1.5h18.5v-1.5h-18.5Z"></path>
        <path d="M2.40885,15.5384c0.14213,-0.182 0.36021,-0.2884 0.59116,-0.2884h18c0.231,0 0.449,0.1064 0.5912,0.2884c0.1421,0.1821 0.1924,0.4194 0.1364,0.6435l-1,4c-0.0835,0.3339 -0.3834,0.5681 -0.7276,0.5681h-16c-0.34415,0 -0.64414,-0.2342 -0.72761,-0.5681l-1,-4c-0.05601,-0.2241 -0.00568,-0.4614 0.13645,-0.6435Zm1.55174,1.2116l0.625,2.5h14.8288l0.625,-2.5h-16.0788Z"></path>
      </g>
    </svg>
  );
}
