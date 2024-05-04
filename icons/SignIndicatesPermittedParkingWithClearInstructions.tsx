export function SignIndicatesPermittedParkingWithClearInstructions({
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
      viewBox="0 0 15.5 21.5"
    >
      <defs></defs>
      <path
        className="cls-1"
        d="M7.75,14c.41,0,.75,.34,.75,.75v6c0,.41-.34,.75-.75,.75s-.75-.34-.75-.75v-6c0-.41,.34-.75,.75-.75Z"
      />
      <path
        className="cls-1"
        d="M6.75,4c.41,0,.75,.34,.75,.75v6c0,.41-.34,.75-.75,.75s-.75-.34-.75-.75V4.75c0-.41,.34-.75,.75-.75Z"
      />
      <path
        className="cls-1"
        d="M7.75,1.5C4.3,1.5,1.5,4.3,1.5,7.75s2.8,6.25,6.25,6.25,6.25-2.8,6.25-6.25S11.2,1.5,7.75,1.5ZM0,7.75C0,3.47,3.47,0,7.75,0s7.75,3.47,7.75,7.75-3.47,7.75-7.75,7.75S0,12.03,0,7.75Z"
      />
      <path
        className="cls-1"
        d="M6,4.75c0-.41,.34-.75,.75-.75h2c.97,0,1.75,.78,1.75,1.75v1c0,.97-.78,1.75-1.75,1.75h-2c-.41,0-.75-.34-.75-.75s.34-.75,.75-.75h2c.14,0,.25-.11,.25-.25v-1c0-.14-.11-.25-.25-.25h-2c-.41,0-.75-.34-.75-.75Z"
      />
    </svg>
  );
}
