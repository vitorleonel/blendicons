export function AdditionPlusSymbolToAddNewObjects({
  size = 24,
}: {
  size?: number;
}): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      version="1.1"
      id="regular"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 24 24"
      enable-background="new 0 0 24 24"
      xmlSpace="preserve"
    >
      <g>
        <path
          d="M21.25,12.75H2.75C2.336,12.75,2,12.414,2,12s0.336-0.75,0.75-0.75h18.5c0.414,0,0.75,0.336,0.75,0.75
		S21.664,12.75,21.25,12.75z"
        />
      </g>
      <g>
        <path
          d="M12,22c-0.414,0-0.75-0.336-0.75-0.75V2.75C11.25,2.336,11.586,2,12,2s0.75,0.336,0.75,0.75v18.5
		C12.75,21.664,12.414,22,12,22z"
        />
      </g>
    </svg>
  );
}
