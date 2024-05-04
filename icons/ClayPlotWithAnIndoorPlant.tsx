export function ClayPlotWithAnIndoorPlant({
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
        <path d="M12,4.25c0.4142,0 0.75,0.33579 0.75,0.75v7c0,0.4142 -0.3358,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.3358 -0.75,-0.75v-7c0,-0.41421 0.3358,-0.75 0.75,-0.75Z"></path>
        <path d="M8.12714,6.97026c0.26614,-0.3174 0.73919,-0.35895 1.05659,-0.09281l3.09617,2.59619c0.3174,0.26614 0.359,0.73916 0.0928,1.05656c-0.2661,0.3174 -0.7392,0.359 -1.0566,0.0928l-3.09615,-2.59615c-0.3174,-0.26614 -0.35895,-0.7392 -0.09281,-1.05659Z"></path>
        <path d="M16.1644,3.4628c-0.2703,-0.3139 -0.7438,-0.34928 -1.0577,-0.07902l-3.5962,3.09619c-0.3139,0.27026 -0.3493,0.74382 -0.079,1.05772c0.2702,0.3139 0.7438,0.34928 1.0577,0.07902l3.5962,-3.09619c0.3139,-0.27026 0.3493,-0.74382 0.079,-1.05772Z"></path>
        <path d="M4.42219,11.5219c0.14248,-0.1722 0.35433,-0.2719 0.57782,-0.2719h14c0.2235,0 0.4353,0.0997 0.5778,0.2719c0.1425,0.1721 0.2008,0.3989 0.159,0.6184l-2,10.5c-0.0674,0.3538 -0.3767,0.6097 -0.7368,0.6097h-9.99999c-0.3601,0 -0.66938,-0.2559 -0.73676,-0.6097l-2,-10.5c-0.04182,-0.2195 0.01646,-0.4463 0.15894,-0.6184Zm1.48416,1.2281l1.71428,9h8.75877l1.7143,-9h-12.1873Z"></path>
        <path d="M7.5,5.75c-0.41421,0 -0.75,0.33579 -0.75,0.75c0,0.41421 0.33579,0.75 0.75,0.75c0.41421,0 0.75,-0.33579 0.75,-0.75c0,-0.41421 -0.33579,-0.75 -0.75,-0.75Zm-2.25,0.75c0,-1.24264 1.00736,-2.25 2.25,-2.25c1.24264,0 2.25,1.00736 2.25,2.25c0,1.24264 -1.00736,2.25 -2.25,2.25c-1.24264,0 -2.25,-1.00736 -2.25,-2.25Z"></path>
        <path d="M16.7983,2.25c0.4143,0 0.75,0.33579 0.75,0.75c0,0.41421 -0.3357,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.33579 -0.75,-0.75c0,-0.41421 0.3358,-0.75 0.75,-0.75Zm2.25,0.75c0,-1.24264 -1.0073,-2.25 -2.25,-2.25c-1.2426,0 -2.25,1.00736 -2.25,2.25c0,1.24264 1.0074,2.25 2.25,2.25c1.2427,0 2.25,-1.00736 2.25,-2.25Z"></path>
      </g>
    </svg>
  );
}
