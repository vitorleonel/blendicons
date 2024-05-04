export function BeardShavingRazorBladeWithTripleSafetyGuard({
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
      <path
        d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12S18.617,24,12,24z M12,1.5C6.21,1.5,1.5,6.21,1.5,12
	S6.21,22.5,12,22.5S22.5,17.79,22.5,12S17.79,1.5,12,1.5z"
      />
      <path
        d="M9.282,15.499c-0.443,0-0.886-0.168-1.223-0.505l-1.553-1.553c-0.674-0.674-0.674-1.771,0-2.445l4.49-4.49
	c0.674-0.674,1.771-0.674,2.445,0l1.553,1.553c0.674,0.674,0.674,1.771,0,2.445l-4.49,4.49C10.167,15.331,9.724,15.499,9.282,15.499
	z M12.218,7.5c-0.059,0-0.117,0.022-0.162,0.067l-4.49,4.49c-0.089,0.089-0.089,0.234,0,0.324l1.553,1.553
	c0.089,0.089,0.235,0.089,0.324,0l4.49-4.49c0.089-0.089,0.089-0.234,0-0.324L12.38,7.567C12.336,7.522,12.277,7.5,12.218,7.5z"
      />
      <path
        d="M18.25,19c-0.192,0-0.384-0.073-0.53-0.22l-6-6c-0.293-0.293-0.293-0.768,0-1.061s0.768-0.293,1.061,0l6,6
	c0.293,0.293,0.293,0.768,0,1.061C18.634,18.927,18.442,19,18.25,19z"
      />
    </svg>
  );
}
