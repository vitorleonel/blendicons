export function StopMusicButtonForMediaPlayerIsolatedOnWhiteBackground({
  size = 24,
}: {
  size?: number;
}): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      version="1.1"
      id="regular"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 24 24"
      enable-background="new 0 0 24 24"
      xmlSpace="preserve"
    >
      <g>
        <path
          d="M21.25,24H2.75C1.233,24,0,22.767,0,21.25V2.75C0,1.233,1.233,0,2.75,0h18.5C22.767,0,24,1.233,24,2.75v18.5
		C24,22.767,22.767,24,21.25,24z M2.75,1.5C2.061,1.5,1.5,2.061,1.5,2.75v18.5c0,0.689,0.561,1.25,1.25,1.25h18.5
		c0.689,0,1.25-0.561,1.25-1.25V2.75c0-0.689-0.561-1.25-1.25-1.25H2.75z"
        />
      </g>
      <g>
        <path
          d="M15.25,17h-6.5C7.785,17,7,16.215,7,15.25v-6.5C7,7.785,7.785,7,8.75,7h6.5C16.215,7,17,7.785,17,8.75v6.5
		C17,16.215,16.215,17,15.25,17z M8.75,8.5C8.612,8.5,8.5,8.612,8.5,8.75v6.5c0,0.138,0.112,0.25,0.25,0.25h6.5
		c0.138,0,0.25-0.112,0.25-0.25v-6.5c0-0.138-0.112-0.25-0.25-0.25H8.75z"
        />
      </g>
    </svg>
  );
}
