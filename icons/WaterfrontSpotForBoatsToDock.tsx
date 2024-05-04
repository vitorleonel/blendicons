export function WaterfrontSpotForBoatsToDock({
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
      viewBox="0 0 21.5 18.5"
    >
      <defs></defs>
      <path
        className="cls-1"
        d="M3.25,8.92l-1.35,1.63c-.23,.27-.33,.63-.28,.98l.78,5.48h1.7l.78-5.48c.05-.35-.05-.71-.28-.98l-1.35-1.63Zm-.96-1.19c.5-.6,1.42-.6,1.92,0l1.55,1.86c.5,.6,.72,1.38,.61,2.15l-.87,6.12c-.05,.37-.37,.64-.74,.64H1.75c-.37,0-.69-.27-.74-.64L.13,11.74c-.11-.77,.11-1.55,.61-2.15l1.55-1.86Z"
      />
      <path
        className="cls-1"
        d="M18.25,8.92l-1.35,1.63c-.23,.27-.33,.63-.28,.98l.78,5.48h1.7l.78-5.48c.05-.35-.05-.71-.28-.98l-1.35-1.63Zm-.96-1.19c.5-.6,1.42-.6,1.92,0l1.55,1.86c.5,.6,.72,1.38,.61,2.15l-.87,6.12c-.05,.37-.37,.64-.74,.64h-3c-.37,0-.69-.27-.74-.64l-.87-6.12c-.11-.77,.11-1.55,.61-2.15l1.55-1.86Z"
      />
      <path
        className="cls-1"
        d="M0,.75C0,.34,.34,0,.75,0H20.75c.41,0,.75,.34,.75,.75V5.75c0,.41-.34,.75-.75,.75h-6.75v11.25c0,.41-.34,.75-.75,.75h-5c-.41,0-.75-.34-.75-.75V6.5H.75c-.41,0-.75-.34-.75-.75V.75Zm1.5,.75v3.5h6.75c.41,0,.75,.34,.75,.75v11.25h3.5V5.75c0-.41,.34-.75,.75-.75h6.75V1.5H1.5Z"
      />
    </svg>
  );
}
