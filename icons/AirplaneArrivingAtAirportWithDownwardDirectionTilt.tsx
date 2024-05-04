export function AirplaneArrivingAtAirportWithDownwardDirectionTilt({
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
          d="M0.25,22c0,-0.4142 0.335786,-0.75 0.75,-0.75h22c0.4142,0 0.75,0.3358 0.75,0.75c0,0.4142 -0.3358,0.75 -0.75,0.75h-22c-0.414214,0 -0.75,-0.3358 -0.75,-0.75Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M11.5987,5.52684c-0.0389,-0.11875 -0.1312,-0.21099 -0.2499,-0.24996l0.2339,-0.7126l-0.2339,0.7126l-0.295,-0.0968c-0.2707,-0.08887 -0.5611,0.12699 -0.5473,0.42132l0.2093,4.464c0.061,1.3021 -1.17524,2.2939 -2.43403,1.9409l-3.58137,-1.0042c-0.60788,-0.1705 -1.08991,-0.6316 -1.2868,-1.23158l-0.59583,-1.81544l0.7126,-0.23387l-0.7126,0.23387c-0.02526,-0.07696 -0.0444,-0.15578 -0.05728,-0.2357c-0.00197,-0.01227 -0.00433,-0.02012 -0.00585,-0.02441l-0.00094,-0.00232c-0.00489,-0.00207 -0.01556,-0.00554 -0.03259,-0.00537c-0.02652,0.00026 -0.04147,0.00922 -0.0443,0.01146l-0.00011,8e-05c-0.0005,0.0004 -0.00079,0.00063 -0.00169,0.00215c-0.00081,0.00139 -0.00661,0.01139 -0.01063,0.036l-0.46368,2.83583l-0.72813,-0.1191l0.72813,0.1191c-0.00348,0.0213 -0.00528,0.0427 -0.0054,0.0641c0,0 0,0 0,0l-0.00873,1.5136c-0.00102,0.1777 0.11238,0.3299 0.27787,0.3804l-0.21888,0.7173l0.21888,-0.7173l18.4355,5.6251c0.2034,0.0621 0.375,-0.017 0.4786,-0.1875c0.1031,-0.1698 0.0922,-0.3517 -0.0538,-0.4977l-2.6653,-2.6653c-0.0333,-0.0333 -0.0726,-0.0604 -0.116,-0.0799l0.2527,-0.5615l-0.2527,0.5615l-3.8453,-1.7303c-0.485,-0.2182 -0.8549,-0.6299 -1.0207,-1.135l-2.0787,-6.33346Zm-7.35572,1.9605c-0.00067,-0.00203 -0.0012,-0.00419 -0.00157,-0.00647v-1e-05c-0.13983,-0.86819 -0.86555,-1.30023 -1.53536,-1.29351c-0.6674,0.0067 -1.38146,0.448 -1.52201,1.30757l0.74017,0.12103l-0.74017,-0.12103l-0.463678,2.83578c-0.016083,0.0984 -0.024464,0.1978 -0.02504,0.2975v0l-0.008723,1.5136c-0.004827,0.8377 0.537541,1.5789 1.34008,1.8238l18.4355,5.6251c1.8804,0.5738 3.3407,-1.7629 1.9232,-3.1805l-2.6653,-2.6653c-0.1621,-0.1621 -0.3522,-0.2932 -0.5612,-0.3872l-3.8453,-1.7303c-0.1002,-0.0451 -0.1765,-0.1298 -0.211,-0.2349l-0.7126,0.2339l0.7126,-0.2339l-2.0787,-6.33342c-0.1877,-0.57198 -0.6354,-1.01968 -1.2074,-1.20741l-0.2949,-0.0968l-0.2339,0.7126l0.2339,-0.7126c-1.276,-0.41877 -2.5761,0.5803 -2.51344,1.91678l0.20929,4.46405c0.01341,0.2861 -0.26236,0.5016 -0.53068,0.4263l-3.58138,-1.00422c-0.1265,-0.03547 -0.22575,-0.13057 -0.26659,-0.25502l-0.59582,-1.81542Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M15.25,2.5c0,-0.41421 0.3358,-0.75 0.75,-0.75h7c0.4142,0 0.75,0.33579 0.75,0.75v5c0,0.41421 -0.3358,0.75 -0.75,0.75h-7c-0.4142,0 -0.75,-0.33579 -0.75,-0.75v-5Zm1.5,0.75v3.5h5.5v-3.5h-5.5Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M17,0.25c0.4142,0 0.75,0.335786 0.75,0.75v1.5c0,0.41421 -0.3358,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.33579 -0.75,-0.75v-1.5c0,-0.414214 0.3358,-0.75 0.75,-0.75Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M22,0.25c0.4142,0 0.75,0.335786 0.75,0.75v1.5c0,0.41421 -0.3358,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.33579 -0.75,-0.75v-1.5c0,-0.414214 0.3358,-0.75 0.75,-0.75Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M19.75,5.5c0,-0.41421 0.3358,-0.75 0.75,-0.75h0.5c0.4142,0 0.75,0.33579 0.75,0.75c0,0.41421 -0.3358,0.75 -0.75,0.75h-0.5c-0.4142,0 -0.75,-0.33579 -0.75,-0.75Z"
        ></path>
      </g>
    </svg>
  );
}
