export function LogisticShipInQueueForNextShipmentDelivery({
  size = 24,
}: {
  size?: number;
}): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      version="1.1"
      id="reg"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 24 24"
      enable-background="new 0 0 24 24"
      xmlSpace="preserve"
    >
      <path
        d="M6.5,13C2.916,13,0,10.084,0,6.5S2.916,0,6.5,0S13,2.916,13,6.5S10.084,13,6.5,13z M6.5,1.5c-2.757,0-5,2.243-5,5
	s2.243,5,5,5s5-2.243,5-5S9.257,1.5,6.5,1.5z"
      />
      <path
        d="M8.25,9.75c-0.192,0-0.384-0.073-0.53-0.22l-2-2C5.579,7.39,5.5,7.199,5.5,7V3.75C5.5,3.336,5.836,3,6.25,3S7,3.336,7,3.75
	v2.939l1.78,1.78c0.293,0.293,0.293,0.768,0,1.061C8.634,9.677,8.442,9.75,8.25,9.75z"
      />
      <path
        d="M5.75,22h-3.5c-0.414,0-0.75-0.336-0.75-0.75v-7.11c0-0.414,0.336-0.75,0.75-0.75S3,13.726,3,14.14v6.36h2.75
	c0.414,0,0.75,0.336,0.75,0.75S6.164,22,5.75,22z"
      />
      <path
        d="M16.75,22H9.23c-0.414,0-0.75-0.336-0.75-0.75s0.336-0.75,0.75-0.75H16v-9h-1.86c-0.414,0-0.75-0.336-0.75-0.75
	S13.726,10,14.14,10h2.61c0.414,0,0.75,0.336,0.75,0.75v10.5C17.5,21.664,17.164,22,16.75,22z"
      />
      <path
        d="M23.25,22h-2.021c-0.414,0-0.75-0.336-0.75-0.75s0.336-0.75,0.75-0.75H22.5v-2.2c0-1.792-1.458-3.25-3.25-3.25H17.5v5.45
	h0.25c0.414,0,0.75,0.336,0.75,0.75S18.164,22,17.75,22h-1C16.336,22,16,21.664,16,21.25V14.3c0-0.414,0.336-0.75,0.75-0.75h2.5
	c2.619,0,4.75,2.131,4.75,4.75v2.95C24,21.664,23.664,22,23.25,22z"
      />
      <path
        d="M7.5,24C6.121,24,5,22.878,5,21.5S6.121,19,7.5,19s2.5,1.122,2.5,2.5S8.879,24,7.5,24z M7.5,20.5c-0.552,0-1,0.449-1,1
	s0.448,1,1,1s1-0.449,1-1S8.052,20.5,7.5,20.5z"
      />
      <path
        d="M19.5,24c-1.379,0-2.5-1.122-2.5-2.5s1.121-2.5,2.5-2.5s2.5,1.122,2.5,2.5S20.879,24,19.5,24z M19.5,20.5
	c-0.552,0-1,0.449-1,1s0.448,1,1,1s1-0.449,1-1S20.052,20.5,19.5,20.5z"
      />
    </svg>
  );
}
