export function PortableTabletWithHighEfficiencyToControlComputingProcess({
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
        <path d="M2.25,4c0,-1.51878 1.23122,-2.75 2.75,-2.75h14c1.5188,0 2.75,1.23122 2.75,2.75v16c0,1.5188 -1.2312,2.75 -2.75,2.75h-14c-1.51878,0 -2.75,-1.2312 -2.75,-2.75v-16Zm2.75,-1.25c-0.69036,0 -1.25,0.55964 -1.25,1.25v16c0,0.6904 0.55964,1.25 1.25,1.25h14c0.6904,0 1.25,-0.5596 1.25,-1.25v-16c0,-0.69036 -0.5596,-1.25 -1.25,-1.25h-14Z"></path>
        <path d="M12,17.25c-0.9665,0 -1.75,0.7835 -1.75,1.75c0,0.9665 0.7835,1.75 1.75,1.75c0.9665,0 1.75,-0.7835 1.75,-1.75c0,-0.9665 -0.7835,-1.75 -1.75,-1.75Z"></path>
      </g>
    </svg>
  );
}
