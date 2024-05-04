export function FreshBowlOfMashedSweetPotatoes({
  size = 24,
}: {
  size?: number;
}): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      version="1.1"
      viewBox="0 0 25 24"
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
            transform="matrix(1,0,0,1,0.00244141,0)"
          ></path>
        </mask>
      </defs>
      <g mask="url(#a)">
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M0.252441,12c0,-0.9665 0.783499,-1.75 1.75,-1.75h20c0.4143,0 0.75,0.3358 0.75,0.75c0,0.4142 -0.3357,0.75 -0.75,0.75h-20c-0.13807,0 -0.25,0.1119 -0.25,0.25c0,3.4518 2.79822,6.25 6.25,6.25h2.99996c0.4143,0 0.75,0.3358 0.75,0.75c0,0.4142 -0.3357,0.75 -0.75,0.75h-2.99996c-4.28021,0 -7.75,-3.4698 -7.75,-7.75Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M14.3505,3.28741c-1.315,-1.31498 -3.2726,-1.74928 -5.02027,-1.11375l-0.50987,0.1854c-1.68706,0.61348 -2.8575,2.13366 -3.0423,3.89093h-0.27562c-2.07107,0 -3.75,1.67893 -3.75,3.75v1.00001c0,0.4142 0.33579,0.75 0.75,0.75h18.5c0.4143,0 0.75,-0.3358 0.75,-0.75v-0.75c0,-1.65686 -1.3431,-3.00001 -3,-3.00001v-0.47522c0,-1.3944 -1.1303,-2.52478 -2.5247,-2.52478c-0.5856,0 -1.1472,-0.23262 -1.5613,-0.64669l-0.3159,-0.31589Zm-4.50766,0.29594c1.19996,-0.43636 2.54416,-0.13817 3.44706,0.76472l0.3158,0.31589c0.6954,0.69537 1.6386,1.08603 2.622,1.08603c0.5659,0 1.0247,0.45881 1.0247,1.02478v0.47522c0,0.82843 0.6716,1.5 1.5,1.5c0.8285,0 1.5,0.67157 1.5,1.50001h-17v-0.25001c0,-1.24264 1.00736,-2.25 2.25,-2.25h1c0.41421,0 0.75,-0.33578 0.75,-0.75v-0.26085c0,-1.32909 0.83147,-2.51618 2.08054,-2.97039l0.50986,-0.1854Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M12.3124,22.3284c0.2092,0.1611 0.4877,0.2005 0.7332,0.1035l1.0229,-0.4038c0.6466,-0.2553 1.3463,-0.347 2.0369,-0.2668c1.2212,0.1417 2.4556,-0.1137 3.5203,-0.7284l0.083,-0.0479c1.1186,-0.6459 1.9994,-1.6348 2.512,-2.8205l0.2262,-0.5231c0.17,-0.3933 0.307,-0.7999 0.4096,-1.2159l0.6634,-2.688c0.0585,-0.2372 -0.0021,-0.488 -0.1626,-0.6723c-0.1604,-0.1842 -0.4006,-0.2787 -0.6435,-0.2534l-1.8089,0.1891c-0.4232,0.0442 -0.85,0.0418 -1.2727,-0.0073l-0.4255,-0.0494c-1.283,-0.1489 -2.5799,0.1194 -3.6985,0.7653c-1.1186,0.6458 -1.9995,1.6348 -2.512,2.8204l-0.1057,0.2444c-0.2617,0.6053 -0.4341,1.2454 -0.5119,1.9002l-0.3531,2.9713c-0.0312,0.2622 0.0778,0.5214 0.2869,0.6826Zm1.3505,-1.7506l0.2052,-1.7263c0.0607,-0.5107 0.1952,-1.0099 0.3993,-1.482l0.1056,-0.2444c0.3847,-0.8897 1.0457,-1.6319 1.8852,-2.1166c0.8395,-0.4847 1.8127,-0.686 2.7756,-0.5743l0.4254,0.0494c0.532,0.0617 1.069,0.0648 1.6016,0.0092l0.747,-0.0781l-0.4076,1.6514c-0.0827,0.3353 -0.1932,0.6631 -0.3302,0.9801l-0.2261,0.5231c-0.3847,0.8898 -1.0457,1.632 -1.8852,2.1166l-0.083,0.048c-0.7856,0.4535 -1.6963,0.642 -2.5974,0.5374c-0.8844,-0.1027 -1.7799,0.0026 -2.6154,0.3065Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M21.2605,19.2798c0.388,-0.1448 0.5852,-0.5768 0.4404,-0.9649l-0.2809,-0.7529c-0.243,-0.6511 -0.5724,-1.2666 -0.9795,-1.8299l-0.0596,-0.0825c-0.2426,-0.3358 -0.7115,-0.4112 -1.0472,-0.1686c-0.3357,0.2426 -0.4112,0.7114 -0.1686,1.0471l0.0597,0.0826c0.3282,0.4543 0.5939,0.9506 0.7898,1.4757l0.281,0.7529c0.1448,0.3881 0.5768,0.5853 0.9649,0.4405Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M15.3809,13.7998c-0.3085,0.2764 -0.3345,0.7506 -0.0581,1.0591l0.2404,0.2683c0.3928,0.4384 0.6903,0.9536 0.8735,1.5129l0.1122,0.3424c0.129,0.3936 0.5526,0.6082 0.9462,0.4792c0.3937,-0.129 0.6082,-0.5526 0.4793,-0.9462l-0.1122,-0.3424c-0.2479,-0.7568 -0.6504,-1.4538 -1.1818,-2.0469l-0.2404,-0.2683c-0.2764,-0.3085 -0.7506,-0.3345 -1.0591,-0.0581Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M15.9276,18.2704c-0.3005,0.2851 -0.3129,0.7598 -0.0278,1.0603l0.0288,0.0304c0.4615,0.4864 0.8014,1.0751 0.9919,1.718l0.0119,0.0402c0.1177,0.3971 0.535,0.6237 0.9322,0.506c0.3971,-0.1177 0.6237,-0.535 0.506,-0.9321l-0.0119,-0.0402c-0.2577,-0.8698 -0.7176,-1.6663 -1.342,-2.3244l-0.0288,-0.0304c-0.2851,-0.3005 -0.7598,-0.3129 -1.0603,-0.0278Z"
        ></path>
      </g>
    </svg>
  );
}
