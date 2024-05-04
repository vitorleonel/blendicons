export function SummerSnackIcePopInTwoFlavors({
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
        <path d="M6.27734,11c0,-0.4142 0.33579,-0.75 0.75,-0.75h9.99996c0.4143,0 0.75,0.3358 0.75,0.75c0,0.4142 -0.3357,0.75 -0.75,0.75h-9.99996c-0.41421,0 -0.75,-0.3358 -0.75,-0.75Z"></path>
      </g>
    </svg>
  );
}
