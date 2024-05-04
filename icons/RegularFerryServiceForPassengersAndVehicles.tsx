export function RegularFerryServiceForPassengersAndVehicles({
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
      viewBox="0 0 21.5 16.5"
    >
      <defs></defs>
      <path
        className="cls-1"
        d="M.1,9.38c.13-.23,.38-.38,.65-.38H20.75c.41,0,.75,.34,.75,.75v6c0,.41-.34,.75-.75,.75H4.25c-.27,0-.51-.14-.65-.37L.1,10.13c-.14-.23-.14-.52,0-.75Zm1.96,1.12l2.62,4.5h15.32v-4.5H2.06Z"
      />
      <path
        className="cls-1"
        d="M7.03,5.52c.47-.93,1.42-1.52,2.46-1.52h10.26c.22,0,.44,.1,.58,.27,.14,.17,.2,.4,.16,.62l-1,5c-.07,.35-.38,.6-.74,.6H5.75c-.26,0-.5-.13-.64-.36-.14-.22-.15-.5-.03-.73l1.95-3.89Zm2.46-.02c-.47,0-.91,.27-1.12,.69l-1.4,2.81h11.17l.7-3.5H9.49Z"
      />
      <path
        className="cls-1"
        d="M13,.75c0-.41,.34-.75,.75-.75h3c.41,0,.75,.34,.75,.75V4.75c0,.41-.34,.75-.75,.75h-3c-.41,0-.75-.34-.75-.75V.75Zm1.5,.75v2.5h1.5V1.5h-1.5Z"
      />
    </svg>
  );
}
