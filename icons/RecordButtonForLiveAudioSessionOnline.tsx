export function RecordButtonForLiveAudioSessionOnline({
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
      <g fill="#000">
        <path d="M1.25,2c0,-0.41421 0.33579,-0.75 0.75,-0.75h3c0.41421,0 0.75,0.33579 0.75,0.75c0,0.41421 -0.33579,0.75 -0.75,0.75h-2.25v2.25c0,0.41421 -0.33579,0.75 -0.75,0.75c-0.41421,0 -0.75,-0.33579 -0.75,-0.75v-3Z"></path>
        <path d="M2,22.75c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-3c0,-0.4142 0.33579,-0.75 0.75,-0.75c0.41421,0 0.75,0.3358 0.75,0.75v2.25h2.25c0.41421,0 0.75,0.3358 0.75,0.75c0,0.4142 -0.33579,0.75 -0.75,0.75h-3Z"></path>
        <path d="M22.75,2c0,-0.41421 -0.3358,-0.75 -0.75,-0.75h-3c-0.4142,0 -0.75,0.33579 -0.75,0.75c0,0.41421 0.3358,0.75 0.75,0.75h2.25v2.25c0,0.41421 0.3358,0.75 0.75,0.75c0.4142,0 0.75,-0.33579 0.75,-0.75v-3Z"></path>
        <path d="M22.75,22c0,0.4142 -0.3358,0.75 -0.75,0.75h-3c-0.4142,0 -0.75,-0.3358 -0.75,-0.75c0,-0.4142 0.3358,-0.75 0.75,-0.75h2.25v-2.25c0,-0.4142 0.3358,-0.75 0.75,-0.75c0.4142,0 0.75,0.3358 0.75,0.75v3Z"></path>
        <path
          fill-rule="evenodd"
          d="M12,6.25c-3.17564,0 -5.75,2.57436 -5.75,5.75c0,3.1756 2.57436,5.75 5.75,5.75c3.1756,0 5.75,-2.5744 5.75,-5.75c0,-3.17564 -2.5744,-5.75 -5.75,-5.75Zm-4.25,5.75c0,-2.34721 1.90279,-4.25 4.25,-4.25c2.3472,0 4.25,1.90279 4.25,4.25c0,2.3472 -1.9028,4.25 -4.25,4.25c-2.34721,0 -4.25,-1.9028 -4.25,-4.25Z"
        ></path>
      </g>
    </svg>
  );
}
