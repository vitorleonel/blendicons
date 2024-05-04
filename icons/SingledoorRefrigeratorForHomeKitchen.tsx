export function SingledoorRefrigeratorForHomeKitchen({
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
          d="M5.25,3.43457c0,-1.51878 1.23122,-2.75 2.75,-2.75h8c1.5188,1.11022e-16 2.75,1.23122 2.75,2.75v19c0,0.4142 -0.3358,0.75 -0.75,0.75h-12c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-19Zm2.75,-1.25c-0.69036,0 -1.25,0.55964 -1.25,1.25v18.25h10.5v-18.25c0,-0.69036 -0.5596,-1.25 -1.25,-1.25h-8Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M7.5,21.6846c0.41421,0 0.75,0.3358 0.75,0.75v1c0,0.4142 -0.33579,0.75 -0.75,0.75c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-1c0,-0.4142 0.33579,-0.75 0.75,-0.75Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M16.5,21.6846c0.4142,0 0.75,0.3358 0.75,0.75v1c0,0.4142 -0.3358,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.3358 -0.75,-0.75v-1c0,-0.4142 0.3358,-0.75 0.75,-0.75Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M9,3.68457c0.41421,0 0.75,0.33579 0.75,0.75v10c0,0.4142 -0.33579,0.75 -0.75,0.75c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-10c0,-0.41421 0.33579,-0.75 0.75,-0.75Z"
        ></path>
      </g>
    </svg>
  );
}
