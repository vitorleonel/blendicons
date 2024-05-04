export function PowerPlantAStructureForGeneratingElectricity({
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
        d="M0,20.75c0-.41,.34-.75,.75-.75H20.75c.41,0,.75,.34,.75,.75s-.34,.75-.75,.75H.75c-.41,0-.75-.34-.75-.75Z"
      />
      <path
        className="cls-1"
        d="M2.4,12.45c.12-.27,.39-.45,.69-.45h6.67c.41,0,.75,.34,.75,.75v8c0,.41-.34,.75-.75,.75H1.75c-.41,0-.75-.34-.75-.75v-5c0-.1,.02-.21,.06-.3l1.33-3Zm1.17,1.05l-1.07,2.41v4.09h6.5v-6.5H3.57Z"
      />
      <path
        className="cls-1"
        d="M9,.75c0-.41,.34-.75,.75-.75h10c.41,0,.75,.34,.75,.75V20.75c0,.41-.34,.75-.75,.75H9.75c-.41,0-.75-.34-.75-.75V.75Zm1.5,.75V20h8.5V1.5H10.5Z"
      />
      <path
        className="cls-1"
        d="M9,4.75c0-.41,.34-.75,.75-.75h10c.41,0,.75,.34,.75,.75s-.34,.75-.75,.75H9.75c-.41,0-.75-.34-.75-.75Z"
      />
      <path
        className="cls-1"
        d="M5.75,7c.41,0,.75,.34,.75,.75v5c0,.41-.34,.75-.75,.75s-.75-.34-.75-.75V7.75c0-.41,.34-.75,.75-.75Z"
      />
    </svg>
  );
}
