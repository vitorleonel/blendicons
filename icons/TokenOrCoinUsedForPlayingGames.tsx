export function TokenOrCoinUsedForPlayingGames({
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
        d="M10.75,1.5C5.64,1.5,1.5,5.64,1.5,10.75s4.14,9.25,9.25,9.25,9.25-4.14,9.25-9.25S15.86,1.5,10.75,1.5ZM0,10.75C0,4.81,4.81,0,10.75,0s10.75,4.81,10.75,10.75-4.81,10.75-10.75,10.75S0,16.69,0,10.75Z"
      />
      <path
        className="cls-1"
        d="M7,8.75c0-1.52,1.23-2.75,2.75-2.75h4c.41,0,.75,.34,.75,.75s-.34,.75-.75,.75h-4c-.69,0-1.25,.56-1.25,1.25s.56,1.25,1.25,1.25h2c1.52,0,2.75,1.23,2.75,2.75s-1.23,2.75-2.75,2.75H7.75c-.41,0-.75-.34-.75-.75s.34-.75,.75-.75h4c.69,0,1.25-.56,1.25-1.25s-.56-1.25-1.25-1.25h-2c-1.52,0-2.75-1.23-2.75-2.75Z"
      />
      <path
        className="cls-1"
        d="M10.75,4c.41,0,.75,.34,.75,.75v2c0,.41-.34,.75-.75,.75s-.75-.34-.75-.75v-2c0-.41,.34-.75,.75-.75Z"
      />
      <path
        className="cls-1"
        d="M10.75,14c.41,0,.75,.34,.75,.75v2c0,.41-.34,.75-.75,.75s-.75-.34-.75-.75v-2c0-.41,.34-.75,.75-.75Z"
      />
    </svg>
  );
}
