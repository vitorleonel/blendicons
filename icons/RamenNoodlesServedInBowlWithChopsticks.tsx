export function RamenNoodlesServedInBowlWithChopsticks({
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
        <path d="M1.25,8.00488c0,-0.41421 0.33579,-0.75 0.75,-0.75h15.3125c0.4142,0 0.75,0.33579 0.75,0.75v2.09202c0,3.7279 -3.0221,6.75 -6.75,6.75h-3.3125c-3.72792,0 -6.75,-3.0221 -6.75,-6.75v-2.09202Zm1.5,0.75v1.34202c0,2.8995 2.35051,5.25 5.25,5.25h3.3125c2.8995,0 5.25,-2.3505 5.25,-5.25v-1.34202h-13.8125Z"></path>
        <path d="M5.52075,16.0967c0,-0.4142 0.33579,-0.75 0.75,-0.75h6.77085c0.4142,0 0.75,0.3358 0.75,0.75v2.3212c0,0.4142 -0.3358,0.75 -0.75,0.75h-6.77085c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-2.3212Zm1.5,0.75v0.8212h5.27085v-0.8212h-5.27085Z"></path>
        <path d="M19.6562,4.25c0.4143,0 0.75,0.33579 0.75,0.75v13.5c0,0.4142 -0.3357,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.3358 -0.75,-0.75v-13.5c0,-0.41421 0.3358,-0.75 0.75,-0.75Z"></path>
        <path d="M22.1562,4.25c0.4143,0 0.75,0.33579 0.75,0.75v13.5c0,0.4142 -0.3357,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.3358 -0.75,-0.75v-13.5c0,-0.41421 0.3358,-0.75 0.75,-0.75Z"></path>
      </g>
    </svg>
  );
}
