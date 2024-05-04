export function TetrisArrangeFallingBlocksToClearLines({
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
      viewBox="0 0 21.5 20.5"
    >
      <defs></defs>
      <path
        className="cls-1"
        d="M3.75,20.5c-.41,0-.75-.34-.75-.75v-4c0-.41,.34-.75,.75-.75h3.25v-3.25c0-.41,.34-.75,.75-.75h4c.41,0,.75,.34,.75,.75v3.25h3.25c.41,0,.75,.34,.75,.75v4c0,.41-.34,.75-.75,.75H3.75Zm.75-1.5H15v-2.5h-3.25c-.41,0-.75-.34-.75-.75v-3.25h-2.5v3.25c0,.41-.34,.75-.75,.75h-3.25v2.5Z"
      />
      <path className="cls-1" d="M7,15h5.5v5.5h-1.5v-4h-2.5v4h-1.5v-5.5Z" />
      <path
        className="cls-1"
        d="M0,.75C0,.34,.34,0,.75,0H8.75c.41,0,.75,.34,.75,.75V4.75c0,.41-.34,.75-.75,.75h-3.25v7.25c0,.41-.34,.75-.75,.75H.75c-.41,0-.75-.34-.75-.75V.75Zm1.5,.75V12h2.5V4.75c0-.41,.34-.75,.75-.75h3.25V1.5H1.5Z"
      />
      <path className="cls-1" d="M0,8H5.5v1.5H0v-1.5Z" />
      <path className="cls-1" d="M5.5,0V5.5H0v-1.5H4V0h1.5Z" />
      <path
        className="cls-1"
        d="M12,.75c0-.41,.34-.75,.75-.75h8c.41,0,.75,.34,.75,.75V8.75c0,.41-.34,.75-.75,.75H12.75c-.41,0-.75-.34-.75-.75V.75Zm1.5,.75v6.5h6.5V1.5h-6.5Z"
      />
      <path className="cls-1" d="M17.5,0V9.5h-1.5V0h1.5Z" />
      <path className="cls-1" d="M12,4h9.5v1.5H12v-1.5Z" />
    </svg>
  );
}
