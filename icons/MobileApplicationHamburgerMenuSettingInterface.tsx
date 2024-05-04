export function MobileApplicationHamburgerMenuSettingInterface({
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
          d="M20.25,12.75H3.75C3.336,12.75,3,12.414,3,12s0.336-0.75,0.75-0.75h16.5c0.414,0,0.75,0.336,0.75,0.75
		S20.664,12.75,20.25,12.75z"
        />
      </g>
      <g>
        <path d="M20.25,7H3.75C3.336,7,3,6.664,3,6.25S3.336,5.5,3.75,5.5h16.5C20.664,5.5,21,5.836,21,6.25S20.664,7,20.25,7z" />
      </g>
      <g>
        <path
          d="M20.25,18.5H3.75C3.336,18.5,3,18.164,3,17.75S3.336,17,3.75,17h16.5c0.414,0,0.75,0.336,0.75,0.75S20.664,18.5,20.25,18.5
		z"
        />
      </g>
    </svg>
  );
}
