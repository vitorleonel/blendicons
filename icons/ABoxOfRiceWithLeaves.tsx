export function ABoxOfRiceWithLeaves({
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
        <path d="M5.375,10c0,-0.41421 0.33579,-0.75 0.75,-0.75h11c0.4142,0 0.75,0.33579 0.75,0.75v12.5c0,0.4142 -0.3358,0.75 -0.75,0.75h-11c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-12.5Zm1.5,0.75v11h9.5v-11h-9.5Z"></path>
        <path d="M5.43209,9.71299c0.11609,-0.28026 0.38956,-0.46299 0.69291,-0.46299h11c0.3033,0 0.5768,0.18273 0.6929,0.46299c0.1161,0.28025 0.0519,0.60281 -0.1626,0.81731l-3,3c-0.1406,0.1407 -0.3314,0.2197 -0.5303,0.2197h-5c-0.19891,0 -0.38968,-0.079 -0.53033,-0.2197l-3,-3c-0.2145,-0.2145 -0.27867,-0.53706 -0.16258,-0.81731Zm2.50357,1.03701l1.5,1.5h4.37864l1.5,-1.5h-7.37864Z"></path>
        <path d="M11.875,16.25c-0.6904,0 -1.25,0.5596 -1.25,1.25c0,0.6904 0.5596,1.25 1.25,1.25c0.6904,0 1.25,-0.5596 1.25,-1.25c0,-0.6904 -0.5596,-1.25 -1.25,-1.25Zm-2.75,1.25c0,-1.5188 1.2312,-2.75 2.75,-2.75c1.5188,0 2.75,1.2312 2.75,2.75c0,1.5188 -1.2312,2.75 -2.75,2.75c-1.5188,0 -2.75,-1.2312 -2.75,-2.75Z"></path>
        <path d="M16.375,0.75c0.4142,0 0.75,0.33579 0.75,0.75v8.5c0,0.4142 -0.3358,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.3358 -0.75,-0.75v-8.5c0,-0.41421 0.3358,-0.75 0.75,-0.75Z"></path>
        <path d="M21.2609,1.85687c0.3552,0.21311 0.4703,0.67381 0.2572,1.02899l-4.5,7.50004c-0.2131,0.3551 -0.6738,0.4703 -1.029,0.2572c-0.3552,-0.2131 -0.4703,-0.67379 -0.2572,-1.02898l4.5,-7.5c0.2131,-0.35519 0.6738,-0.47036 1.029,-0.25725Z"></path>
        <path d="M16.5947,9.46967c0.2929,-0.29289 0.7677,-0.29289 1.0606,0l3,3.00003c0.2929,0.2929 0.2929,0.7677 0,1.0606c-0.2929,0.2929 -0.7677,0.2929 -1.0606,0l-3,-3c-0.2929,-0.2929 -0.2929,-0.76774 0,-1.06063Z"></path>
        <path d="M6.65533,9.46967c-0.29289,-0.29289 -0.76777,-0.29289 -1.06066,0l-3,3.00003c-0.29289,0.2929 -0.29289,0.7677 0,1.0606c0.29289,0.2929 0.76777,0.2929 1.06066,0l3,-3c0.29289,-0.2929 0.29289,-0.76774 0,-1.06063Z"></path>
        <path d="M6.16138,4.36323c0.14223,-0.18006 0.35907,-0.28511 0.58853,-0.28511h4.99999c0.3473,0 0.6492,0.23847 0.7296,0.57634l0.2409,1.01191c0.2013,0.84571 0.1666,1.73045 -0.1002,2.55782l-0.5929,1.83841c-0.1272,0.3942 -0.5498,0.6107 -0.944,0.4836c-0.3942,-0.1272 -0.6108,-0.54979 -0.4836,-0.94401l0.5929,-1.83841c0.1826,-0.5661 0.2063,-1.17144 0.0685,-1.75009l-0.1036,-0.43557h-3.45813l0.02101,0.08825c0.20129,0.84571 0.16663,1.73045 -0.1002,2.55782l-0.5929,1.83841c-0.12714,0.3942 -0.54979,0.6107 -0.94401,0.4836c-0.39421,-0.1272 -0.61073,-0.54979 -0.48359,-0.94401l0.59291,-1.83841c0.18257,-0.5661 0.20628,-1.17144 0.06855,-1.75009l-0.24085,-1.0119c-0.05313,-0.22323 -0.00115,-0.4585 0.14109,-0.63856Z"></path>
        <path d="M8.66146,1.86323c0.14224,-0.18006 0.35908,-0.28511 0.58854,-0.28511l5,1e-05c0.3473,0 0.6492,0.23846 0.7296,0.57633l0.2409,1.01191c0.2013,0.84571 0.1666,1.73045 -0.1002,2.55782l-0.3463,1.07359c-0.1654,0.51299 -0.2007,1.05906 -0.1026,1.58906l0.2652,1.43254c0.0754,0.40732 -0.1937,0.79862 -0.601,0.87402c-0.4073,0.0753 -0.7986,-0.1937 -0.874,-0.601l-0.2651,-1.43256c-0.1434,-0.77461 -0.0919,-1.57272 0.1499,-2.32247l0.3463,-1.07359c0.1825,-0.5661 0.2063,-1.17144 0.0685,-1.75009l-0.1036,-0.43557h-3.4581l0.2801,1.17703c0.0959,0.40296 -0.153,0.80737 -0.55594,0.90328c-0.40296,0.09591 -0.80737,-0.153 -0.90328,-0.55595l-0.5,-2.10069c-0.05313,-0.22323 -0.00115,-0.4585 0.14108,-0.63856Z"></path>
      </g>
    </svg>
  );
}
