export function TallRevolvingStoolForHospitalsVisitors({
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
        <path d="M6.25,4.5c0,-1.51878 1.23122,-2.75 2.75,-2.75h6c1.5188,0 2.75,1.23122 2.75,2.75v3.5c0,0.41421 -0.3358,0.75 -0.75,0.75h-10c-0.41421,0 -0.75,-0.33579 -0.75,-0.75v-3.5Zm2.75,-1.25c-0.69036,0 -1.25,0.55964 -1.25,1.25v2.75h8.5v-2.75c0,-0.69036 -0.5596,-1.25 -1.25,-1.25h-6Z"></path>
        <path d="M12,7.25c0.4142,0 0.75,0.33579 0.75,0.75v14c0,0.4142 -0.3358,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.3358 -0.75,-0.75v-14c0,-0.41421 0.3358,-0.75 0.75,-0.75Z"></path>
        <path d="M6.25,13c0,-1.5188 1.23122,-2.75 2.75,-2.75h6c1.5188,0 2.75,1.2312 2.75,2.75v8.5c0,0.4142 -0.3358,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.3358 -0.75,-0.75v-8.5c0,-0.6904 -0.5596,-1.25 -1.25,-1.25h-6c-0.69036,0 -1.25,0.5596 -1.25,1.25v8.5c0,0.4142 -0.33579,0.75 -0.75,0.75c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-8.5Z"></path>
      </g>
    </svg>
  );
}
