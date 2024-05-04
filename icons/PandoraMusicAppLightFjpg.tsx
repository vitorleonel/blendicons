export function PandoraMusicAppLightFjpg({
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
        d="M3.25,3c0,-0.41421 0.33579,-0.75 0.75,-0.75h8c3.7279,0 6.75,3.02208 6.75,6.75c0,3.7279 -3.0221,6.75 -6.75,6.75h-1.25v5.25c0,0.4142 -0.3358,0.75 -0.75,0.75h-6c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-18Zm1.5,0.75v16.5h4.5v-5.25c0,-0.4142 0.33579,-0.75 0.75,-0.75h2c2.8995,0 5.25,-2.3505 5.25,-5.25c0,-2.89949 -2.3505,-5.25 -5.25,-5.25h-7.25Z"
        fill="#000"
        fill-rule="evenodd"
      ></path>
    </svg>
  );
}
