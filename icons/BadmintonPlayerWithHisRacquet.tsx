export function BadmintonPlayerWithHisRacquet({
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
            transform="matrix(1,0,0,1,0.5,0)"
          ></path>
        </mask>
      </defs>
      <g mask="url(#a)">
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M6.48206,18.0986c-1.75004,0 -3.32116,1.0728 -3.95831,2.7027l-0.04203,0.1075c-0.06408,0.1639 0.05682,0.341 0.23284,0.341l13.5354,0.0002c0.4142,0 0.75,0.3358 0.75,0.75c0,0.4142 -0.3358,0.75 -0.75,0.75l-13.5355,-0.0002c-1.23218,0 -2.07848,-1.2395 -1.62987,-2.3871l0.04203,-0.1075c0.86203,-2.2052 2.98766,-3.6566 5.35536,-3.6566h8.76794c0.4142,0 0.75,0.3358 0.75,0.75c0,0.4142 -0.3358,0.75 -0.75,0.75h-8.76794Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M20.25,11.2202c-1.4278,0 -2.75,1.3579 -2.75,3.25c0,1.8921 1.3222,3.25 2.75,3.25c1.4278,0 2.75,-1.3579 2.75,-3.25c0,-1.8921 -1.3222,-3.25 -2.75,-3.25Zm-4.25,3.25c0,-2.5261 1.8119,-4.74999 4.25,-4.74999c2.4381,0 4.25,2.22389 4.25,4.74999c0,2.5262 -1.8119,4.75 -4.25,4.75c-2.4381,0 -4.25,-2.2238 -4.25,-4.75Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M20.25,17.75c0.4142,0 0.75,0.3358 0.75,0.75v3.5c0,0.4142 -0.3358,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.3358 -0.75,-0.75v-3.5c0,-0.4142 0.3358,-0.75 0.75,-0.75Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M19.01,10.2583c0.4142,0 0.75,0.3358 0.75,0.75v6.8416c0,0.4142 -0.3358,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.3358 -0.75,-0.75v-6.8416c0,-0.4142 0.3358,-0.75 0.75,-0.75Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M21.49,10.2583c0.4142,0 0.75,0.3358 0.75,0.75v6.8416c0,0.4142 -0.3358,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.3358 -0.75,-0.75v-6.8416c0,-0.4142 0.3358,-0.75 0.75,-0.75Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M16.5,13.1089c0,-0.4142 0.3358,-0.75 0.75,-0.75h6c0.4142,0 0.75,0.3358 0.75,0.75c0,0.4142 -0.3358,0.75 -0.75,0.75h-6c-0.4142,0 -0.75,-0.3358 -0.75,-0.75Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M16.204,15.7632c0,-0.4142 0.3358,-0.75 0.75,-0.75h6.5719c0.4143,0 0.75,0.3358 0.75,0.75c0,0.4142 -0.3357,0.75 -0.75,0.75h-6.5719c-0.4142,0 -0.75,-0.3358 -0.75,-0.75Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M7.46589,16.8059c0.38336,-0.1569 0.8213,0.0267 0.97819,0.41c0.3671,0.8971 1.25925,1.5341 2.30592,1.5341c1.0466,0 1.9387,-0.637 2.3058,-1.5341c0.1569,-0.3833 0.5949,-0.5669 0.9782,-0.41c0.3834,0.1569 0.567,0.5948 0.4101,0.9782c-0.5928,1.4484 -2.0254,2.4659 -3.6941,2.4659c-1.66884,0 -3.10142,-1.0175 -3.69417,-2.4659c-0.15688,-0.3834 0.02671,-0.8213 0.41006,-0.9782Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M4.54102,7.48034c0,-3.41533 2.50608,-6.23034 6.20888,-6.23034c3.7029,0 6.209,2.81501 6.209,6.23034c0,0.38561 -0.0318,0.7928 -0.0919,1.21038c0.3266,0.34146 0.5421,0.79674 0.5421,1.31898c0,0.946 -0.6787,1.6432 -1.4967,1.9027c-0.475,1.0503 -1.1102,2.0559 -1.8931,2.8335c-0.8742,0.8683 -1.9789,1.4942 -3.2694,1.4942c-1.29038,0 -2.39511,-0.6259 -3.26929,-1.4942c-0.78291,-0.7776 -1.41813,-1.7832 -1.89314,-2.8336c-0.81786,-0.2595 -1.49653,-0.9567 -1.49653,-1.9026c0,-0.52216 0.2155,-0.97738 0.54202,-1.31882c-0.06011,-0.41763 -0.09194,-0.82489 -0.09194,-1.21054Zm6.20888,-4.73034c-2.8241,0 -4.70888,2.09226 -4.70888,4.73034c0,0.41179 0.04616,0.87699 0.13896,1.3725c0.0566,0.30221 -0.07699,0.60835 -0.33704,0.7724c-0.18631,0.11752 -0.252,0.26702 -0.252,0.38446c0,0.1678 0.17248,0.4586 0.61672,0.5086c0.27131,0.0305 0.5046,0.2061 0.60905,0.4583c0.43587,1.0526 1.02754,2.0163 1.72096,2.705c0.69167,0.687 1.43794,1.0585 2.21223,1.0585c0.7744,0 1.5206,-0.3714 2.2123,-1.0585c0.6934,-0.6887 1.2851,-1.6524 1.721,-2.705c0.1044,-0.2522 0.3378,-0.4278 0.6091,-0.4583c0.4443,-0.05 0.6168,-0.3408 0.6168,-0.5086c0,-0.11745 -0.0657,-0.26698 -0.252,-0.38451c-0.2601,-0.16402 -0.3938,-0.4702 -0.3372,-0.77244c0.0928,-0.49547 0.139,-0.96064 0.139,-1.37241c0,-2.63808 -1.8848,-4.73034 -4.709,-4.73034Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M8.86463,5.54053c-0.33651,0 -0.65881,0.13568 -0.894,0.37635l-2.13882,2.18865c-0.2895,0.29625 -0.76434,0.30171 -1.06059,0.01221c-0.29624,-0.2895 -0.30171,-0.76434 -0.01221,-1.06059l2.13882,-2.18865c0.51742,-0.52948 1.22648,-0.82797 1.9668,-0.82797h3.77067c0.7403,0 1.4494,0.29849 1.9668,0.82797l2.1388,2.18865c0.2895,0.29625 0.284,0.77109 -0.0122,1.06059c-0.2963,0.2895 -0.7711,0.28404 -1.0606,-0.01221l-2.1388,-2.18865c-0.2352,-0.24067 -0.5575,-0.37635 -0.894,-0.37635h-3.77067Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M8.47887,10.1656c1.41595,-0.77081 3.12623,-0.77081 4.54213,0l2.1971,1.196c0.3638,0.1981 0.4982,0.6536 0.3001,1.0174c-0.198,0.3638 -0.6535,0.4981 -1.0173,0.3001l-2.197,-1.1961c-0.9688,-0.5274 -2.139,-0.5274 -3.10785,0l-2.19706,1.1961c-0.3638,0.198 -0.81926,0.0637 -1.01731,-0.3001c-0.19804,-0.3638 -0.06367,-0.8193 0.30013,-1.0174l2.19706,-1.196Z"
        ></path>
      </g>
    </svg>
  );
}
