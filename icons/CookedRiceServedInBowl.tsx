export function CookedRiceServedInBowl({
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
      <defs>
        <mask
          id="a"
          maskContentUnits="userSpaceOnUse"
          maskUnits="objectBoundingBox"
        >
          <path
            fill="#FFF"
            d="M0,0h24v24h-24Z"
            transform="matrix(1,0,0,1,0,0.5)"
          ></path>
        </mask>
      </defs>
      <g mask="url(#a)">
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M1.83995,12.3125c-0.02731,0.0285 -0.03405,0.054 -0.02991,0.0847c0.54239,4.0252 4.7871,7.3528 10.19,7.3528c5.4028,0 9.6475,-3.3276 10.1899,-7.3528c0.0042,-0.0307 -0.0026,-0.0562 -0.0299,-0.0847c-0.0316,-0.033 -0.0877,-0.0625 -0.16,-0.0625h-20c-0.07237,0 -0.12841,0.0295 -0.16003,0.0625Zm-1.51647,0.285c-0.143521,-1.0651 0.741454,-1.8475 1.6765,-1.8475h20c0.935,0 1.82,0.7824 1.6765,1.8475c-0.6707,4.9772 -5.7531,8.6525 -11.6765,8.6525c-5.92341,0 -11.0059,-3.6753 -11.6765,-8.6525Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M6.25,21.5c0,-0.9665 0.7835,-1.75 1.75,-1.75h8c0.9665,0 1.75,0.7835 1.75,1.75v1c0,0.9665 -0.7835,1.75 -1.75,1.75h-8c-0.9665,0 -1.75,-0.7835 -1.75,-1.75v-1Zm1.75,-0.25c-0.13807,0 -0.25,0.1119 -0.25,0.25v1c0,0.1381 0.11193,0.25 0.25,0.25h8c0.1381,0 0.25,-0.1119 0.25,-0.25v-1c0,-0.1381 -0.1119,-0.25 -0.25,-0.25h-8Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M11.5,2.25c-0.7423,0 -1.3784,0.46243 -1.63245,1.11758c-0.07155,0.18451 -0.21313,0.33327 -0.39389,0.41385l-0.03135,0.01397c-0.26602,0.11859 -0.57664,0.07245 -0.79669,-0.11835c-0.30741,-0.26653 -0.70683,-0.42705 -1.14562,-0.42705c-0.96646,0 -1.74993,0.78343 -1.75,1.74987c-2e-05,0.23586 -0.11098,0.45797 -0.29957,0.59962c-0.42674,0.32054 -0.70043,0.82846 -0.70043,1.40051c0,0.13054 0.01417,0.25691 0.04076,0.37797c0.0438,0.19934 0.00447,0.40791 -0.10892,0.57761c-0.11339,0.1697 -0.29103,0.28586 -0.49196,0.32168c-0.8185,0.14594 -1.43988,0.86255 -1.43988,1.72274c0,0.269 0.06029,0.523 0.1682,0.75h18.1636c0.1079,-0.227 0.1682,-0.481 0.1682,-0.75c0,-0.8602 -0.6214,-1.5768 -1.4399,-1.72273c-0.2009,-0.03583 -0.3785,-0.15199 -0.4919,-0.32169c-0.1134,-0.16969 -0.1528,-0.37827 -0.109,-0.57761c0.0266,-0.12105 0.0408,-0.24742 0.0408,-0.37797c0,-0.85615 -0.6156,-1.57012 -1.4285,-1.72066c-0.3053,-0.05656 -0.5443,-0.29549 -0.6008,-0.60089c-0.1506,-0.81289 -0.8645,-1.42845 -1.7207,-1.42845c-0.3309,0 -0.6383,0.09114 -0.9009,0.24927c-0.1878,0.11309 -0.4157,0.13834 -0.6237,0.06911c-0.17,-0.05656 -0.3431,-0.10601 -0.5192,-0.14801c-0.1933,-0.04611 -0.3604,-0.16704 -0.4646,-0.33623c-0.3092,-0.50211 -0.862,-0.83414 -1.4916,-0.83414Zm-2.60905,-0.18794c0.59194,-0.79573 1.53965,-1.31206 2.60905,-1.31206c1.0573,0 1.9961,0.50529 2.5888,1.28494c0.0162,0.00454 0.0325,0.00914 0.0487,0.01379c0.415,-0.1918 0.877,-0.29873 1.3625,-0.29873c1.4206,0 2.6273,0.9109 3.0696,2.18035c1.2693,0.44233 2.1801,1.64863 2.1804,3.06896c1.1745,0.48982 2,1.6483 2,3.00069c0,0.7308 -0.2421,1.4072 -0.6501,1.9504c-0.1417,0.1886 -0.3638,0.2996 -0.5997,0.2996h-19.0004c-0.23588,0 -0.45802,-0.111 -0.59968,-0.2996c-0.40805,-0.5432 -0.65014,-1.2196 -0.65014,-1.9504c0,-1.35239 0.82549,-2.51086 2,-3.00069c0.00019,-0.93182 0.39315,-1.77203 1.0202,-2.3637c0.18112,-1.6234 1.55806,-2.88561 3.2298,-2.88561c0.4973,0 0.96912,0.11206 1.39095,0.31206Z"
        ></path>
      </g>
    </svg>
  );
}
