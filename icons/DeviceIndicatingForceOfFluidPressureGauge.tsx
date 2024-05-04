export function DeviceIndicatingForceOfFluidPressureGauge({
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
        d="M8.75,1.5C4.75,1.5,1.5,4.75,1.5,8.75s3.25,7.25,7.25,7.25,7.25-3.25,7.25-7.25S12.75,1.5,8.75,1.5ZM0,8.75C0,3.92,3.92,0,8.75,0s8.75,3.92,8.75,8.75-3.92,8.75-8.75,8.75S0,13.58,0,8.75Z"
      />
      <path
        className="cls-1"
        d="M11.39,6.14c-1.46-1.52-3.82-1.52-5.28,0-1.48,1.54-1.48,4.05,0,5.59,.29,.3,.28,.77-.02,1.06-.3,.29-.77,.28-1.06-.02-2.04-2.12-2.04-5.55,0-7.67,2.05-2.14,5.39-2.14,7.45,0,2.04,2.12,2.04,5.55,0,7.67-.29,.3-.76,.31-1.06,.02-.3-.29-.31-.76-.02-1.06,1.48-1.54,1.48-4.05,0-5.59Z"
      />
      <path
        className="cls-1"
        d="M9.39,8.36c.21,.36,.1,.82-.26,1.03l-5,3c-.36,.21-.82,.1-1.03-.26-.21-.36-.1-.82,.26-1.03l5-3c.36-.21,.82-.1,1.03,.26Z"
      />
      <path
        className="cls-1"
        d="M4.75,15c.41,0,.75,.34,.75,.75v4.25h6.5v-4.25c0-.41,.34-.75,.75-.75s.75,.34,.75,.75v5c0,.41-.34,.75-.75,.75H4.75c-.41,0-.75-.34-.75-.75v-5c0-.41,.34-.75,.75-.75Z"
      />
    </svg>
  );
}
