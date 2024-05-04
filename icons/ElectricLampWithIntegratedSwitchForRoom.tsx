export function ElectricLampWithIntegratedSwitchForRoom({
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
        <path d="M9.92438,21.75c-0.53012,0 -1.03444,-0.2288 -1.38353,-0.6278c-0.42964,-0.491 -0.56684,-1.173 -0.36052,-1.7919l1.36009,-4.0803h4.91888l1.3601,4.0803c0.2063,0.6189 0.0691,1.3009 -0.3605,1.7919c-0.3491,0.399 -0.8535,0.6278 -1.3836,0.6278h-4.15092Zm-2.51239,0.36c0.63392,0.7244 1.54972,1.14 2.51239,1.14h4.15092c0.9627,0 1.8785,-0.4156 2.5124,-1.14c0.7802,-0.8917 1.0294,-2.1301 0.6547,-3.2541l-1.531,-4.5931c-0.1021,-0.3062 -0.3887,-0.5128 -0.7115,-0.5128h-6.00005c-0.32282,0 -0.60942,0.2066 -0.71151,0.5128l-1.53103,4.5931c-0.37467,1.124 -0.12552,2.3624 0.65468,3.2541Z"></path>
        <path d="M5.75,1.5c0,-0.41421 0.33579,-0.75 0.75,-0.75h11c0.4142,0 0.75,0.33579 0.75,0.75v10c0,0.4142 -0.3358,0.75 -0.75,0.75h-11c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-10Zm1.5,0.75v8.5h9.5v-8.5h-9.5Z"></path>
        <path d="M14,18.1006c0.4142,0 0.75,0.3358 0.75,0.75v1c0,0.4142 -0.3358,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.3358 -0.75,-0.75v-1c0,-0.4142 0.3358,-0.75 0.75,-0.75Z"></path>
        <path d="M12,10.75c0.4142,0 0.75,0.3358 0.75,0.75v3c0,0.4142 -0.3358,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.3358 -0.75,-0.75v-3c0,-0.4142 0.3358,-0.75 0.75,-0.75Z"></path>
      </g>
    </svg>
  );
}
