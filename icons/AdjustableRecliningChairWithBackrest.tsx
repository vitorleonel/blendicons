export function AdjustableRecliningChairWithBackrest({
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
      <defs>
        <mask
          id="a"
          maskContentUnits="userSpaceOnUse"
          maskUnits="objectBoundingBox"
        >
          <path fill="#FFF" d="M0,0h24v24h-24Z"></path>
        </mask>
      </defs>
      <g mask="url(#a)">
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M17.4351,11.939c0,-0.7583 -0.6697,-1.3419 -1.4208,-1.2383l-7.04659,0.9719c-2.5977,0.3583 -4.53265,2.5785 -4.53265,5.2008v3.0208h13v-7.9552Zm-1.6258,-2.72425c1.6525,-0.22793 3.1258,1.05605 3.1258,2.72425v8.7052c0,0.4142 -0.3358,0.75 -0.75,0.75h-14.5c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-3.7708c0,-3.3715 2.48779,-6.226 5.8277,-6.6867l7.04654,-0.97195Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M0.807509,6.55304c-0.582967,-1.11013 -0.155617,-2.48266 0.954511,-3.06563c1.08888,-0.5718 2.43506,-0.17262 3.03622,0.90032l3.46111,6.17727c0.20246,0.3614 0.07365,0.8185 -0.2877,1.0209c-0.36136,0.2025 -0.81843,0.0737 -1.0209,-0.2877l-3.4611,-6.17727c-0.20398,-0.36407 -0.66077,-0.49951 -1.03024,-0.30549c-0.37668,0.19781 -0.52169,0.66352 -0.32388,1.04021l3.47748,6.62205c0.19258,0.3668 0.05141,0.8202 -0.31531,1.0127c-0.36673,0.1926 -0.82013,0.0514 -1.01271,-0.3153l-3.47748,-6.62206Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M21.3113,18.823c0.1585,0.1124 0.3766,0.0847 0.5019,-0.0637c0.1443,-0.1708 0.1073,-0.4293 -0.079,-0.5528l-3.4992,-2.3204c-0.3453,-0.229 -0.4395,-0.6944 -0.2106,-1.0396c0.2289,-0.3452 0.6943,-0.4395 1.0395,-0.2106l3.4993,2.3204c0.934,0.6194 1.1191,1.9147 0.396,2.7709c-0.6282,0.7437 -1.7213,0.8825 -2.5155,0.3194l-2.7088,-1.9206c-0.3379,-0.2396 -0.4176,-0.7078 -0.178,-1.0457c0.2396,-0.3378 0.7077,-0.4175 1.0456,-0.178l2.7088,1.9207Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M13.1547,14.1142c0.2929,-0.2929 0.7678,-0.2929 1.0607,0l2,2c0.2929,0.2929 0.2929,0.7678 0,1.0607c-0.2929,0.2929 -0.7678,0.2929 -1.0607,0l-2,-2c-0.2929,-0.2929 -0.2929,-0.7678 0,-1.0607Z"
        ></path>
      </g>
    </svg>
  );
}
