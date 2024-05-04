export function SandwichStuffedWithSeasonalVeggies({
  size = 24,
}: {
  size?: number;
}): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      version="1.1"
      viewBox="0 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <mask
          id="a"
          maskContentUnits="userSpaceOnUse"
          maskUnits="objectBoundingBox"
        >
          <path
            fill="#FFF"
            d="M0,0h24v24h-24Z"
            transform="matrix(1,0,0,1,0.5,0.5)"
          ></path>
        </mask>
      </defs>
      <g mask="url(#a)">
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M2.67678,3.7375c-0.1575,-0.1575 -0.42678,-0.04595 -0.42678,0.17677v18.5858c0,0.138 0.11193,0.25 0.25,0.25h18.5858c0.2227,0 0.3343,-0.2693 0.1768,-0.4268l-18.5858,-18.5858Zm-1.92678,0.17677c0,-1.55908 1.885,-2.33987 2.98744,-1.23743l18.5858,18.5858c1.1025,1.1025 0.3217,2.9875 -1.2374,2.9875h-18.5858c-0.9665,0 -1.75,-0.7835 -1.75,-1.75v-18.5858Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M11.0303,13.9697c0.2929,0.2929 0.2929,0.7677 0,1.0606l-5.49997,5.5c-0.29289,0.2929 -0.76777,0.2929 -1.06066,0c-0.29289,-0.2929 -0.29289,-0.7677 0,-1.0606l5.5,-5.5c0.29293,-0.2929 0.76773,-0.2929 1.06063,0Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M7.53033,11.4697c0.29289,0.2929 0.29289,0.7677 0,1.0606l-2.5,2.5c-0.29289,0.2929 -0.76777,0.2929 -1.06066,0c-0.29289,-0.2929 -0.29289,-0.7677 0,-1.0606l2.5,-2.5c0.29289,-0.2929 0.76777,-0.2929 1.06066,0Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M13.5303,17.4697c0.2929,0.2929 0.2929,0.7677 0,1.0606l-3,3c-0.2929,0.2929 -0.76774,0.2929 -1.06063,0c-0.29289,-0.2929 -0.29289,-0.7677 0,-1.0606l3.00003,-3c0.2929,-0.2929 0.7677,-0.2929 1.0606,0Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M13.3211,8.25c-1.202,0 -2.2526,0.65216 -2.8157,1.62554c-0.2074,0.35856 -0.66619,0.48106 -1.02474,0.27366c-0.35855,-0.2074 -0.48107,-0.6662 -0.27366,-1.02474c0.8202,-1.41783 2.355,-2.37446 4.1141,-2.37446c2.6233,0 4.75,2.12665 4.75,4.75c0,1.7894 -0.9898,3.3466 -2.4481,4.1558c-0.3622,0.201 -0.8187,0.0703 -1.0197,-0.2919c-0.201,-0.3622 -0.0703,-0.8187 0.2919,-1.0197c1.0011,-0.5555 1.6759,-1.6216 1.6759,-2.8442c0,-1.79493 -1.4551,-3.25 -3.25,-3.25Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M6.49995,4.25c-0.63327,0 -1.22212,0.18037 -1.72063,0.49221c-0.35117,0.21967 -0.81392,0.11307 -1.03359,-0.2381c-0.21967,-0.35116 -0.11307,-0.81392 0.23809,-1.03359c0.73006,-0.45668 1.59343,-0.72052 2.51613,-0.72052c2.62336,0 4.75005,2.12665 4.75005,4.75c0,0.93627 -0.2717,1.81139 -0.7408,2.5481c-0.2224,0.3494 -0.68602,0.4524 -1.03542,0.2299c-0.34941,-0.2225 -0.45232,-0.68606 -0.22986,-1.03546c0.32035,-0.50316 0.50603,-1.10002 0.50603,-1.74254c0,-1.79493 -1.45507,-3.25 -3.25,-3.25Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M17.5,15.25c-0.674,0 -1.2979,0.2043 -1.8162,0.5543c-0.3432,0.2319 -0.8094,0.1415 -1.0413,-0.2017c-0.2318,-0.3433 -0.1415,-0.8095 0.2018,-1.0413c0.7584,-0.5122 1.6733,-0.8113 2.6557,-0.8113c2.6234,0 4.75,2.1266 4.75,4.75c0,0.9949 -0.3067,1.9205 -0.8308,2.6844c-0.2343,0.3416 -0.7012,0.4285 -1.0428,0.1942c-0.3415,-0.2343 -0.4284,-0.7012 -0.1941,-1.0427c0.3582,-0.5221 0.5677,-1.1534 0.5677,-1.8359c0,-1.7949 -1.4551,-3.25 -3.25,-3.25Z"
        ></path>
      </g>
    </svg>
  );
}
