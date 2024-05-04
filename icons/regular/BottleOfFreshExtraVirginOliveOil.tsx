/**
 * Original name: Bottle of fresh extra virgin olive oil. Icon Free Download
 */
export function BottleOfFreshExtraVirginOliveOil({
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
          d="M9.25,1.5c0,-0.41421 0.33579,-0.75 0.75,-0.75h4c0.4142,0 0.75,0.33579 0.75,0.75v4.25h2.25c0.4142,0 0.75,0.33579 0.75,0.75v16c0,0.9665 -0.7835,1.75 -1.75,1.75h-8c-0.9665,0 -1.75,-0.7835 -1.75,-1.75v-16c0,-0.41421 0.33579,-0.75 0.75,-0.75h2.25v-4.25Zm1.5,0.75v4.25c0,0.41421 -0.3358,0.75 -0.75,0.75h-2.25v15.25c0,0.1381 0.11193,0.25 0.25,0.25h8c0.1381,0 0.25,-0.1119 0.25,-0.25v-15.25h-2.25c-0.4142,0 -0.75,-0.33579 -0.75,-0.75v-4.25h-2.5Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M9.25,10.5c0,-0.4142 0.33579,-0.75 0.75,-0.75h4c0.4142,0 0.75,0.3358 0.75,0.75v9c0,0.4142 -0.3358,0.75 -0.75,0.75h-4c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-9Zm1.5,0.75v7.5h2.5v-7.5h-2.5Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M8.25,1.5c0,-0.41421 0.33579,-0.75 0.75,-0.75h6c0.4142,0 0.75,0.33579 0.75,0.75c0,0.41421 -0.3358,0.75 -0.75,0.75h-6c-0.41421,0 -0.75,-0.33579 -0.75,-0.75Z"
        ></path>
      </g>
    </svg>
  );
}
