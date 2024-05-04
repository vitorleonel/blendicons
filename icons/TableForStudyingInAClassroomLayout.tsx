export function TableForStudyingInAClassroomLayout({
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
        <path d="M1.75,6.5c0,-0.41421 0.33579,-0.75 0.75,-0.75h19c0.4142,0 0.75,0.33579 0.75,0.75c0,0.41421 -0.3358,0.75 -0.75,0.75h-19c-0.41421,0 -0.75,-0.33579 -0.75,-0.75Z"></path>
        <path d="M3.25,6.5c0,-0.41421 0.33579,-0.75 0.75,-0.75h16c0.4142,0 0.75,0.33579 0.75,0.75v2c0,1.5188 -1.2312,2.75 -2.75,2.75h-12c-1.51878,0 -2.75,-1.2312 -2.75,-2.75v-2Zm1.5,0.75v1.25c0,0.69036 0.55964,1.25 1.25,1.25h12c0.6904,0 1.25,-0.55964 1.25,-1.25v-1.25h-14.5Z"></path>
        <path d="M6,9.75c0.41421,0 0.75,0.3358 0.75,0.75v9c0,0.4142 -0.33579,0.75 -0.75,0.75c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-9c0,-0.4142 0.33579,-0.75 0.75,-0.75Z"></path>
        <path d="M18,9.75c0.4142,0 0.75,0.3358 0.75,0.75v9c0,0.4142 -0.3358,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.3358 -0.75,-0.75v-9c0,-0.4142 0.3358,-0.75 0.75,-0.75Z"></path>
      </g>
    </svg>
  );
}
