/**
 * Original name: Tetris, a falling blocks puzzle. Icon Free Download
 */
export function TetrisAFallingBlocksPuzzle({
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
        d="M4.75,12c-.41,0-.75,.34-.75,.75v4c0,.41,.34,.75,.75,.75h3.25v3.25c0,.41,.34,.75,.75,.75h8c.41,0,.75-.34,.75-.75v-4c0-.41-.34-.75-.75-.75h-3.25v-3.25c0-.2-.08-.39-.22-.53-.14-.14-.33-.22-.53-.22H4.75Zm.75,1.5h6.5v3.25c0,.41,.34,.75,.75,.75h3.25v2.5h-6.5v-3.25c0-.41-.34-.75-.75-.75h-3.25v-2.5Z"
      />
      <path
        className="cls-1"
        d="M0,20.75c0,.41,.34,.75,.75,.75H8.75c.41,0,.75-.34,.75-.75v-4c0-.41-.34-.75-.75-.75h-3.25v-7.25c0-.41-.34-.75-.75-.75H.75c-.41,0-.75,.34-.75,.75v12Zm1.5-.75V9.5h2.5v7.25c0,.41,.34,.75,.75,.75h3.25v2.5H1.5Z"
      />
      <path
        className="cls-1"
        d="M6,.75c0-.41,.34-.75,.75-.75H14.75c.41,0,.75,.34,.75,.75V8.75c0,.41-.34,.75-.75,.75H6.75c-.41,0-.75-.34-.75-.75V.75Zm1.5,.75v6.5h6.5V1.5H7.5Z"
      />
      <path
        className="cls-1"
        d="M21.5,8.75c0-.41-.34-.75-.75-.75h-4c-.41,0-.75,.34-.75,.75v3.25h-3.25c-.41,0-.75,.34-.75,.75v4c0,.41,.34,.75,.75,.75h3.25v3.25c0,.41,.34,.75,.75,.75h4c.41,0,.75-.34,.75-.75V8.75Zm-1.5,.75v10.5h-2.5v-3.25c0-.41-.34-.75-.75-.75h-3.25v-2.5h3.25c.41,0,.75-.34,.75-.75v-3.25h2.5Z"
      />
    </svg>
  );
}