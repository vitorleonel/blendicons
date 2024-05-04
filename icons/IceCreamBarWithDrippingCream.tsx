export function IceCreamBarWithDrippingCream({
  size = 24,
}: {
  size?: number;
}): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      version="1.1"
      viewBox="0 0 25 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g fill="#000" fill-rule="evenodd">
        <path d="M6.27734,5.5c0,-2.62335 2.12665,-4.75 4.74996,-4.75h2c2.6234,0 4.75,2.12665 4.75,4.75v14c0,0.4142 -0.3357,0.75 -0.75,0.75h-9.99996c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-14Zm4.74996,-3.25c-1.79488,0 -3.24996,1.45507 -3.24996,3.25v13.25h8.49996v-13.25c0,-1.79493 -1.455,-3.25 -3.25,-3.25h-2Z"></path>
        <path d="M12.0273,18.75c0.4143,0 0.75,0.3358 0.75,0.75v3c0,0.4142 -0.3357,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.3358 -0.75,-0.75v-3c0,-0.4142 0.3358,-0.75 0.75,-0.75Z"></path>
        <path d="M10.2773,7.5c0,-1.24264 1.0074,-2.25 2.25,-2.25c1.2427,0 2.25,1.00736 2.25,2.25v0.5c0,0.69036 0.5597,1.25 1.25,1.25h1c0.4143,0 0.75,0.33579 0.75,0.75c0,0.4142 -0.3357,0.75 -0.75,0.75h-1c-1.5187,0 -2.75,-1.23122 -2.75,-2.75v-0.5c0,-0.41421 -0.3357,-0.75 -0.75,-0.75c-0.4142,0 -0.75,0.33579 -0.75,0.75v2c0,2.3472 -1.90275,4.25 -4.24996,4.25h-0.5c-0.41421,0 -0.75,-0.3358 -0.75,-0.75c0,-0.4142 0.33579,-0.75 0.75,-0.75h0.5c1.51879,0 2.74996,-1.2312 2.74996,-2.75v-2Z"></path>
      </g>
    </svg>
  );
}
