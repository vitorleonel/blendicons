export function MusicFileOnAComputerForPlayback({
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
        <path d="M9.75,12c0,-0.4142 -0.33579,-0.75 -0.75,-0.75c-0.41421,0 -0.75,0.3358 -0.75,0.75v6c0,0.4142 0.33579,0.75 0.75,0.75c0.41421,0 0.75,-0.3358 0.75,-0.75v-6Z"></path>
        <path d="M12,10.25c0.4142,0 0.75,0.3358 0.75,0.75v8c0,0.4142 -0.3358,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.3358 -0.75,-0.75v-8c0,-0.4142 0.3358,-0.75 0.75,-0.75Z"></path>
        <path d="M15.75,12c0,-0.4142 -0.3358,-0.75 -0.75,-0.75c-0.4142,0 -0.75,0.3358 -0.75,0.75v6c0,0.4142 0.3358,0.75 0.75,0.75c0.4142,0 0.75,-0.3358 0.75,-0.75v-6Z"></path>
        <path
          fill-rule="evenodd"
          d="M20.224,6.5329c0.2798,0.38465 0.4539,0.83374 0.5079,1.30273c0.0119,0.0529 0.0181,0.10791 0.0181,0.16437c0,0.01743 -0.0006,0.03472 -0.0018,0.05185c0.0012,0.03278 0.0018,0.06563 0.0018,0.09852v11.8496c0,1.5188 -1.2312,2.75 -2.75,2.75h-12c-1.51878,0 -2.75,-1.2312 -2.75,-2.75v-16c0,-1.51878 1.23122,-2.75 2.75,-2.75h8.9816c0.8798,0 1.7065,0.42098 2.224,1.13253l3.0184,4.15037Zm-14.224,-3.7829c-0.69036,0 -1.25,0.55964 -1.25,1.25v16c0,0.6904 0.55964,1.25 1.25,1.25h12c0.6904,0 1.25,-0.5596 1.25,-1.25v-11.25h-3.25c-0.4142,0 -0.75,-0.33579 -0.75,-0.75v-5.22085c-0.0873,-0.0192 -0.1772,-0.02915 -0.2684,-0.02915h-8.9816Zm10.75,4.5h2.1408l-2.1408,-2.94361v2.94361Z"
        ></path>
      </g>
    </svg>
  );
}
