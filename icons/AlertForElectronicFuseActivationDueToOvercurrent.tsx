export function AlertForElectronicFuseActivationDueToOvercurrent({
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
        d="M22.289,12H11.711C10.768,12,10,11.235,10,10.295c0-0.333,0.094-0.649,0.271-0.914l5.273-8.566C15.838,0.317,16.399,0,17,0
	s1.162,0.317,1.463,0.827l5.282,8.579C23.906,9.646,24,9.962,24,10.295C24,11.235,23.232,12,22.289,12z M17,1.5
	c-0.087,0-0.146,0.046-0.172,0.089L11.5,10.295c0,0.111,0.097,0.205,0.211,0.205h10.577c0.115,0,0.211-0.094,0.211-0.205
	c0-0.034-0.006-0.063-0.017-0.079l-5.304-8.615C17.146,1.546,17.087,1.5,17,1.5z"
      />
      <path d="M17,8c-0.414,0-0.75-0.336-0.75-0.75v-3.5C16.25,3.336,16.586,3,17,3s0.75,0.336,0.75,0.75v3.5C17.75,7.664,17.414,8,17,8z" />
      <ellipse cx="17" cy="9.341" rx="0.481" ry="0.477" />
      <path
        d="M15.25,21c-0.414,0-0.75-0.336-0.75-0.75v-4.5c0-0.414,0.336-0.75,0.75-0.75S16,15.336,16,15.75v4.5
	C16,20.664,15.664,21,15.25,21z"
      />
      <path d="M2.75,21C2.336,21,2,20.664,2,20.25V6c0-0.414,0.336-0.75,0.75-0.75S3.5,5.586,3.5,6v14.25C3.5,20.664,3.164,21,2.75,21z" />
      <path
        d="M9.5,21c-0.282,0-0.553-0.16-0.68-0.433l-1.75-3.75c-0.175-0.375-0.013-0.822,0.362-0.997
	c0.377-0.176,0.821-0.013,0.997,0.362l1.75,3.75c0.175,0.375,0.013,0.822-0.362,0.997C9.714,20.978,9.606,21,9.5,21z"
      />
      <path
        d="M15.75,24H2.25C1.009,24,0,22.991,0,21.75s1.009-2.25,2.25-2.25h13.5c1.241,0,2.25,1.009,2.25,2.25S16.991,24,15.75,24z
	 M2.25,21c-0.414,0-0.75,0.336-0.75,0.75s0.336,0.75,0.75,0.75h13.5c0.414,0,0.75-0.336,0.75-0.75S16.164,21,15.75,21H2.25z"
      />
      <path
        d="M8.25,6.5h-6C1.009,6.5,0,5.491,0,4.25S1.009,2,2.25,2h8C10.664,2,11,2.336,11,2.75S10.664,3.5,10.25,3.5h-8
	C1.836,3.5,1.5,3.836,1.5,4.25S1.836,5,2.25,5h6C8.664,5,9,5.336,9,5.75S8.664,6.5,8.25,6.5z"
      />
    </svg>
  );
}
