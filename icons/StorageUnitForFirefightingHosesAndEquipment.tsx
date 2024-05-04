export function StorageUnitForFirefightingHosesAndEquipment({
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
        d="M5,8.75c0-2.07,1.68-3.75,3.75-3.75h4c2.07,0,3.75,1.68,3.75,3.75v4c0,2.07-1.68,3.75-3.75,3.75h-4c-2.07,0-3.75-1.68-3.75-3.75v-4Zm3.75-2.25c-1.24,0-2.25,1.01-2.25,2.25v4c0,1.24,1.01,2.25,2.25,2.25h4c1.24,0,2.25-1.01,2.25-2.25v-4c0-1.24-1.01-2.25-2.25-2.25h-4Z"
      />
      <path
        className="cls-1"
        d="M3.25,8c.41,0,.75,.34,.75,.75v4c0,.41-.34,.75-.75,.75s-.75-.34-.75-.75v-4c0-.41,.34-.75,.75-.75Z"
      />
    </svg>
  );
}
