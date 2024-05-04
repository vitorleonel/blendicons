export function ExplosiveWeaponOrDeviceForDamageEnemies({
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
        d="M7.75,7.5c-3.45,0-6.25,2.8-6.25,6.25s2.8,6.25,6.25,6.25,6.25-2.8,6.25-6.25-2.8-6.25-6.25-6.25ZM0,13.75c0-4.28,3.47-7.75,7.75-7.75s7.75,3.47,7.75,7.75-3.47,7.75-7.75,7.75S0,18.03,0,13.75Z"
      />
      <path
        className="cls-1"
        d="M4,3.75c0-.41,.34-.75,.75-.75h6c.41,0,.75,.34,.75,.75v3.5c0,.41-.34,.75-.75,.75s-.75-.34-.75-.75v-2.75H5.5v2.75c0,.41-.34,.75-.75,.75s-.75-.34-.75-.75V3.75Z"
      />
      <path
        className="cls-1"
        d="M3,.75c0-.41,.34-.75,.75-.75h2c1.52,0,2.75,1.23,2.75,2.75v1c0,.41-.34,.75-.75,.75s-.75-.34-.75-.75v-1c0-.69-.56-1.25-1.25-1.25H3.75c-.41,0-.75-.34-.75-.75Z"
      />
    </svg>
  );
}
