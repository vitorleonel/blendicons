export function ShelfUnitForBasicHouseholdItems({
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
        <path d="M2.25,9c0,-0.41421 0.33579,-0.75 0.75,-0.75h18c0.4142,0 0.75,0.33579 0.75,0.75v3c0,0.4142 -0.3358,0.75 -0.75,0.75h-18c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-3Zm1.5,0.75v1.5h16.5v-1.5h-16.5Z"></path>
        <path d="M2.25,15.5c0,-0.4142 0.33579,-0.75 0.75,-0.75h18c0.4142,0 0.75,0.3358 0.75,0.75v3c0,0.4142 -0.3358,0.75 -0.75,0.75h-18c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-3Zm1.5,0.75v1.5h16.5v-1.5h-16.5Z"></path>
        <path d="M2.25,2.5c0,-0.41421 0.33579,-0.75 0.75,-0.75h18c0.4142,0 0.75,0.33579 0.75,0.75v3c0,0.41421 -0.3358,0.75 -0.75,0.75h-18c-0.41421,0 -0.75,-0.33579 -0.75,-0.75v-3Zm1.5,0.75v1.5h16.5v-1.5h-16.5Z"></path>
        <path d="M3,1.75c0.41421,0 0.75,0.33579 0.75,0.75v19c0,0.4142 -0.33579,0.75 -0.75,0.75c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-19c0,-0.41421 0.33579,-0.75 0.75,-0.75Z"></path>
        <path d="M21,1.75c0.4142,0 0.75,0.33579 0.75,0.75v19c0,0.4142 -0.3358,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.3358 -0.75,-0.75v-19c0,-0.41421 0.3358,-0.75 0.75,-0.75Z"></path>
      </g>
    </svg>
  );
}
