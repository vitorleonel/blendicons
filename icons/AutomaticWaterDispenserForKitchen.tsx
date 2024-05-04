export function AutomaticWaterDispenserForKitchen({
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
      <defs>
        <mask
          id="a"
          maskContentUnits="userSpaceOnUse"
          maskUnits="objectBoundingBox"
        >
          <path
            fill="#FFF"
            d="M0,0h24v24h-24Z"
            transform="matrix(1,0,0,1,0,0.43457)"
          ></path>
        </mask>
      </defs>
      <g mask="url(#a)">
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M7.25,1.43457c0,-0.41421 0.33579,-0.75 0.75,-0.75h8c0.4142,0 0.75,0.33579 0.75,0.75v22c0,0.4142 -0.3358,0.75 -0.75,0.75h-8c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-22Zm1.5,0.75v20.5h6.5v-20.5h-6.5Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M7.25,6.43457c0,-0.41421 0.33579,-0.75 0.75,-0.75h8c0.4142,0 0.75,0.33579 0.75,0.75v8.00003c0,0.4142 -0.3358,0.75 -0.75,0.75h-8c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-8.00003Zm1.5,0.75v6.50003h6.5v-6.50003h-6.5Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M7.25,6.43457c0,-0.41421 0.33579,-0.75 0.75,-0.75h8v0.75h0.75c0,1.79493 -1.4551,3.25 -3.25,3.25h-3c-1.79493,0 -3.25,-1.45507 -3.25,-3.25Zm1.66841,0.75c0.28086,0.59124 0.88349,1 1.58159,1h3c0.6981,0 1.3007,-0.40876 1.5816,-1h-6.16319Z"
        ></path>
      </g>
    </svg>
  );
}
