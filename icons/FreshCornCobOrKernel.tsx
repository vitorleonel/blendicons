export function FreshCornCobOrKernel({
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
            transform="matrix(1,0,0,1,0,0.5)"
          ></path>
        </mask>
      </defs>
      <g mask="url(#a)">
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M5.71299,8.80711c0.28025,-0.11608 0.60284,-0.05192 0.81734,0.16258l4.53557,4.53551c1.0783,1.0784 1.6841,2.5409 1.6841,4.0659v5.9289c0,0.4142 -0.3358,0.75 -0.75,0.75h-1c-3.17564,0 -5.75,-2.5743 -5.75,-5.75v-8.99998c0,-0.30334 0.18273,-0.57682 0.46299,-0.69291Zm1.03701,2.50359v7.1893c0,2.3472 1.90279,4.25 4.25,4.25h0.25v-5.1789c0,-1.1272 -0.4478,-2.2082 -1.2448,-3.0052l-3.2552,-3.2552Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M18.287,8.80711c-0.2802,-0.11608 -0.6028,-0.05192 -0.8173,0.16258l-4.5356,4.53551c-1.0783,1.0784 -1.6841,2.5409 -1.6841,4.0659v5.9289c0,0.4142 0.3358,0.75 0.75,0.75h1c3.1756,0 5.75,-2.5743 5.75,-5.75v-8.99998c0,-0.30334 -0.1827,-0.57682 -0.463,-0.69291Zm-1.037,2.50359v7.1893c0,2.3472 -1.9028,4.25 -4.25,4.25h-0.25v-5.1789c0,-1.1272 0.4478,-2.2082 1.2448,-3.0052l3.2552,-3.2552Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M8.25,4.5c0,-2.07107 1.67893,-3.75 3.75,-3.75c2.0711,0 3.75,1.67893 3.75,3.75v7.5c0,0.4142 -0.3358,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.3358 -0.75,-0.75v-7.5c0,-1.24264 -1.0074,-2.25 -2.25,-2.25c-1.2426,0 -2.25,1.00736 -2.25,2.25v7.5c0,0.4142 -0.33579,0.75 -0.75,0.75c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-7.5Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M8.25,5.5c0,-0.41421 0.33579,-0.75 0.75,-0.75h2c0.4142,0 0.75,0.33579 0.75,0.75c0,0.41421 -0.3358,0.75 -0.75,0.75h-2c-0.41421,0 -0.75,-0.33579 -0.75,-0.75Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M12.25,7.5c0,-0.41421 0.3358,-0.75 0.75,-0.75h2c0.4142,0 0.75,0.33579 0.75,0.75c0,0.41421 -0.3358,0.75 -0.75,0.75h-2c-0.4142,0 -0.75,-0.33579 -0.75,-0.75Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M8.25,9.5c0,-0.41421 0.33579,-0.75 0.75,-0.75h2c0.4142,0 0.75,0.33579 0.75,0.75c0,0.41421 -0.3358,0.75 -0.75,0.75h-2c-0.41421,0 -0.75,-0.33579 -0.75,-0.75Z"
        ></path>
      </g>
    </svg>
  );
}
