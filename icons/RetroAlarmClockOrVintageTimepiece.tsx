export function RetroAlarmClockOrVintageTimepiece({
  size = 24,
}: {
  size?: number;
}): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      version="1.1"
      id="Regular"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 24 24"
      enable-background="new 0 0 24 24"
      xmlSpace="preserve"
    >
      <path
        d="M21.25,21c-0.414,0-0.75-0.336-0.75-0.75V10.013C20.5,5.319,16.687,1.5,12,1.5s-8.5,3.819-8.5,8.513V20.25
	C3.5,20.664,3.164,21,2.75,21S2,20.664,2,20.25V10.013C2,4.492,6.486,0,12,0s10,4.492,10,10.013V20.25C22,20.664,21.664,21,21.25,21
	z"
      />
      <path
        d="M23.25,24H0.75C0.336,24,0,23.664,0,23.25v-1c0-1.517,1.233-2.75,2.75-2.75h18.5c1.517,0,2.75,1.233,2.75,2.75v1
	C24,23.664,23.664,24,23.25,24z M1.5,22.5h21v-0.25c0-0.689-0.561-1.25-1.25-1.25H2.75c-0.689,0-1.25,0.561-1.25,1.25V22.5z"
      />
      <path
        d="M12,17c-3.86,0-7-3.14-7-7s3.14-7,7-7s7,3.14,7,7S15.86,17,12,17z M12,4.5c-3.033,0-5.5,2.467-5.5,5.5s2.467,5.5,5.5,5.5
	s5.5-2.467,5.5-5.5S15.033,4.5,12,4.5z"
      />
      <path
        d="M13.25,12c-0.169,0-0.339-0.057-0.479-0.174l-1.5-1.25C11.099,10.434,11,10.223,11,10V6.75C11,6.336,11.336,6,11.75,6
	s0.75,0.336,0.75,0.75v2.899l1.23,1.025c0.318,0.265,0.361,0.738,0.096,1.056C13.678,11.908,13.464,12,13.25,12z"
      />
    </svg>
  );
}
