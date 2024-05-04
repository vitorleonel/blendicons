export function PortableFlashDriveForTransferringData({
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
        <path d="M6.25,8.5c0,-0.41421 0.33579,-0.75 0.75,-0.75h10c0.4142,0 0.75,0.33579 0.75,0.75v9.5c0,2.6234 -2.1266,4.75 -4.75,4.75h-2c-2.62335,0 -4.75,-2.1266 -4.75,-4.75v-9.5Zm1.5,0.75v8.75c0,1.7949 1.45507,3.25 3.25,3.25h2c1.7949,0 3.25,-1.4551 3.25,-3.25v-8.75h-8.5Z"></path>
        <path d="M7.25,2c0,-0.41421 0.33579,-0.75 0.75,-0.75h8c0.4142,0 0.75,0.33579 0.75,0.75v6.5c0,0.41421 -0.3358,0.75 -0.75,0.75h-8c-0.41421,0 -0.75,-0.33579 -0.75,-0.75v-6.5Zm1.5,0.75v5h6.5v-5h-6.5Z"></path>
        <path d="M13.5,3.75c0.4142,0 0.75,0.33579 0.75,0.75v1.5c0,0.41421 -0.3358,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.33579 -0.75,-0.75v-1.5c0,-0.41421 0.3358,-0.75 0.75,-0.75Z"></path>
        <path d="M10.5,3.75c0.4142,0 0.75,0.33579 0.75,0.75v1.5c0,0.41421 -0.3358,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.33579 -0.75,-0.75v-1.5c0,-0.41421 0.3358,-0.75 0.75,-0.75Z"></path>
      </g>
    </svg>
  );
}
