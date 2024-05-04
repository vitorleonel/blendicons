export function ParkingSignageDefineSpecificAreaForVehicles({
  size = 24,
}: {
  size?: number;
}): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21.5 21.5"
    >
      <defs></defs>
      <path
        className="cls-1"
        d="M0,.75C0,.34,.34,0,.75,0H20.75c.41,0,.75,.34,.75,.75V20.75c0,.41-.34,.75-.75,.75H.75c-.41,0-.75-.34-.75-.75V.75Zm1.5,.75V20H20V1.5H1.5Z"
      />
      <path
        className="cls-1"
        d="M5,3.75c0-.41,.34-.75,.75-.75h5.5c2.9,0,5.25,2.35,5.25,5.25s-2.35,5.25-5.25,5.25h-1.75v4.25c0,.41-.34,.75-.75,.75h-3c-.41,0-.75-.34-.75-.75V3.75Zm1.5,.75v12.5h1.5v-4.25c0-.41,.34-.75,.75-.75h2.5c2.07,0,3.75-1.68,3.75-3.75s-1.68-3.75-3.75-3.75H6.5Z"
      />
      <path
        className="cls-1"
        d="M8,6.75c0-.41,.34-.75,.75-.75h2c1.24,0,2.25,1.01,2.25,2.25s-1.01,2.25-2.25,2.25h-2c-.41,0-.75-.34-.75-.75v-3Zm1.5,.75v1.5h1.25c.41,0,.75-.34,.75-.75s-.34-.75-.75-.75h-1.25Z"
      />
    </svg>
  );
}
