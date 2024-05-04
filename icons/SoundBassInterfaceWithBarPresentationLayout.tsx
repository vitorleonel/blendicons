export function SoundBassInterfaceWithBarPresentationLayout({
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
        <path d="M9.25,3c0,-0.9665 0.7835,-1.75 1.75,-1.75h2c0.9665,0 1.75,0.7835 1.75,1.75v16c0,0.4142 -0.3358,0.75 -0.75,0.75h-4c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-16Zm1.75,-0.25c-0.1381,0 -0.25,0.11193 -0.25,0.25v15.25h2.5v-15.25c0,-0.13807 -0.1119,-0.25 -0.25,-0.25h-2Z"></path>
        <path d="M3,5.25c-0.9665,0 -1.75,0.7835 -1.75,1.75v12c0,0.4142 0.33579,0.75 0.75,0.75h4c0.41421,0 0.75,-0.3358 0.75,-0.75v-12c0,-0.9665 -0.7835,-1.75 -1.75,-1.75h-2Zm-0.25,1.75c0,-0.13807 0.11193,-0.25 0.25,-0.25h2c0.13807,0 0.25,0.11193 0.25,0.25v11.25h-2.5v-11.25Z"></path>
        <path d="M19,8.25c-0.9665,0 -1.75,0.7835 -1.75,1.75v9c0,0.4142 0.3358,0.75 0.75,0.75h4c0.4142,0 0.75,-0.3358 0.75,-0.75v-9c0,-0.9665 -0.7835,-1.75 -1.75,-1.75h-2Zm-0.25,1.75c0,-0.13807 0.1119,-0.25 0.25,-0.25h2c0.1381,0 0.25,0.11193 0.25,0.25v8.25h-2.5v-8.25Z"></path>
      </g>
      <path
        fill="#000"
        d="M2,21.25c-0.41421,0 -0.75,0.3358 -0.75,0.75c0,0.4142 0.33579,0.75 0.75,0.75h4c0.41421,0 0.75,-0.3358 0.75,-0.75c0,-0.4142 -0.33579,-0.75 -0.75,-0.75h-4Z"
      ></path>
      <g fill="#000">
        <path d="M9.25,22c0,-0.4142 0.33579,-0.75 0.75,-0.75h4c0.4142,0 0.75,0.3358 0.75,0.75c0,0.4142 -0.3358,0.75 -0.75,0.75h-4c-0.41421,0 -0.75,-0.3358 -0.75,-0.75Z"></path>
        <path d="M18,21.25c-0.4142,0 -0.75,0.3358 -0.75,0.75c0,0.4142 0.3358,0.75 0.75,0.75h4c0.4142,0 0.75,-0.3358 0.75,-0.75c0,-0.4142 -0.3358,-0.75 -0.75,-0.75h-4Z"></path>
      </g>
    </svg>
  );
}
