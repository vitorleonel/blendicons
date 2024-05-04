export function HalfPowerBatteryProvidesLimitedDeviceUsage({
  size = 24,
}: {
  size?: number;
}): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      version="1.1"
      id="Regular"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 24 24"
      enable-background="new 0 0 24 24"
      xmlSpace="preserve"
    >
      <path
        d="M19.337,19H2.707C1.214,19,0,17.801,0,16.327V7.673C0,6.199,1.214,5,2.707,5h16.63c1.492,0,2.707,1.199,2.707,2.673v0.212
	h0.229C23.225,7.885,24,8.652,24,9.596v4.808c0,0.944-0.775,1.711-1.728,1.711h-0.229v0.212C22.043,17.801,20.829,19,19.337,19z
	 M2.707,6.5C2.041,6.5,1.5,7.026,1.5,7.673v8.654c0,0.646,0.541,1.173,1.207,1.173h16.63c0.666,0,1.207-0.526,1.207-1.173v-0.962
	c0-0.414,0.336-0.75,0.75-0.75h0.979c0.126,0,0.228-0.095,0.228-0.211V9.596c0-0.117-0.102-0.211-0.228-0.211h-0.979
	c-0.414,0-0.75-0.336-0.75-0.75V7.673c0-0.646-0.541-1.173-1.207-1.173H2.707z"
      />
      <path
        d="M13.5,19c-0.339,0-0.646-0.231-0.729-0.575l-3-12.5c-0.097-0.402,0.152-0.808,0.555-0.904
	c0.401-0.098,0.808,0.152,0.904,0.555l3,12.5c0.097,0.402-0.152,0.808-0.555,0.904C13.616,18.994,13.557,19,13.5,19z"
      />
    </svg>
  );
}
