export function SignIndicatingSmokingpermittedArea({
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
        d="M4,13.25c0-.41,.34-.75,.75-.75h12c.41,0,.75,.34,.75,.75v3c0,.41-.34,.75-.75,.75H4.75c-.41,0-.75-.34-.75-.75v-3Zm1.5,.75v1.5h10.5v-1.5H5.5Z"
      />
      <path
        className="cls-1"
        d="M8.25,6.5c-.41,0-.75,.34-.75,.75s.34,.75,.75,.75h6.5c1.52,0,2.75,1.23,2.75,2.75v.5c0,.41-.34,.75-.75,.75s-.75-.34-.75-.75v-.5c0-.69-.56-1.25-1.25-1.25h-6.5c-1.24,0-2.25-1.01-2.25-2.25s1.01-2.25,2.25-2.25h3.5c.41,0,.75,.34,.75,.75s-.34,.75-.75,.75h-3.5Z"
      />
    </svg>
  );
}
