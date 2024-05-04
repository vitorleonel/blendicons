export function BatteryOnEcoModeWithExtraLife({
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
      <path
        d="M11.815,18C8.8,18,7,15.886,7,12.346c0-1.653,0.744-2.901,1.531-4.222c0.882-1.48,1.795-3.011,1.795-5.374
	c0-0.298,0.176-0.567,0.449-0.687c0.273-0.121,0.591-0.066,0.81,0.136l0.127,0.118C14.068,4.49,17,7.195,17,11.919
	C17,14.848,15.377,18,11.815,18z M11.699,4.358c-0.31,1.901-1.134,3.284-1.879,4.534C9.112,10.08,8.5,11.105,8.5,12.346
	c0,1.895,0.575,4.154,3.315,4.154c2.909,0,3.685-2.879,3.685-4.581C15.5,8.45,13.643,6.227,11.699,4.358z"
      />
      <path
        d="M6.75,22.999c-0.333,0-0.636-0.223-0.725-0.559c-0.105-0.4,0.133-0.811,0.534-0.916c4.95-1.304,4.449-8.643,4.443-8.717
	c-0.031-0.413,0.278-0.773,0.691-0.805c0.412-0.032,0.773,0.277,0.805,0.691c0.027,0.353,0.588,8.663-5.557,10.281
	C6.877,22.991,6.813,22.999,6.75,22.999z"
      />
      <path
        d="M19.25,19h-2.5C16.336,19,16,18.664,16,18.25s0.336-0.75,0.75-0.75h2.5c0.689,0,1.25-0.561,1.25-1.25v-1
	c0-0.414,0.336-0.75,0.75-0.75h0.991c0.138,0,0.25-0.112,0.25-0.25v-5.5c0-0.138-0.112-0.25-0.25-0.25H21.25
	c-0.414,0-0.75-0.336-0.75-0.75v-1c0-0.689-0.561-1.25-1.25-1.25h-1.5C17.336,5.5,17,5.164,17,4.75S17.336,4,17.75,4h1.5
	C20.766,4,22,5.233,22,6.75V7h0.241c0.965,0,1.75,0.785,1.75,1.75v5.5c0,0.965-0.785,1.75-1.75,1.75H22v0.25
	C22,17.767,20.766,19,19.25,19z"
      />
      <path
        d="M6.25,19h-3.5C1.233,19,0,17.767,0,16.25v-9.5C0,5.233,1.233,4,2.75,4h4.5C7.664,4,8,4.336,8,4.75S7.664,5.5,7.25,5.5h-4.5
	C2.061,5.5,1.5,6.061,1.5,6.75v9.5c0,0.689,0.561,1.25,1.25,1.25h3.5C6.664,17.5,7,17.836,7,18.25S6.664,19,6.25,19z"
      />
    </svg>
  );
}
