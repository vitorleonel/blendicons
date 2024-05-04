export function TrafficOvertakingOnATriangularSignPostOnARoad({
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
        <path d="M10.4491,1.848c0.6547,-1.25241 2.4471,-1.25241 3.1018,0l9.8489,18.8414c0.609,1.1651 -0.2362,2.5607 -1.5509,2.5607h-19.6978c-1.31473,0 -2.15995,-1.3956 -1.55089,-2.5607l9.84888,-18.8414Zm1.7725,0.69488c-0.0936,-0.17892 -0.3496,-0.17892 -0.4432,0l-9.84885,18.8413c-0.087,0.1665 0.03374,0.3659 0.22156,0.3659h19.6978c0.1878,0 0.3086,-0.1994 0.2215,-0.3659l-9.8488,-18.8413Z"></path>
        <path d="M11.4913,7.9489c0.2873,-0.2652 0.7301,-0.2652 1.0174,0l3,2.7692c0.3044,0.281 0.3234,0.7555 0.0424,1.0598c-0.2809,0.3044 -0.7554,0.3234 -1.0598,0.0424l-1.7525,-1.6177c-0.074,0.9683 -0.5113,1.8773 -1.2301,2.5408c-0.4836,0.4465 -0.7587,1.0747 -0.7587,1.7329v0.0474c0,0.6582 0.2751,1.2864 0.7587,1.7329c0.7913,0.7304 1.2413,1.7582 1.2413,2.8351v1.4083c0,0.4142 -0.3358,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.3358 -0.75,-0.75v-1.4083c0,-0.6582 -0.2751,-1.2865 -0.7587,-1.7329c-0.79127,-0.7304 -1.2413,-1.7583 -1.2413,-2.8351v-0.0474c0,-1.0769 0.45003,-2.1047 1.2413,-2.8351c0.4031,-0.3721 0.6614,-0.8706 0.7361,-1.4074l-1.71869,1.5865c-0.30436,0.281 -0.77886,0.262 -1.05981,-0.0424c-0.28095,-0.3043 -0.26197,-0.7788 0.04239,-1.0598l3.00001,-2.7692Z"></path>
      </g>
    </svg>
  );
}
