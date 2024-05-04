export function BucketWithAnOpenTopAndAFlatBottom({
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
        <path d="M4.43341,8.44317c0.14246,-0.16425 0.34918,-0.2586 0.56659,-0.2586h14c0.2174,0 0.4241,0.09435 0.5666,0.2586c0.1424,0.16425 0.2066,0.38223 0.1759,0.59747l-2,14c-0.0528,0.3695 -0.3693,0.644 -0.7425,0.644h-9.99999c-0.37324,0 -0.68968,-0.2745 -0.74247,-0.644l-2,-14c-0.03074,-0.21524 0.03342,-0.43322 0.17587,-0.59747Zm1.43135,1.2414l1.78572,12.5h8.69902l1.7857,-12.5h-12.2704Z"></path>
        <path d="M4.25,8.43457c0,-4.00406 3.24594,-7.25 7.25,-7.25h1c4.0041,0 7.25,3.24594 7.25,7.25v0.5c0,0.41421 -0.3358,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.33579 -0.75,-0.75v-0.5c0,-3.17564 -2.5744,-5.75 -5.75,-5.75h-1c-3.17564,0 -5.75,2.57436 -5.75,5.75v0.5c0,0.41421 -0.33579,0.75 -0.75,0.75c-0.41421,0 -0.75,-0.33579 -0.75,-0.75v-0.5Z"></path>
        <path d="M6.25,19.9346c0,-0.4142 0.33579,-0.75 0.75,-0.75h2c0.41421,0 0.75,0.3358 0.75,0.75c0,0.4142 -0.33579,0.75 -0.75,0.75h-2c-0.41421,0 -0.75,-0.3358 -0.75,-0.75Zm4.5,0c0,-0.4142 0.3358,-0.75 0.75,-0.75h5.5c0.4142,0 0.75,0.3358 0.75,0.75c0,0.4142 -0.3358,0.75 -0.75,0.75h-5.5c-0.4142,0 -0.75,-0.3358 -0.75,-0.75Z"></path>
      </g>
    </svg>
  );
}
