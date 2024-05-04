export function LampStandInstalledOutsideTheGarden({
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
        <path d="M9.26994,9.67178c0.07972,0.33882 0.38203,0.57822 0.73006,0.57822h4c0.348,0 0.6504,-0.2394 0.7301,-0.57822l2,-8.5c0.0524,-0.223033 0.0001,-0.45782 -0.1422,-0.637433c-0.1422,-0.179613 -0.3588,-0.284347 -0.5879,-0.284347h-7.99999c-0.22913,0 -0.44568,0.104734 -0.58794,0.284347c-0.14225,0.179613 -0.1946,0.4144 -0.14213,0.637433l2,8.5Zm1.32406,-0.92178l-1.64704,-7h6.10614l-1.6471,7h-2.812Z"></path>
        <path d="M9.25,9.5c0,-0.41421 0.33579,-0.75 0.75,-0.75h4c0.4142,0 0.75,0.33579 0.75,0.75v11c0,0.4142 -0.3358,0.75 -0.75,0.75h-4c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-11Zm1.5,0.75v9.5h2.5v-9.5h-2.5Z"></path>
        <path d="M5.25,1c0,0.41421 0.33579,0.75 0.75,0.75h12c0.4142,0 0.75,-0.33579 0.75,-0.75c0,-0.414214 -0.3358,-0.75 -0.75,-0.75h-12c-0.41421,0 -0.75,0.335786 -0.75,0.75Z"></path>
        <path d="M7.25,23c0,0.4142 0.33579,0.75 0.75,0.75h8c0.4142,0 0.75,-0.3358 0.75,-0.75v-2.5c0,-0.4142 -0.3358,-0.75 -0.75,-0.75h-8c-0.41421,0 -0.75,0.3358 -0.75,0.75v2.5Zm1.5,-0.75v-1h6.5v1h-6.5Z"></path>
      </g>
    </svg>
  );
}
