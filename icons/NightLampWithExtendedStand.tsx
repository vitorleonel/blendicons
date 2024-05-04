export function NightLampWithExtendedStand({
  size = 24,
}: {
  size?: number;
}): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      version="1.1"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g fill="#000" fill-rule="evenodd">
        <path d="M7.26457,1.35291c0.07011,-0.35057 0.37793,-0.60291 0.73544,-0.60291h7.99999c0.3575,0 0.6653,0.25234 0.7354,0.60291l2,9.99999c0.0441,0.2203 -0.0129,0.4488 -0.1554,0.6226c-0.1424,0.1738 -0.3553,0.2745 -0.58,0.2745h-12c-0.2247,0 -0.43756,-0.1007 -0.58001,-0.2745c-0.14245,-0.1738 -0.1995,-0.4023 -0.15543,-0.6226l2,-9.99999Zm1.35029,0.89709l-1.7,8.5h10.1703l-1.7,-8.5h-6.77034Z"></path>
        <path d="M12,10.75c0.4142,0 0.75,0.3358 0.75,0.75v11c0,0.4142 -0.3358,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.3358 -0.75,-0.75v-11c0,-0.4142 0.3358,-0.75 0.75,-0.75Z"></path>
        <path d="M15.5,10.75c0.4142,0 0.75,0.3358 0.75,0.75v2.5c0,0.4142 -0.3358,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.3358 -0.75,-0.75v-2.5c0,-0.4142 0.3358,-0.75 0.75,-0.75Z"></path>
        <path d="M8.25,22.5c0,-0.4142 0.33579,-0.75 0.75,-0.75h6c0.4142,0 0.75,0.3358 0.75,0.75c0,0.4142 -0.3358,0.75 -0.75,0.75h-6c-0.41421,0 -0.75,-0.3358 -0.75,-0.75Z"></path>
      </g>
    </svg>
  );
}
