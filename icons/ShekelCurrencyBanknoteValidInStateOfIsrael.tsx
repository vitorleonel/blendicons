export function ShekelCurrencyBanknoteValidInStateOfIsrael({
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
      style="enable-background:new 0 0 24 24;"
      xmlSpace="preserve"
    >
      <path
        d="M12.5,10.75v1.5c0,0.414,0.336,0.75,0.75,0.75S14,12.664,14,12.25v-1.5C14,8.683,12.317,7,10.25,7h-1.5
	C8.336,7,8,7.336,8,7.75v8.5C8,16.664,8.336,17,8.75,17s0.75-0.336,0.75-0.75V8.5h0.75C11.49,8.5,12.5,9.51,12.5,10.75z"
      />
      <path
        d="M15.75,7C15.336,7,15,7.336,15,7.75v7.75h-0.75c-1.24,0-2.25-1.01-2.25-2.25v-1.5c0-0.414-0.336-0.75-0.75-0.75
	s-0.75,0.336-0.75,0.75v1.5c0,2.067,1.683,3.75,3.75,3.75h1.5c0.414,0,0.75-0.336,0.75-0.75v-8.5C16.5,7.336,16.164,7,15.75,7z"
      />
      <path
        d="M21.25,4H2.75C1.233,4,0,5.233,0,6.75v10.5C0,18.767,1.233,20,2.75,20h18.5c1.517,0,2.75-1.233,2.75-2.75V6.75
	C24,5.233,22.767,4,21.25,4z M22.5,17.25c0,0.689-0.561,1.25-1.25,1.25H2.75c-0.689,0-1.25-0.561-1.25-1.25V6.75
	c0-0.689,0.561-1.25,1.25-1.25h18.5c0.689,0,1.25,0.561,1.25,1.25V17.25z"
      />
      <path d="M6.25,7h-2.5C3.336,7,3,7.336,3,7.75S3.336,8.5,3.75,8.5h2.5C6.664,8.5,7,8.164,7,7.75S6.664,7,6.25,7z" />
      <path
        d="M20.25,15.5h-2.5c-0.414,0-0.75,0.336-0.75,0.75S17.336,17,17.75,17h2.5c0.414,0,0.75-0.336,0.75-0.75
	S20.664,15.5,20.25,15.5z"
      />
    </svg>
  );
}
