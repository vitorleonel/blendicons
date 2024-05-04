export function ElevatorWithUpAndDownArrowsInTheHospitalPremises({
  size = 24,
}: {
  size?: number;
}): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      version="1.1"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g fill="#000" fill-rule="evenodd">
        <path d="M22.75,3c0,-0.9665 -0.7835,-1.75 -1.75,-1.75h-18c-0.9665,0 -1.75,0.7835 -1.75,1.75v18c0,0.9665 0.7835,1.75 1.75,1.75h18c0.9665,0 1.75,-0.7835 1.75,-1.75v-18Zm-1.75,-0.25c0.1381,0 0.25,0.11193 0.25,0.25v18c0,0.1381 -0.1119,0.25 -0.25,0.25h-18c-0.13807,0 -0.25,-0.1119 -0.25,-0.25v-18c0,-0.13807 0.11193,-0.25 0.25,-0.25h18Z"></path>
        <path d="M12,1.25c0.4142,0 0.75,0.33579 0.75,0.75v20c0,0.4142 -0.3358,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.3358 -0.75,-0.75v-20c0,-0.41421 0.3358,-0.75 0.75,-0.75Z"></path>
        <path d="M7,9.25c0.28408,0 0.54378,0.1605 0.67082,0.41459l2,4.00001c0.11625,0.2325 0.10382,0.5086 -0.03283,0.7297c-0.13666,0.2211 -0.37806,0.3557 -0.63799,0.3557h-4c-0.25993,0 -0.50133,-0.1346 -0.63799,-0.3557c-0.13665,-0.2211 -0.14908,-0.4972 -0.03283,-0.7297l2,-4.00001c0.12704,-0.25409 0.38674,-0.41459 0.67082,-0.41459Zm-0.78647,4h1.57295l-0.78648,-1.5729l-0.78647,1.5729Z"></path>
        <path d="M17.5,14.75c0.2841,0 0.5438,-0.1605 0.6708,-0.4146l2,-4c0.1163,-0.2325 0.1038,-0.50859 -0.0328,-0.7297c-0.1367,-0.22111 -0.3781,-0.3557 -0.638,-0.3557h-4c-0.2599,0 -0.5013,0.13459 -0.638,0.3557c-0.1366,0.22111 -0.1491,0.4972 -0.0328,0.7297l2,4c0.127,0.2541 0.3867,0.4146 0.6708,0.4146Zm-0.7865,-4h1.573l-0.7865,1.5729l-0.7865,-1.5729Z"></path>
      </g>
    </svg>
  );
}
