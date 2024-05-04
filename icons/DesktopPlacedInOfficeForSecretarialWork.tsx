export function DesktopPlacedInOfficeForSecretarialWork({
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
        <path d="M1.25,2c0,-0.41421 0.33579,-0.75 0.75,-0.75h20c0.4142,0 0.75,0.33579 0.75,0.75v13c0,0.4142 -0.3358,0.75 -0.75,0.75h-20c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-13Zm1.5,0.75v11.5h18.5v-11.5h-18.5Z"></path>
        <path d="M4.25,19c0,-0.4142 0.33579,-0.75 0.75,-0.75h14c0.4142,0 0.75,0.3358 0.75,0.75v3c0,0.4142 -0.3358,0.75 -0.75,0.75h-14c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-3Zm1.5,0.75v1.5h12.5v-1.5h-12.5Z"></path>
        <path d="M7.25,15c0,-0.4142 0.33579,-0.75 0.75,-0.75h8c0.4142,0 0.75,0.3358 0.75,0.75v4c0,0.4142 -0.3358,0.75 -0.75,0.75h-8c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-4Zm1.5,0.75v2.5h6.5v-2.5h-6.5Z"></path>
      </g>
    </svg>
  );
}
