export function ToiletPaperStorageInASmallShelf({
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
          d="M6.25,1.43457c0,-0.41421 0.33579,-0.75 0.75,-0.75h10c0.4142,0 0.75,0.33579 0.75,0.75v22c0,0.4142 -0.3358,0.75 -0.75,0.75h-10c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-22Zm1.5,0.75v20.5h8.5v-20.5h-8.5Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M6.25,1.43457c0,-0.41421 0.33579,-0.75 0.75,-0.75h10c0.4142,0 0.75,0.33579 0.75,0.75v7c0,0.41421 -0.3358,0.75 -0.75,0.75h-10c-0.41421,0 -0.75,-0.33579 -0.75,-0.75v-7Zm1.5,0.75v5.5h8.5v-5.5h-8.5Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M8.75,17.9346c0,-0.4142 0.33579,-0.75 0.75,-0.75h5c0.4142,0 0.75,0.3358 0.75,0.75v5.5c0,0.4142 -0.3358,0.75 -0.75,0.75h-5c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-5.5Zm1.5,0.75v4h3.5v-4h-3.5Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M8.75,12.4346c0,-0.4142 0.33579,-0.75 0.75,-0.75h5c0.4142,0 0.75,0.3358 0.75,0.75v5.5c0,0.4142 -0.3358,0.75 -0.75,0.75h-5c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-5.5Zm1.5,0.75v4h3.5v-4h-3.5Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M9.75,3.93457c0,-0.41421 0.3358,-0.75 0.75,-0.75h3c0.4142,0 0.75,0.33579 0.75,0.75c0,0.41421 -0.3358,0.75 -0.75,0.75h-3c-0.4142,0 -0.75,-0.33579 -0.75,-0.75Z"
        ></path>
      </g>
    </svg>
  );
}
