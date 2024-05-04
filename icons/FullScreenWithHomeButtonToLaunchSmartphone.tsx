export function FullScreenWithHomeButtonToLaunchSmartphone({
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
      <path
        d="M17.25,24H6.75C5.233,24,4,22.767,4,21.25V2.75C4,1.233,5.233,0,6.75,0h10.5C18.767,0,20,1.233,20,2.75v18.5
	C20,22.767,18.767,24,17.25,24z M6.75,1.5C6.061,1.5,5.5,2.061,5.5,2.75v18.5c0,0.689,0.561,1.25,1.25,1.25h10.5
	c0.689,0,1.25-0.561,1.25-1.25V2.75c0-0.689-0.561-1.25-1.25-1.25H6.75z"
      />
      <path
        d="M12,21c-0.827,0-1.5-0.673-1.5-1.5S11.173,18,12,18s1.5,0.673,1.5,1.5S12.827,21,12,21z M12,19.499c0,0,0,0.001,0,0.001
	l0.75,0L12,19.499z"
      />
    </svg>
  );
}
