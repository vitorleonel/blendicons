export function GameConsoleWithPaddlesAndHockeyPuck({
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
        d="M0,11.75c0-.41,.34-.75,.75-.75H20.75c.41,0,.75,.34,.75,.75v6c0,.41-.34,.75-.75,.75H.75c-.41,0-.75-.34-.75-.75v-6Zm1.5,.75v4.5H20v-4.5H1.5Z"
      />
      <path
        className="cls-1"
        d="M6,3.75c0-2.07,1.68-3.75,3.75-3.75h2c2.07,0,3.75,1.68,3.75,3.75V11.75c0,.41-.34,.75-.75,.75H6.75c-.41,0-.75-.34-.75-.75V3.75Zm3.75-2.25c-1.24,0-2.25,1.01-2.25,2.25v7.25h6.5V3.75c0-1.24-1.01-2.25-2.25-2.25h-2Z"
      />
      <path
        className="cls-1"
        d="M0,20.75c0-.41,.34-.75,.75-.75H20.75c.41,0,.75,.34,.75,.75s-.34,.75-.75,.75H.75c-.41,0-.75-.34-.75-.75Z"
      />
    </svg>
  );
}
