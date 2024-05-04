export function ShieldHelpToProtectTheSoftware({
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
      <path
        d="M3.75,2c0,-0.41421 0.33579,-0.75 0.75,-0.75h15c0.4142,0 0.75,0.33579 0.75,0.75v12.0775c0,1.443 -0.6559,2.8077 -1.7827,3.7091l-5.9988,4.7991c-0.2739,0.2191 -0.6631,0.2191 -0.937,0l-5.9988,-4.7991c-1.12677,-0.9014 -1.7827,-2.2661 -1.7827,-3.7091v-12.0775Zm1.5,0.75v11.3275c0,0.9873 0.44879,1.9211 1.21974,2.5378l5.53026,4.4242l5.5303,-4.4242c0.7709,-0.6167 1.2197,-1.5505 1.2197,-2.5378v-11.3275h-13.5Z"
        fill="#000"
        fill-rule="evenodd"
      ></path>
    </svg>
  );
}
