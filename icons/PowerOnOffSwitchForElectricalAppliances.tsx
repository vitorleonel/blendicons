export function PowerOnOffSwitchForElectricalAppliances({
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
          d="M12,8c-0.414,0-0.75-0.336-0.75-0.75v-6.5C11.25,0.336,11.586,0,12,0s0.75,0.336,0.75,0.75v6.5C12.75,7.664,12.414,8,12,8z
		"
        />
      </g>
      <g>
        <path
          d="M12,24C5.935,24,1,19.065,1,13C1,8.396,3.911,4.239,8.243,2.655c0.389-0.141,0.819,0.058,0.962,0.447
		c0.142,0.389-0.058,0.819-0.447,0.962C5.015,5.432,2.5,9.023,2.5,13c0,5.238,4.262,9.5,9.5,9.5s9.5-4.262,9.5-9.5
		c0-3.977-2.515-7.568-6.257-8.936c-0.389-0.143-0.589-0.573-0.447-0.962s0.572-0.589,0.962-0.447C20.089,4.239,23,8.396,23,13
		C23,19.065,18.065,24,12,24z"
        />
      </g>
    </svg>
  );
}
