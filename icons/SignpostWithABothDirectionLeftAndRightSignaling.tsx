export function SignpostWithABothDirectionLeftAndRightSignaling({
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
        <path d="M6.96967,3.96967c0.14065,-0.14065 0.33142,-0.21967 0.53033,-0.21967h10c0.4142,0 0.75,0.33579 0.75,0.75v3c0,0.41421 -0.3358,0.75 -0.75,0.75h-10c-0.19891,0 -0.38968,-0.07902 -0.53033,-0.21967l-1.5,-1.5c-0.29289,-0.29289 -0.29289,-0.76777 0,-1.06066l1.5,-1.5Zm0.84099,1.28033l-0.75,0.75l0.75,0.75h8.93934v-1.5h-8.93934Z"></path>
        <path d="M17.4537,10.4585c-0.1396,-0.1338 -0.3255,-0.2085 -0.5189,-0.2085h-10.4348c-0.41421,0 -0.75,0.3358 -0.75,0.75v3c0,0.4142 0.33579,0.75 0.75,0.75h10.4348c0.1934,0 0.3793,-0.0747 0.5189,-0.2085l1.5652,-1.5c0.1476,-0.1415 0.2311,-0.3371 0.2311,-0.5415c0,-0.2044 -0.0835,-0.4 -0.2311,-0.5415l-1.5652,-1.5Zm-0.8203,1.2915l0.7826,0.75l-0.7826,0.75h-9.3834v-1.5h9.3834Z"></path>
        <path d="M2.25,22.5c0,-0.4142 0.33579,-0.75 0.75,-0.75h18c0.4142,0 0.75,0.3358 0.75,0.75c0,0.4142 -0.3358,0.75 -0.75,0.75h-18c-0.41421,0 -0.75,-0.3358 -0.75,-0.75Z"></path>
        <path d="M12,13.25c0.4142,0 0.75,0.3358 0.75,0.75v8.5c0,0.4142 -0.3358,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.3358 -0.75,-0.75v-8.5c0,-0.4142 0.3358,-0.75 0.75,-0.75Z"></path>
        <path d="M12,0.75c0.4142,0 0.75,0.33579 0.75,0.75v3c0,0.41421 -0.3358,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.33579 -0.75,-0.75v-3c0,-0.41421 0.3358,-0.75 0.75,-0.75Z"></path>
      </g>
    </svg>
  );
}
