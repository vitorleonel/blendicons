export function RoundDesignWallClockIsolatedOnWhiteBackground({
  size = 24,
}: {
  size?: number;
}): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 24 24"
      enable-background="new 0 0 24 24"
      xmlSpace="preserve"
    >
      <g id="Layer_1" display="none">
        <path
          display="inline"
          fill="#90A4AE"
          d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z"
        />
        <path
          display="inline"
          fill="#FFFFFF"
          d="M17.707,18.207C17.512,18.402,17.256,18.5,17,18.5s-0.512-0.098-0.707-0.293l-5-5
		C11.105,13.02,11,12.766,11,12.5V6c0-0.553,0.448-1,1-1s1,0.447,1,1v6.086l4.707,4.707C18.098,17.184,18.098,17.816,17.707,18.207z
		"
        />
      </g>
      <g id="Layer_2" display="none">
        <circle
          display="inline"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          cx="12"
          cy="12"
          r="11.5"
        />

        <polyline
          display="inline"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          points="
		12,4.5 12,12 17.5,17.5 	"
        />
      </g>
      <g id="Layer_3">
        <g>
          <path
            d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12S18.617,24,12,24z M12,1.5C6.21,1.5,1.5,6.21,1.5,12
			S6.21,22.5,12,22.5S22.5,17.79,22.5,12S17.79,1.5,12,1.5z"
          />
        </g>
        <g>
          <path
            d="M17.25,18.5c-0.192,0-0.384-0.073-0.53-0.22l-5.25-5.25c-0.141-0.141-0.22-0.332-0.22-0.53v-7
			c0-0.414,0.336-0.75,0.75-0.75s0.75,0.336,0.75,0.75v6.689l5.03,5.03c0.293,0.293,0.293,0.768,0,1.061
			C17.634,18.427,17.442,18.5,17.25,18.5z"
          />
        </g>
      </g>
      <g id="Layer_4" display="none">
        <g display="inline">
          <path
            d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M17.707,18.207
			C17.512,18.402,17.256,18.5,17,18.5s-0.512-0.098-0.707-0.293l-5-5C11.105,13.02,11,12.766,11,12.5V6c0-0.553,0.448-1,1-1
			s1,0.447,1,1v6.086l4.707,4.707C18.098,17.184,18.098,17.816,17.707,18.207z"
          />
        </g>
      </g>
    </svg>
  );
}
