export function SingleFocusPointOnCameraViewFinder({
  size = 24,
}: {
  size?: number;
}): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      version="1.1"
      id="regular_1.5"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 24 24"
      enable-background="new 0 0 24 24"
      xmlSpace="preserve"
    >
      <path
        d="M0.75,7C1.164,7,1.5,6.664,1.5,6.25v-1.5c0-0.689,0.561-1.25,1.25-1.25h1.5C4.664,3.5,5,3.164,5,2.75S4.664,2,4.25,2h-1.5
	C1.233,2,0,3.233,0,4.75v1.5C0,6.664,0.336,7,0.75,7z"
      />
      <path
        d="M21.25,2h-1.5C19.336,2,19,2.336,19,2.75s0.336,0.75,0.75,0.75h1.5c0.689,0,1.25,0.561,1.25,1.25v1.5
	C22.5,6.664,22.836,7,23.25,7S24,6.664,24,6.25v-1.5C24,3.233,22.767,2,21.25,2z"
      />
      <path
        d="M2.75,22h1.5C4.664,22,5,21.664,5,21.25S4.664,20.5,4.25,20.5h-1.5c-0.689,0-1.25-0.561-1.25-1.25v-1.5
	C1.5,17.336,1.164,17,0.75,17S0,17.336,0,17.75v1.5C0,20.767,1.233,22,2.75,22z"
      />
      <path
        d="M23.25,17c-0.414,0-0.75,0.336-0.75,0.75v1.5c0,0.689-0.561,1.25-1.25,1.25h-1.5c-0.414,0-0.75,0.336-0.75,0.75
	S19.336,22,19.75,22h1.5c1.517,0,2.75-1.233,2.75-2.75v-1.5C24,17.336,23.664,17,23.25,17z"
      />
      <path
        d="M16,12c0-2.206-1.794-4-4-4s-4,1.794-4,4s1.794,4,4,4S16,14.206,16,12z M9.5,12c0-1.378,1.122-2.5,2.5-2.5
	s2.5,1.122,2.5,2.5s-1.122,2.5-2.5,2.5S9.5,13.378,9.5,12z"
      />
    </svg>
  );
}
