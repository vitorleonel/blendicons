export function PencilDrawingToolFeatureInDesignSoftware({
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
        <g>
          <path
            d="M0.75,24c-0.196,0-0.388-0.077-0.53-0.22c-0.186-0.186-0.261-0.456-0.197-0.711l1.408-5.651
			c0.033-0.132,0.101-0.253,0.197-0.349L17.477,1.22c1.072-1.072,2.817-1.072,3.889,0l1.414,1.414c1.072,1.072,1.072,2.817,0,3.889
			L6.931,22.372c-0.096,0.096-0.217,0.165-0.349,0.197l-5.651,1.408C0.871,23.993,0.811,24,0.75,24z M2.835,17.982l-1.056,4.238
			l4.238-1.056L21.72,5.462c0.487-0.487,0.487-1.281,0-1.768L20.306,2.28c-0.488-0.488-1.282-0.487-1.768,0L2.835,17.982z
			 M6.401,21.842h0.01H6.401z"
          />
        </g>
        <g>
          <path
            d="M19.811,9.182c-0.192,0-0.384-0.073-0.53-0.22L15.038,4.72c-0.293-0.293-0.293-0.768,0-1.061s0.768-0.293,1.061,0
			l4.243,4.243c0.293,0.293,0.293,0.768,0,1.061C20.194,9.109,20.002,9.182,19.811,9.182z"
          />
        </g>
        <g>
          <path
            d="M6.401,22.592c-0.192,0-0.384-0.073-0.53-0.22l-4.243-4.243c-0.293-0.293-0.293-0.768,0-1.061s0.768-0.293,1.061,0
			l4.243,4.243c0.293,0.293,0.293,0.768,0,1.061C6.785,22.519,6.593,22.592,6.401,22.592z"
          />
        </g>
      </g>
    </svg>
  );
}
