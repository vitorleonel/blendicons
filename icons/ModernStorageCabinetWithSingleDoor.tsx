export function ModernStorageCabinetWithSingleDoor({
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
          d="M7.25,1.43457c0,-0.41421 0.33579,-0.75 0.75,-0.75h8c0.4142,0 0.75,0.33579 0.75,0.75v20c0,0.4142 -0.3358,0.75 -0.75,0.75h-8c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-20Zm1.5,0.75v18.5h6.5v-18.5h-6.5Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M8,17.6846c0.41421,0 0.75,0.3358 0.75,0.75v5c0,0.4142 -0.33579,0.75 -0.75,0.75c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-5c0,-0.4142 0.33579,-0.75 0.75,-0.75Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M10.5,8.18457c0.4142,0 0.75,0.33579 0.75,0.75v2.00003c0,0.4142 -0.3358,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.3358 -0.75,-0.75v-2.00003c0,-0.41421 0.3358,-0.75 0.75,-0.75Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M16,17.6846c0.4142,0 0.75,0.3358 0.75,0.75v5c0,0.4142 -0.3358,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.3358 -0.75,-0.75v-5c0,-0.4142 0.3358,-0.75 0.75,-0.75Z"
        ></path>
      </g>
    </svg>
  );
}
