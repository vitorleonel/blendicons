export function StoolWithExtendedLegsAndASeat({
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
        <path d="M6.75,3.93457c0,-1.51878 1.23122,-2.75 2.75,-2.75h5c1.5188,0 2.75,1.23122 2.75,2.75v1c0,0.41421 -0.3358,0.75 -0.75,0.75h-9c-0.41421,0 -0.75,-0.33579 -0.75,-0.75v-1Zm2.75,-1.25c-0.69036,0 -1.25,0.55964 -1.25,1.25v0.25h7.5v-0.25c0,-0.69036 -0.5596,-1.25 -1.25,-1.25h-5Z"></path>
        <path d="M7.25,17.4346c0,-0.4142 0.33579,-0.75 0.75,-0.75h8c0.4142,0 0.75,0.3358 0.75,0.75c0,0.4142 -0.3358,0.75 -0.75,0.75h-8c-0.41421,0 -0.75,-0.3358 -0.75,-0.75Z"></path>
        <path d="M7.25,11.9346c0,-0.4142 0.33579,-0.75 0.75,-0.75h8c0.4142,0 0.75,0.3358 0.75,0.75c0,0.4142 -0.3358,0.75 -0.75,0.75h-8c-0.41421,0 -0.75,-0.3358 -0.75,-0.75Z"></path>
        <path d="M14.8969,4.19179c0.4103,-0.05698 0.7891,0.22942 0.8461,0.6397l2.5,18c0.0569,0.4103 -0.2295,0.789 -0.6397,0.846c-0.4103,0.057 -0.7891,-0.2294 -0.8461,-0.6397l-2.5,-18c-0.057,-0.41028 0.2294,-0.78906 0.6397,-0.84605Z"></path>
        <path d="M9.10308,4.19179c-0.41027,-0.05698 -0.78906,0.22942 -0.84604,0.6397l-2.5,18c-0.05698,0.4103 0.22942,0.789 0.63969,0.846c0.41028,0.057 0.78906,-0.2294 0.84605,-0.6397l2.5,-18c0.05698,-0.41028 -0.22942,-0.78906 -0.6397,-0.84605Z"></path>
      </g>
    </svg>
  );
}
