export function MechanicalGateForControllingPassageThroughEntryways({
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
      viewBox="0 0 19.5 21.5"
    >
      <defs></defs>
      <path
        className="cls-1"
        d="M0,.75C0,.34,.34,0,.75,0H10.75c.41,0,.75,.34,.75,.75V6.75c0,.23-.1,.44-.28,.59l-4.72,3.77v5.33l1.78,1.78c.14,.14,.22,.33,.22,.53v2c0,.41-.34,.75-.75,.75H.75c-.41,0-.75-.34-.75-.75V.75Zm1.5,.75V20H7v-.94l-1.78-1.78c-.14-.14-.22-.33-.22-.53v-6c0-.23,.1-.44,.28-.59l4.72-3.77V1.5H1.5Z"
      />
      <path
        className="cls-1"
        d="M7.5,8.75c0-.41,.34-.75,.75-.75h10.5c.41,0,.75,.34,.75,.75s-.34,.75-.75,.75H8.25c-.41,0-.75-.34-.75-.75Z"
      />
      <path
        className="cls-1"
        d="M7.77,8.17c.32-.27,.79-.22,1.06,.1l7.5,9c.27,.32,.22,.79-.1,1.06-.32,.27-.79,.22-1.06-.1L7.67,9.23c-.27-.32-.22-.79,.1-1.06Z"
      />
    </svg>
  );
}
