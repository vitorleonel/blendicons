export function TelevisionUsedForBroadcastingProgramsOrCommunication({
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
        d="M0,.75C0,.34,.34,0,.75,0H20.75c.41,0,.75,.34,.75,.75V13.75c0,.41-.34,.75-.75,.75H.75c-.41,0-.75-.34-.75-.75V.75Zm1.5,.75V13H20V1.5H1.5Z"
      />
      <path
        className="cls-1"
        d="M10.75,13c.41,0,.75,.34,.75,.75v3c0,.41-.34,.75-.75,.75s-.75-.34-.75-.75v-3c0-.41,.34-.75,.75-.75Z"
      />
      <path
        className="cls-1"
        d="M4,16.75c0-.41,.34-.75,.75-.75h12c.41,0,.75,.34,.75,.75s-.34,.75-.75,.75H4.75c-.41,0-.75-.34-.75-.75Z"
      />
    </svg>
  );
}
