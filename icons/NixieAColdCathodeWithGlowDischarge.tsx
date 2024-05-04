export function NixieAColdCathodeWithGlowDischarge({
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
        <path d="M12,2.75c-0.6904,0 -1.25,0.55964 -1.25,1.25v1c0,0.19891 -0.079,0.38968 -0.2197,0.53033l-1.7803,1.78033v7.93934h6.5v-7.93934l-1.7803,-1.78033c-0.1407,-0.14065 -0.2197,-0.33142 -0.2197,-0.53033v-1c0,-0.69036 -0.5596,-1.25 -1.25,-1.25Zm-2.75,1.25c0,-1.51878 1.2312,-2.75 2.75,-2.75c1.5188,0 2.75,1.23122 2.75,2.75v0.68934l1.7803,1.78033c0.1407,0.14065 0.2197,0.33142 0.2197,0.53033v9c0,0.4142 -0.3358,0.75 -0.75,0.75h-8c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-9c0,-0.19891 0.07902,-0.38968 0.21967,-0.53033l1.78033,-1.78033v-0.68934Z"></path>
        <path d="M7.25,16c0,-0.4142 0.33579,-0.75 0.75,-0.75h8c0.4142,0 0.75,0.3358 0.75,0.75v3c0,0.4142 -0.3358,0.75 -0.75,0.75h-8c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-3Zm1.5,0.75v1.5h6.5v-1.5h-6.5Z"></path>
        <path d="M2.25,19c0,-0.4142 0.33579,-0.75 0.75,-0.75h18c0.4142,0 0.75,0.3358 0.75,0.75v3c0,0.4142 -0.3358,0.75 -0.75,0.75h-18c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-3Zm1.5,0.75v1.5h16.5v-1.5h-16.5Z"></path>
        <path d="M12,11.25c0.4142,0 0.75,0.3358 0.75,0.75v4c0,0.4142 -0.3358,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.3358 -0.75,-0.75v-4c0,-0.4142 0.3358,-0.75 0.75,-0.75Z"></path>
      </g>
    </svg>
  );
}
