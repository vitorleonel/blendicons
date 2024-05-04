export function UsingAnArcadeMachineRequiresInsertingCoin({
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
        d="M21.28,14.22c.14,.14,.22,.33,.22,.53v6c0,.41-.34,.75-.75,.75H.75c-.41,0-.75-.34-.75-.75v-6c0-.41,.34-.75,.75-.75H20.75c.2,0,.39,.08,.53,.22Zm-1.28,1.28H1.5v4.5H20v-4.5Z"
      />
      <path
        className="cls-1"
        d="M16.5,17.75c0,.41-.34,.75-.75,.75H5.75c-.41,0-.75-.34-.75-.75s.34-.75,.75-.75H15.75c.41,0,.75,.34,.75,.75Z"
      />
      <path
        className="cls-1"
        d="M16,6.75c0-2.9-2.35-5.25-5.25-5.25S5.5,3.85,5.5,6.75s2.35,5.25,5.25,5.25,5.25-2.35,5.25-5.25ZM10.75,0c3.73,0,6.75,3.02,6.75,6.75s-3.02,6.75-6.75,6.75-6.75-3.02-6.75-6.75S7.02,0,10.75,0Z"
      />
      <path
        className="cls-1"
        d="M10.75,3c.41,0,.75,.34,.75,.75v6c0,.41-.34,.75-.75,.75s-.75-.34-.75-.75V3.75c0-.41,.34-.75,.75-.75Z"
      />
    </svg>
  );
}
