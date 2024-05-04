export function CircularSignBoardWithMinimumLights({
  size = 24,
}: {
  size?: number;
}): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      version="1.1"
      id="_x31__x2C_5"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 24 24"
      enable-background="new 0 0 24 24"
      xmlSpace="preserve"
    >
      <path d="M23.25,3.5H0.75C0.336,3.5,0,3.164,0,2.75S0.336,2,0.75,2h22.5C23.664,2,24,2.336,24,2.75S23.664,3.5,23.25,3.5z" />
      <path d="M6.75,8.25C6.336,8.25,6,7.914,6,7.5V2.75C6,2.336,6.336,2,6.75,2S7.5,2.336,7.5,2.75V7.5C7.5,7.914,7.164,8.25,6.75,8.25z" />
      <path
        d="M17.25,8.25c-0.414,0-0.75-0.336-0.75-0.75V2.75C16.5,2.336,16.836,2,17.25,2S18,2.336,18,2.75V7.5
	C18,7.914,17.664,8.25,17.25,8.25z"
      />
      <path
        d="M12,23c-4.962,0-9-4.038-9-9s4.038-9,9-9s9,4.038,9,9S16.962,23,12,23z M12,6.5c-4.136,0-7.5,3.364-7.5,7.5
	s3.364,7.5,7.5,7.5s7.5-3.364,7.5-7.5S16.136,6.5,12,6.5z"
      />
    </svg>
  );
}
