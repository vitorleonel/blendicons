export function CelestialObjectFollowsDefinedOrbitalPath({
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
      viewBox="0 0 21.5 21.5"
    >
      <defs></defs>
      <path
        className="cls-1"
        d="M10.75,8.5c-1.24,0-2.25,1.01-2.25,2.25s1.01,2.25,2.25,2.25,2.25-1.01,2.25-2.25-1.01-2.25-2.25-2.25Zm-3.75,2.25c0-2.07,1.68-3.75,3.75-3.75s3.75,1.68,3.75,3.75-1.68,3.75-3.75,3.75-3.75-1.68-3.75-3.75Z"
      />
      <path
        className="cls-1"
        d="M10.75,1.5c-1.88,0-3.63,.56-5.09,1.52-.35,.23-.81,.13-1.04-.21-.23-.35-.13-.81,.21-1.04,1.7-1.12,3.73-1.77,5.91-1.77,5.94,0,10.75,4.81,10.75,10.75s-4.81,10.75-10.75,10.75S0,16.69,0,10.75c0-2.18,.65-4.22,1.77-5.91,.23-.35,.69-.44,1.04-.21,.35,.23,.44,.69,.21,1.04-.96,1.46-1.52,3.21-1.52,5.09,0,5.11,4.14,9.25,9.25,9.25s9.25-4.14,9.25-9.25S15.86,1.5,10.75,1.5Z"
      />
      <path
        className="cls-1"
        d="M3.75,2.5c-.69,0-1.25,.56-1.25,1.25s.56,1.25,1.25,1.25,1.25-.56,1.25-1.25-.56-1.25-1.25-1.25ZM1,3.75c0-1.52,1.23-2.75,2.75-2.75s2.75,1.23,2.75,2.75-1.23,2.75-2.75,2.75S1,5.27,1,3.75Z"
      />
    </svg>
  );
}
