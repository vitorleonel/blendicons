export function BuildingForSpacecraftOrAirplanesStorage({
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
        d="M10.47,.05c.18-.07,.38-.07,.56,0l10,4c.28,.11,.47,.39,.47,.7v2c0,.41-.34,.75-.75,.75H.75c-.41,0-.75-.34-.75-.75v-2c0-.31,.19-.58,.47-.7L10.47,.05ZM1.5,5.26v.74H20v-.74L10.75,1.56,1.5,5.26Z"
      />
      <path
        className="cls-1"
        d="M1,6.75c0-.41,.34-.75,.75-.75H19.75c.41,0,.75,.34,.75,.75v10c0,.41-.34,.75-.75,.75h-4c-.41,0-.75-.34-.75-.75v-5.25H6.5v5.25c0,.41-.34,.75-.75,.75H1.75c-.41,0-.75-.34-.75-.75V6.75Zm1.5,.75v8.5h2.5v-5.25c0-.41,.34-.75,.75-.75H15.75c.41,0,.75,.34,.75,.75v5.25h2.5V7.5H2.5Z"
      />
    </svg>
  );
}
