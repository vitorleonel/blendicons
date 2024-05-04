export function BedSideLockerCompactStorageUnit({
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
        <path d="M5.25,11.5c0,-0.4142 0.33579,-0.75 0.75,-0.75h12c0.4142,0 0.75,0.3358 0.75,0.75v8.5c0,0.4142 -0.3358,0.75 -0.75,0.75h-12c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-8.5Zm1.5,0.75v7h10.5v-7h-10.5Z"></path>
        <path d="M5.25,5c0,-0.41421 0.33579,-0.75 0.75,-0.75h12c0.4142,0 0.75,0.33579 0.75,0.75v3c0,0.41421 -0.3358,0.75 -0.75,0.75h-12c-0.41421,0 -0.75,-0.33579 -0.75,-0.75v-3Zm1.5,0.75v1.5h10.5v-1.5h-10.5Z"></path>
        <path d="M6,1.25c0.41421,0 0.75,0.33579 0.75,0.75v20c0,0.4142 -0.33579,0.75 -0.75,0.75c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-20c0,-0.41421 0.33579,-0.75 0.75,-0.75Zm12,0c0.4142,0 0.75,0.33579 0.75,0.75v20c0,0.4142 -0.3358,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.3358 -0.75,-0.75v-20c0,-0.41421 0.3358,-0.75 0.75,-0.75Z"></path>
        <path d="M8.5,13.25c0.41421,0 0.75,0.3358 0.75,0.75v2c0,0.4142 -0.33579,0.75 -0.75,0.75c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-2c0,-0.4142 0.33579,-0.75 0.75,-0.75Z"></path>
      </g>
    </svg>
  );
}
