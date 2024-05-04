export function PortableAirPumpToInflateATire({
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
        d="M4.75,1.5c-1.79,0-3.25,1.46-3.25,3.25s1.46,3.25,3.25,3.25,3.25-1.46,3.25-3.25-1.46-3.25-3.25-3.25ZM0,4.75C0,2.13,2.13,0,4.75,0s4.75,2.13,4.75,4.75-2.13,4.75-4.75,4.75S0,7.37,0,4.75Z"
      />
      <path
        className="cls-1"
        d="M14.75,9.5c-2.9,0-5.25,2.35-5.25,5.25s2.35,5.25,5.25,5.25,5.25-2.35,5.25-5.25-2.35-5.25-5.25-5.25Zm-6.75,5.25c0-3.73,3.02-6.75,6.75-6.75s6.75,3.02,6.75,6.75-3.02,6.75-6.75,6.75-6.75-3.02-6.75-6.75Z"
      />
      <path
        className="cls-1"
        d="M14.75,13.5c-.69,0-1.25,.56-1.25,1.25s.56,1.25,1.25,1.25,1.25-.56,1.25-1.25-.56-1.25-1.25-1.25Zm-2.75,1.25c0-1.52,1.23-2.75,2.75-2.75s2.75,1.23,2.75,2.75-1.23,2.75-2.75,2.75-2.75-1.23-2.75-2.75Z"
      />
      <path
        className="cls-1"
        d="M4.75,2.5c.41,0,.75,.34,.75,.75v.75h.75c.41,0,.75,.34,.75,.75s-.34,.75-.75,.75h-1.5c-.41,0-.75-.34-.75-.75v-1.5c0-.41,.34-.75,.75-.75Z"
      />
      <path
        className="cls-1"
        d="M4.75,8c.41,0,.75,.34,.75,.75v5c0,.14,.11,.25,.25,.25h3c.41,0,.75,.34,.75,.75s-.34,.75-.75,.75h-3c-.97,0-1.75-.78-1.75-1.75v-5c0-.41,.34-.75,.75-.75Z"
      />
    </svg>
  );
}
