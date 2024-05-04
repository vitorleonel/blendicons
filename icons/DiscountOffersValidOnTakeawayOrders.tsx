export function DiscountOffersValidOnTakeawayOrders({
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
        d="M20.25,24H3.75C3.336,24,3,23.664,3,23.25V8.645c0-0.09,0.016-0.179,0.047-0.263l1.456-3.895C4.613,4.194,4.893,4,5.206,4
	h13.588c0.313,0,0.593,0.194,0.703,0.487l1.456,3.895C20.984,8.466,21,8.555,21,8.645V23.25C21,23.664,20.664,24,20.25,24z
	 M4.5,22.5h15V8.78L18.273,5.5H5.727L4.5,8.78V22.5z"
      />
      <path
        d="M17.25,24c-0.414,0-0.75-0.336-0.75-0.75V8.645c0-0.083,0.014-0.165,0.041-0.243l1.25-3.645
	c0.134-0.393,0.561-0.603,0.953-0.466c0.392,0.134,0.601,0.561,0.466,0.953L18,8.77v14.48C18,23.664,17.664,24,17.25,24z"
      />
      <path
        d="M18.75,5.5H5.25C4.836,5.5,4.5,5.164,4.5,4.75V1.732C4.5,0.777,5.277,0,6.232,0h11.536C18.723,0,19.5,0.777,19.5,1.732V4.75
	C19.5,5.164,19.164,5.5,18.75,5.5z M6,4h12V1.732C18,1.604,17.896,1.5,17.768,1.5H6.232C6.104,1.5,6,1.604,6,1.732V4z"
      />
      <path
        d="M9.25,19c-0.138,0-0.277-0.038-0.402-0.117c-0.349-0.223-0.452-0.686-0.23-1.036l3.5-5.5c0.223-0.35,0.687-0.452,1.036-0.23
	c0.349,0.223,0.452,0.686,0.23,1.036l-3.5,5.5C9.74,18.877,9.497,19,9.25,19z"
      />
      <circle cx="10" cy="13" r="1" />
      <circle cx="12" cy="18" r="1" />
    </svg>
  );
}
