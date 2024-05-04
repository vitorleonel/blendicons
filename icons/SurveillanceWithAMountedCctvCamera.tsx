export function SurveillanceWithAMountedCctvCamera({
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
        <path d="M1.25,3c0,-0.41421 0.33579,-0.75 0.75,-0.75h12c2.6234,0 4.75,2.12665 4.75,4.75v4c0,0.4142 -0.3358,0.75 -0.75,0.75h-8c-0.23607,0 -0.45836,-0.1111 -0.6,-0.3l-2.775,-3.7h-4.625c-0.41421,0 -0.75,-0.33579 -0.75,-0.75v-4Zm1.5,0.75v2.5h4.25c0.23607,0 0.45836,0.11115 0.6,0.3l2.775,3.7h6.875v-3.25c0,-1.79493 -1.4551,-3.25 -3.25,-3.25h-11.25Z"></path>
        <path d="M2.40885,6.53844c0.14213,-0.18204 0.3602,-0.28844 0.59115,-0.28844h4c0.23607,0 0.45836,0.11115 0.6,0.3l3,4c0.1704,0.2273 0.1979,0.5313 0.0708,0.7854c-0.127,0.2541 -0.3867,0.4146 -0.6708,0.4146h-6c-0.34415,0 -0.64414,-0.2342 -0.72761,-0.5681l-1,-4c-0.05601,-0.22405 -0.00568,-0.46142 0.13646,-0.64346Zm1.55173,1.21156l0.625,2.5h3.91442l-1.875,-2.5h-2.66442Z"></path>
        <path d="M18.25,14c0,-0.4142 0.3358,-0.75 0.75,-0.75h3c0.4142,0 0.75,0.3358 0.75,0.75v7c0,0.4142 -0.3358,0.75 -0.75,0.75h-3c-0.4142,0 -0.75,-0.3358 -0.75,-0.75v-7Zm1.5,0.75v5.5h1.5v-5.5h-1.5Z"></path>
        <path d="M12.7794,10.2834c0.3959,-0.1218 0.8156,0.1003 0.9374,0.4962l1.8371,5.9706h3.4461c0.4142,0 0.75,0.3358 0.75,0.75c0,0.4142 -0.3358,0.75 -0.75,0.75h-4c-0.3293,0 -0.62,-0.2147 -0.7168,-0.5294l-2,-6.5c-0.1218,-0.3959 0.1003,-0.8156 0.4962,-0.9374Z"></path>
      </g>
    </svg>
  );
}
