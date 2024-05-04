export function UseOfBatteryInCarToActivateElectricalSystem({
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
      viewBox="0 0 21.5 17.5"
    >
      <defs></defs>
      <path
        className="cls-1"
        d="M0,3.75c0-.41,.34-.75,.75-.75H20.75c.41,0,.75,.34,.75,.75v13c0,.41-.34,.75-.75,.75H.75c-.41,0-.75-.34-.75-.75V3.75Zm1.5,.75v11.5H20V4.5H1.5Z"
      />
      <path
        className="cls-1"
        d="M2,.75c0-.41,.34-.75,.75-.75H6.75c.41,0,.75,.34,.75,.75V3.75c0,.41-.34,.75-.75,.75H2.75c-.41,0-.75-.34-.75-.75V.75Zm1.5,.75v1.5h2.5V1.5H3.5Z"
      />
      <path
        className="cls-1"
        d="M14,.75c0-.41,.34-.75,.75-.75h4c.41,0,.75,.34,.75,.75V3.75c0,.41-.34,.75-.75,.75h-4c-.41,0-.75-.34-.75-.75V.75Zm1.5,.75v1.5h2.5V1.5h-2.5Z"
      />
      <path
        className="cls-1"
        d="M3,9.75c0-.41,.34-.75,.75-.75h3c.41,0,.75,.34,.75,.75s-.34,.75-.75,.75H3.75c-.41,0-.75-.34-.75-.75Z"
      />
      <path
        className="cls-1"
        d="M14,9.75c0-.41,.34-.75,.75-.75h3c.41,0,.75,.34,.75,.75s-.34,.75-.75,.75h-3c-.41,0-.75-.34-.75-.75Z"
      />
      <path
        className="cls-1"
        d="M16.25,7.5c.41,0,.75,.34,.75,.75v3c0,.41-.34,.75-.75,.75s-.75-.34-.75-.75v-3c0-.41,.34-.75,.75-.75Z"
      />
    </svg>
  );
}
