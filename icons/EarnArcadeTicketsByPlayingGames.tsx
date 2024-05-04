export function EarnArcadeTicketsByPlayingGames({
  size = 24,
}: {
  size?: number;
}): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21.5 13.5"
    >
      <defs></defs>
      <path
        className="cls-1"
        d="M0,.75C0,.34,.34,0,.75,0H20.75c.41,0,.75,.34,.75,.75V3.75c0,.41-.34,.75-.75,.75-1.24,0-2.25,1.01-2.25,2.25s1.01,2.25,2.25,2.25c.41,0,.75,.34,.75,.75v3c0,.41-.34,.75-.75,.75H.75c-.41,0-.75-.34-.75-.75v-3c0-.41,.34-.75,.75-.75,1.24,0,2.25-1.01,2.25-2.25S1.99,4.5,.75,4.5c-.41,0-.75-.34-.75-.75V.75Zm1.5,.75v1.58c1.71,.35,3,1.86,3,3.67s-1.29,3.33-3,3.68v1.57H20v-1.57c-1.71-.35-3-1.86-3-3.68s1.29-3.33,3-3.67V1.5H1.5Z"
      />
      <path
        className="cls-1"
        d="M6.5,5.25c0-.97,.78-1.75,1.75-1.75h5c.97,0,1.75,.78,1.75,1.75v2.5c0,.97-.78,1.75-1.75,1.75-.88,0-1.61-.65-1.73-1.5h-1.54c-.12,.85-.85,1.5-1.73,1.5-.97,0-1.75-.78-1.75-1.75v-2.5Zm1.75-.25c-.14,0-.25,.11-.25,.25v2.5c0,.14,.11,.25,.25,.25s.25-.11,.25-.25v-.5c0-.41,.34-.75,.75-.75h3c.41,0,.75,.34,.75,.75v.5c0,.14,.11,.25,.25,.25s.25-.11,.25-.25v-2.5c0-.14-.11-.25-.25-.25h-5Z"
      />
    </svg>
  );
}
