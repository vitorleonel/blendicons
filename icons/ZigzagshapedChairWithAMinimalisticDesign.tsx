export function ZigzagshapedChairWithAMinimalisticDesign({
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
        <path d="M14.75,1.5c0,-0.41421 0.3358,-0.75 0.75,-0.75h3c0.4142,0 0.75,0.33579 0.75,0.75v10c0,0.4142 -0.3358,0.75 -0.75,0.75h-3c-0.4142,0 -0.75,-0.3358 -0.75,-0.75v-10Zm1.5,0.75v8.5h1.5v-8.5h-1.5Z"></path>
        <path d="M4.93762,11.9962c-0.1209,-0.137 -0.18762,-0.3135 -0.18762,-0.4962v-3c0,-0.41421 0.33579,-0.75 0.75,-0.75h10c0.4142,0 0.75,0.33579 0.75,0.75v3c0,0.4142 -0.3358,0.75 -0.75,0.75h-2.838l6.4004,7.2538c0.1951,0.2211 0.2425,0.5359 0.1212,0.8047c-0.1213,0.2687 -0.3888,0.4415 -0.6836,0.4415h-5.5c-0.2152,0 -0.42,-0.0924 -0.5624,-0.2538l-7.49998,-8.5Zm1.31238,-0.7798l7.0885,8.0336h3.4995l-6.4004,-7.2538c-0.1951,-0.2211 -0.2425,-0.5359 -0.1212,-0.8047c0.1213,-0.2687 0.3888,-0.4415 0.6836,-0.4415h3.75v-1.5h-8.5v1.9664Z"></path>
        <path d="M4.25,20c0,-0.4142 0.33579,-0.75 0.75,-0.75h13.5c0.4142,0 0.75,0.3358 0.75,0.75c0,0.4142 -0.3358,0.75 -0.75,0.75h-13.5c-0.41421,0 -0.75,-0.3358 -0.75,-0.75Z"></path>
      </g>
    </svg>
  );
}
