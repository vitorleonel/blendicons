export function SignIndicatingTheLocationToRecoverLostItems({
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
        d="M10.75,5c-1.24,0-2.25,1.01-2.25,2.25,0,.41-.34,.75-.75,.75s-.75-.34-.75-.75c0-2.07,1.68-3.75,3.75-3.75s3.75,1.68,3.75,3.75c0,1.81-1.29,3.33-3,3.68v2.82c0,.41-.34,.75-.75,.75s-.75-.34-.75-.75v-3.5c0-.41,.34-.75,.75-.75,1.24,0,2.25-1.01,2.25-2.25s-1.01-2.25-2.25-2.25Z"
      />
      <path
        className="cls-1"
        d="M10.75,15.5c.41,0,.75,.34,.75,.75v1c0,.41-.34,.75-.75,.75s-.75-.34-.75-.75v-1c0-.41,.34-.75,.75-.75Z"
      />
    </svg>
  );
}
