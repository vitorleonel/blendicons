export function AutomatedTellerMachineForWithdrawingCash({
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
      viewBox="0 0 14.5 21.5"
    >
      <defs></defs>
      <path
        className="cls-1"
        d="M4,6.25c0-.41,.34-.75,.75-.75h5c.41,0,.75,.34,.75,.75v5c0,.41-.34,.75-.75,.75H4.75c-.41,0-.75-.34-.75-.75V6.25Zm1.5,.75v3.5h3.5v-3.5h-3.5Z"
      />
      <path
        className="cls-1"
        d="M1.5,3.75c0-.41,.34-.75,.75-.75H12.25c.41,0,.75,.34,.75,.75V13.75c0,.41-.34,.75-.75,.75H2.25c-.41,0-.75-.34-.75-.75V3.75Zm1.5,.75V13H11.5V4.5H3Z"
      />
      <path
        className="cls-1"
        d="M.5,.75c0-.41,.34-.75,.75-.75H13.25c.41,0,.75,.34,.75,.75V3.75c0,.41-.34,.75-.75,.75H1.25c-.41,0-.75-.34-.75-.75V.75Zm1.5,.75v1.5H12.5V1.5H2Z"
      />
      <path
        className="cls-1"
        d="M0,13.75c0-.41,.34-.75,.75-.75H13.75c.41,0,.75,.34,.75,.75v7c0,.41-.34,.75-.75,.75H.75c-.41,0-.75-.34-.75-.75v-7Zm1.5,.75v5.5H13v-5.5H1.5Z"
      />
    </svg>
  );
}
