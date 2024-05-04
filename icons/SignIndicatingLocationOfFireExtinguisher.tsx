export function SignIndicatingLocationOfFireExtinguisher({
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
        d="M0,.75C0,.34,.34,0,.75,0H20.75c.41,0,.75,.34,.75,.75V20.75c0,.41-.34,.75-.75,.75H.75c-.41,0-.75-.34-.75-.75V.75Zm1.5,.75V20H20V1.5H1.5Z"
      />
      <path
        className="cls-1"
        d="M7,8.75c0-1.52,1.23-2.75,2.75-2.75h2c1.52,0,2.75,1.23,2.75,2.75v9c0,.41-.34,.75-.75,.75H7.75c-.41,0-.75-.34-.75-.75V8.75Zm2.75-1.25c-.69,0-1.25,.56-1.25,1.25v8.25h4.5V8.75c0-.69-.56-1.25-1.25-1.25h-2Z"
      />
      <path
        className="cls-1"
        d="M10.75,3c.41,0,.75,.34,.75,.75v3c0,.41-.34,.75-.75,.75s-.75-.34-.75-.75V3.75c0-.41,.34-.75,.75-.75Z"
      />
      <path
        className="cls-1"
        d="M7,4.25c0-.41,.34-.75,.75-.75h5.5c.2,0,.39,.08,.53,.22l2.5,2.5c.29,.29,.29,.77,0,1.06-.29,.29-.77,.29-1.06,0l-2.28-2.28H7.75c-.41,0-.75-.34-.75-.75Z"
      />
    </svg>
  );
}
