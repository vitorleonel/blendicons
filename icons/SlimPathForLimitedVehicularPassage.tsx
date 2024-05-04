export function SlimPathForLimitedVehicularPassage({
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
        d="M7.75,4c.41,0,.75,.34,.75,.75v12c0,.41-.34,.75-.75,.75s-.75-.34-.75-.75V4.75c0-.41,.34-.75,.75-.75Z"
      />
      <path
        className="cls-1"
        d="M12.75,4c.41,0,.75,.34,.75,.75v3.77l1.87,2.81c.08,.12,.13,.27,.13,.42v5c0,.41-.34,.75-.75,.75s-.75-.34-.75-.75v-4.77l-1.87-2.81c-.08-.12-.13-.27-.13-.42V4.75c0-.41,.34-.75,.75-.75Z"
      />
    </svg>
  );
}
