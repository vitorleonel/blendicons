export function CurvedChairWithoutAnySideSupport({
  size = 24,
}: {
  size?: number;
}): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      version="1.1"
      viewBox="0 0 24 25"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g fill="#000" fill-rule="evenodd">
        <path d="M3.25,11.4346c0,-0.4142 0.33579,-0.75 0.75,-0.75h16c0.4142,0 0.75,0.3358 0.75,0.75v3c0,0.4142 -0.3358,0.75 -0.75,0.75h-16c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-3Zm1.5,0.75v1.5h14.5v-1.5h-14.5Z"></path>
        <path d="M4,8.68457c0.41421,0 0.75,0.33579 0.75,0.75v13c0,0.4142 -0.33579,0.75 -0.75,0.75c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-13c0,-0.41421 0.33579,-0.75 0.75,-0.75Zm16,0c0.4142,0 0.75,0.33579 0.75,0.75v13c0,0.4142 -0.3358,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.3358 -0.75,-0.75v-13c0,-0.41421 0.3358,-0.75 0.75,-0.75Z"></path>
        <path d="M3.25,9.43457c0,-4.28021 3.46979,-7.75 7.75,-7.75h2c4.2802,0 7.75,3.46979 7.75,7.75v0.5c0,0.28403 -0.1605,0.54373 -0.4146,0.67083c-0.2541,0.127 -0.5581,0.0996 -0.7854,-0.0708l-2.1333,-1.60003c-1.0819,-0.81139 -2.3977,-1.25 -3.75,-1.25h-3.3334c-1.35228,0 -2.66812,0.43861 -3.74997,1.25l-2.13333,1.60003c-0.22726,0.1704 -0.53132,0.1978 -0.78541,0.0708c-0.25409,-0.1271 -0.41459,-0.3868 -0.41459,-0.67083v-0.5Zm1.59092,-1.06819l0.84241,-0.63181c1.3415,-1.00612 2.97313,-1.55 4.64997,-1.55h3.3334c1.6768,0 3.3085,0.54388 4.65,1.55l0.8424,0.63181c-0.5068,-2.94289 -3.0715,-5.18181 -6.1591,-5.18181h-2c-3.0876,0 -5.65227,2.23892 -6.15908,5.18181Z"></path>
      </g>
    </svg>
  );
}
