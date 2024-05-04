export function LightBulbIlluminatesWithElectricallyPower({
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
      viewBox="0 0 17.5 21.5"
    >
      <defs></defs>
      <path
        className="cls-1"
        d="M8.75,1.5C4.75,1.5,1.5,4.75,1.5,8.75c0,3.04,1.87,5.65,4.53,6.72,.28,.11,.47,.39,.47,.7v1.33h4.5v-1.33c0-.31,.19-.58,.47-.7,2.66-1.08,4.53-3.68,4.53-6.72,0-4-3.25-7.25-7.25-7.25ZM0,8.75C0,3.92,3.92,0,8.75,0s8.75,3.92,8.75,8.75c0,3.49-2.04,6.5-5,7.91v1.59c0,.41-.34,.75-.75,.75H5.75c-.41,0-.75-.34-.75-.75v-1.59C2.04,15.25,0,12.24,0,8.75Z"
      />
      <path
        className="cls-1"
        d="M5,20.75c0-.41,.34-.75,.75-.75h6c.41,0,.75,.34,.75,.75s-.34,.75-.75,.75H5.75c-.41,0-.75-.34-.75-.75Z"
      />
      <path
        className="cls-1"
        d="M9.09,4.08c.37,.19,.52,.64,.34,1.01l-1.46,2.91h2.79c.26,0,.5,.13,.64,.36,.14,.22,.15,.5,.03,.73l-2,4c-.19,.37-.64,.52-1.01,.34-.37-.19-.52-.64-.34-1.01l1.46-2.91h-2.79c-.26,0-.5-.13-.64-.36-.14-.22-.15-.5-.03-.73l2-4c.19-.37,.64-.52,1.01-.34Z"
      />
    </svg>
  );
}
