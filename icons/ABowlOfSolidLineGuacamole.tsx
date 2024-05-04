export function ABowlOfSolidLineGuacamole({
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
          d="M0.852905,12.4334c0,-0.934 0.757175,-1.6912 1.6912,-1.6912h11.8529c0.4142,0 0.75,0.3358 0.75,0.75c0,0.4142 -0.3358,0.75 -0.75,0.75h-11.8529c-0.1056,0 -0.1912,0.0856 -0.1912,0.1912c0,3.2245 2.61394,5.8384 5.8384,5.8384h4.02959c0.4142,0 0.75,0.3358 0.75,0.75c0,0.4142 -0.3358,0.75 -0.75,0.75h-4.02959c-4.05289,0 -7.3384,-3.2855 -7.3384,-7.3384Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M9.56153,2.07578c0.96867,0.17274 1.94107,0.63862 2.71897,1.07549c0.2268,0.12737 0.4712,0.189 0.7082,0.1806c0.1075,-0.00382 0.219,-0.00856 0.3334,-0.01342c0.7528,-0.03203 1.6349,-0.06955 2.3818,0.1155c0.4559,0.11295 0.9103,0.3168 1.2891,0.68384c0.382,0.37002 0.6385,0.85864 0.7735,1.45894c0.0685,0.30415 0.2801,0.44923 0.4201,0.45958c0.2859,0.02114 0.5917,0.04949 0.857,0.08543c0.2257,0.03056 0.5366,0.07953 0.7525,0.17765c0.7529,0.34233 1.1238,0.87233 1.2664,1.3763c0.067,0.23694 0.0782,0.44803 0.0724,0.60239c-0.0029,0.0778 -0.0102,0.14342 -0.0177,0.19368c-0.0038,0.02522 -0.0077,0.04683 -0.0111,0.06446l-0.0049,0.02351l-0.0022,0.00949l-0.001,0.00418l-0.0004,0.00194c-0.0001,0.00046 -0.0005,0.00185 -0.7295,-0.17411l0.729,0.17596c-0.0971,0.40265 -0.5023,0.65029 -0.905,0.55311c-0.3953,-0.09539 -0.6412,-0.48765 -0.5581,-0.88293c0.0005,-0.00422 0.0015,-0.01296 0.0019,-0.02531c0.0013,-0.03331 -0.0012,-0.08291 -0.0168,-0.13801c-0.0224,-0.07912 -0.0913,-0.25519 -0.4308,-0.41315c-0.006,-0.00168 -0.0285,-0.00831 -0.074,-0.0179c-0.0685,-0.01443 -0.1599,-0.02966 -0.272,-0.04484c-0.2234,-0.03025 -0.4959,-0.05594 -0.7663,-0.07593c-0.9615,-0.07112 -1.5989,-0.85275 -1.7729,-1.62623c-0.0827,-0.36768 -0.217,-0.57835 -0.3538,-0.71085c-0.1398,-0.13548 -0.3322,-0.23736 -0.6061,-0.30523c-0.5206,-0.12898 -1.1565,-0.1038 -1.9375,-0.07288c-0.1179,0.00467 -0.2392,0.00947 -0.3639,0.01389c-0.5346,0.01895 -1.0494,-0.12109 -1.4958,-0.37177c-0.7367,-0.41371 -1.5319,-0.779 -2.24781,-0.90668c-0.70169,-0.12513 -1.20017,-0.00661 -1.5534,0.37342c-0.29817,0.3208 -0.51724,0.78437 -0.62067,1.41713c-0.14064,0.86044 -0.81228,1.48018 -1.44034,1.78307c-0.55802,0.26911 -1.16907,0.83186 -1.64421,1.53006c-0.47857,0.70326 -0.74552,1.43474 -0.74552,1.99134c0,0.0322 -0.00051,0.0643 -0.00138,0.0957l11.1043,-0.0003c0.4142,0 0.75,0.3358 0.75,0.75c0,0.4142 -0.3358,0.75 -0.75,0.75l-11.5706,0.0003c-0.20829,0 -0.49399,-0.0472 -0.73063,-0.2676c-0.23165,-0.2156 -0.29198,-0.483 -0.31103,-0.6396c-0.01865,-0.1534 -0.00937,-0.3094 -0.00377,-0.4036c0.00123,-0.0206 0.00245,-0.0404 0.00359,-0.059c0.00532,-0.0862 0.00946,-0.1534 0.00946,-0.2259c0,-0.96645 0.43136,-1.99166 1.00543,-2.83524c0.5775,-0.84863 1.37342,-1.62284 2.23273,-2.03725c0.35646,-0.17191 0.57588,-0.45569 0.61155,-0.67395c0.13834,-0.84635 0.45511,-1.60763 1.00234,-2.19637c0.82944,-0.89238 1.93254,-1.00419 2.91543,-0.82891Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M8.38257,6.31641c0,-0.41422 0.33578,-0.75 0.75,-0.75h0.4706c0.41423,0 0.75003,0.33578 0.75003,0.75c0,0.41421 -0.3358,0.75 -0.75003,0.75h-0.4706c-0.41422,0 -0.75,-0.33579 -0.75,-0.75Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M5.58826,9.13867c0,-0.41421 0.33578,-0.75 0.75,-0.75h0.4706c0.41421,0 0.75,0.33579 0.75,0.75c0,0.41422 -0.33579,0.75 -0.75,0.75h-0.4706c-0.41422,0 -0.75,-0.33578 -0.75,-0.75Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M10.3237,9.13867c0,-0.41421 0.3358,-0.75 0.75,-0.75h0.4706c0.4142,0 0.75,0.33579 0.75,0.75c0,0.41422 -0.3358,0.75 -0.75,0.75h-0.4706c-0.4142,0 -0.75,-0.33578 -0.75,-0.75Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M13.5885,7.25781c0,-0.41421 0.3358,-0.75 0.75,-0.75h0.4706c0.4142,0 0.75,0.33579 0.75,0.75c0,0.41422 -0.3358,0.75 -0.75,0.75h-0.4706c-0.4142,0 -0.75,-0.33578 -0.75,-0.75Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M17.6426,11.9502c-0.4117,0.4746 -0.6955,1.1288 -0.6955,1.842c0,0.595 -0.2144,1.1891 -0.6278,1.6434c-0.7143,0.7852 -1.1722,1.9019 -1.1722,3.1571c0,1.1308 0.5196,1.8883 1.242,2.3901c0.7505,0.5215 1.7198,0.7594 2.508,0.7594c0.7882,0 1.7575,-0.2379 2.508,-0.7594c0.7224,-0.5018 1.242,-1.2593 1.242,-2.3901c0,-1.2552 -0.4579,-2.3719 -1.1722,-3.1571c-0.4134,-0.4543 -0.6278,-1.0484 -0.6278,-1.6434c0,-0.7132 -0.2838,-1.3674 -0.6955,-1.842c-0.4243,-0.4891 -0.9085,-0.708 -1.2545,-0.708c-0.346,0 -0.8303,0.2189 -1.2545,0.708Zm-1.1331,-0.9829c0.6117,-0.7053 1.4774,-1.22511 2.3876,-1.22511c0.9101,0 1.7759,0.51981 2.3876,1.22511c0.6243,0.7197 1.0624,1.7155 1.0624,2.8249c0,0.2411 0.088,0.4698 0.2373,0.634c0.9724,1.0688 1.5627,2.5481 1.5627,4.1665c0,1.6861 -0.8158,2.8784 -1.8861,3.622c-1.0422,0.7241 -2.323,1.0275 -3.3639,1.0275c-1.041,0 -2.3217,-0.3034 -3.3639,-1.0275c-1.0703,-0.7436 -1.8861,-1.9359 -1.8861,-3.622c0,-1.6184 0.5903,-3.0977 1.5627,-4.1665c0.1493,-0.1642 0.2373,-0.3929 0.2373,-0.634c0,-1.1094 0.4381,-2.1052 1.0624,-2.8249Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M18.5134,16.7294c-0.2327,0.4878 -0.3663,1.0711 -0.3663,1.4367c0,0.7138 0.458,1.05 0.75,1.05c0.292,0 0.75,-0.3362 0.75,-1.05c0,-0.3656 -0.1336,-0.9489 -0.3663,-1.4367c-0.1146,-0.2403 -0.2333,-0.4145 -0.3344,-0.5172c-0.0194,-0.0197 -0.0359,-0.0346 -0.0493,-0.0457c-0.0134,0.0111 -0.0299,0.026 -0.0493,0.0457c-0.1011,0.1027 -0.2198,0.2769 -0.3344,0.5172Zm0.4287,-0.5934c0,0 -0.0008,0.0004 -0.0023,0.0009c0.0015,-0.0007 0.0023,-0.001 0.0023,-0.0009Zm-0.0877,0.0009c-0.0016,-0.0005 -0.0023,-0.0009 -0.0023,-0.0009c0,-0.0001 0.0007,0.0002 0.0023,0.0009Zm-1.0757,-0.9768c0.2526,-0.2567 0.6307,-0.5175 1.1184,-0.5175c0.4877,0 0.8658,0.2608 1.1184,0.5175c0.2579,0.262 0.4624,0.5948 0.6192,0.9236c0.3103,0.6505 0.5124,1.4539 0.5124,2.0824c0,1.2745 -0.8851,2.55 -2.25,2.55c-1.3649,0 -2.25,-1.2755 -2.25,-2.55c0,-0.6285 0.2021,-1.4319 0.5124,-2.0824c0.1568,-0.3288 0.3613,-0.6616 0.6192,-0.9236Z"
        ></path>
      </g>
    </svg>
  );
}
