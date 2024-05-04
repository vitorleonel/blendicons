export function OnlineSecurityWarningIndicationInLaptop({
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
        <path d="M2.25,3.5c0,-0.41421 0.33579,-0.75 0.75,-0.75h18c0.4142,0 0.75,0.33579 0.75,0.75v13c0,0.4142 -0.3358,0.75 -0.75,0.75h-4v-1.5h3.25v-11.5h-16.5v11.5h3.25v1.5h-4c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-13Z"></path>
        <path d="M1.25,16.5c0,-0.4142 0.33579,-0.75 0.75,-0.75h6c0.41421,0 0.75,0.3358 0.75,0.75v0.25h6.5v-0.25c0,-0.4142 0.3358,-0.75 0.75,-0.75h6c0.4142,0 0.75,0.3358 0.75,0.75v1.5c0,1.5188 -1.2312,2.75 -2.75,2.75h-16c-1.51878,0 -2.75,-1.2312 -2.75,-2.75v-1.5Zm15.5,0.75v0.25c0,0.4142 -0.3358,0.75 -0.75,0.75h-8c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-0.25h-4.5v0.75c0,0.6904 0.55964,1.25 1.25,1.25h16c0.6904,0 1.25,-0.5596 1.25,-1.25v-0.75h-4.5Z"></path>
        <path d="M12,5.25c0.4142,0 0.75,0.33579 0.75,0.75v5c0,0.4142 -0.3358,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.3358 -0.75,-0.75v-5c0,-0.41421 0.3358,-0.75 0.75,-0.75Z"></path>
        <path d="M12,12.75c0.4142,0 0.75,0.3358 0.75,0.75v0.5c0,0.4142 -0.3358,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.3358 -0.75,-0.75v-0.5c0,-0.4142 0.3358,-0.75 0.75,-0.75Z"></path>
      </g>
    </svg>
  );
}
