export function CashierOnCashCounterWithMachineAndMask({
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
        <path d="M6.3852,18.5c-1.73784,0 -3.30061,1.058 -3.94603,2.6716l-0.19422,0.4856c-0.06569,0.1642 0.05525,0.3428 0.23212,0.3428h10.0229c0.4142,0 0.75,0.3358 0.75,0.75c0,0.4142 -0.3358,0.75 -0.75,0.75h-10.0229c-1.23807,0 -2.08464,-1.2504 -1.62484,-2.3999l0.194227,-0.4856c0.87321,-2.183 2.98754,-3.6145 5.33874,-3.6145h8.1148c0.4142,0 0.75,0.3358 0.75,0.75c0,0.4142 -0.3358,0.75 -0.75,0.75h-8.1148Z"></path>
        <path d="M13.7602,19.8767c0.0603,-0.3616 0.3732,-0.6267 0.7398,-0.6267h8c0.3666,0 0.6795,0.2651 0.7398,0.6267l0.5,3c0.0362,0.2175 -0.025,0.4399 -0.1675,0.6081c-0.1425,0.1682 -0.3518,0.2652 -0.5723,0.2652h-9c-0.2205,0 -0.4298,-0.097 -0.5723,-0.2652c-0.1425,-0.1682 -0.2037,-0.3906 -0.1675,-0.6081l0.5,-3Zm1.3752,0.8733l-0.25,1.5h7.2293l-0.25,-1.5h-6.7293Z"></path>
        <path d="M15.25,15.75c0,-0.4142 0.3358,-0.75 0.75,-0.75h5c0.4142,0 0.75,0.3358 0.75,0.75v2.25c0,0.4142 -0.3358,0.75 -0.75,0.75h-5c-0.4142,0 -0.75,-0.3358 -0.75,-0.75v-2.25Zm1.5,0.75v0.75h3.5v-0.75h-3.5Z"></path>
        <path d="M18.5,17.25c0.4142,0 0.75,0.3358 0.75,0.75v2c0,0.4142 -0.3358,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.3358 -0.75,-0.75v-2c0,-0.4142 0.3358,-0.75 0.75,-0.75Z"></path>
        <path d="M5.99517,6.25c0.41422,0 0.75,0.33579 0.75,0.75c0,0.44545 0.05108,0.94797 0.15355,1.48266c0.05862,0.30589 -0.07792,0.61618 -0.34306,0.77961c-0.22474,0.13853 -0.30566,0.31627 -0.30566,0.45684c0,0.20263 0.21243,0.54399 0.74318,0.60239c0.26989,0.0297 0.50267,0.2029 0.6086,0.4529c0.48097,1.1351 1.13527,2.1781 1.90572,2.9259c0.7682,0.7457 1.6088,1.1603 2.4925,1.1603c0.8837,0 1.7243,-0.4146 2.4925,-1.1602c0.7704,-0.7479 1.4248,-1.7909 1.9057,-2.926c0.106,-0.25 0.3387,-0.4232 0.6086,-0.4529c0.5308,-0.0584 0.7432,-0.39976 0.7432,-0.60239c0,-0.14056 -0.0809,-0.3183 -0.3057,-0.45684c-0.2651,-0.16342 -0.4016,-0.47371 -0.343,-0.77961c0.1024,-0.53468 0.1535,-1.03721 0.1535,-1.48266c0,-0.41421 0.3358,-0.75 0.75,-0.75c0.4142,0 0.75,0.33579 0.75,0.75c0,0.41885 -0.0359,0.86183 -0.1038,1.31634c0.3588,0.35851 0.599,0.8427 0.599,1.40277c0,1.00999 -0.7479,1.74119 -1.6307,2.00279c-0.522,1.1346 -1.2213,2.2193 -2.082,3.0548c-0.9543,0.9263 -2.1498,1.5839 -3.5373,1.5839c-1.3875,0 -2.58301,-0.6576 -3.53727,-1.5839c-0.86074,-0.8355 -1.56001,-1.9202 -2.08206,-3.0548c-0.8828,-0.2616 -1.63067,-0.9928 -1.63067,-2.00279c0,-0.56007 0.24023,-1.04426 0.59895,-1.40277c-0.06785,-0.45452 -0.10378,-0.89749 -0.10378,-1.31634c0,-0.41421 0.33579,-0.75 0.75,-0.75Z"></path>
        <path d="M3.25,2.51654c0,-1.25635 1.28459,-2.1034 2.43936,-1.6085l1.35143,0.579183c0.40455,0.17338 0.8401,0.26278 1.28024,0.26278h5.65127c2.8623,0 5.0892,2.488 4.7731,5.33283l-1.4908,-0.16565c0.2174,-1.95628 -1.314,-3.66718 -3.2823,-3.66718h-5.65127c-0.64328,0 -1.27985,-0.13066 -1.87112,-0.38406l-1.35143,-0.57919c-0.16497,-0.0707 -0.34848,0.05031 -0.34848,0.22979v0.27236c0,0.64163 0.18992,1.26891 0.54584,1.80277l1.3282,1.99231c0.22976,0.34464 0.13663,0.81029 -0.20801,1.04006c-0.34465,0.22976 -0.8103,0.13663 -1.04007,-0.20801l-1.3282,-1.99231c-0.52018,-0.78027 -0.79776,-1.69705 -0.79776,-2.63482v-0.27236Z"></path>
        <path d="M14.7569,4.81592c0.2168,0.00046 0.4227,0.09467 0.5648,0.25836l0.6467,0.74495c0.2374,0.27351 0.5817,0.4306 0.9439,0.4306h1.0877c0.4142,0 0.75,0.33578 0.75,0.75c0,0.41421 -0.3358,0.75 -0.75,0.75h-1.0877c-0.7968,0 -1.5544,-0.3456 -2.0767,-0.94732l-0.0827,-0.09523l-0.091,0.10397c-0.5222,0.59647 -1.2764,0.93858 -2.0691,0.93858h-3.08559c-0.03128,0 -0.06252,-0.00196 -0.09354,-0.00586l-3.78228,-0.47543c-0.41098,-0.05166 -0.70226,-0.42671 -0.6506,-0.83769c0.05166,-0.41098 0.4267,-0.70226 0.83768,-0.6506l3.73569,0.46958h3.03864c0.3603,0 0.7031,-0.15551 0.9405,-0.42663l0.6577,-0.75131c0.1428,-0.16308 0.3492,-0.25643 0.5659,-0.25597Z"></path>
        <path d="M8.41438,17.5315c0.25875,-0.3235 0.73072,-0.3759 1.05417,-0.1171l2.03145,1.6251l2.0315,-1.6251c0.3235,-0.2588 0.7954,-0.2064 1.0542,0.1171c0.2587,0.3234 0.2063,0.7954 -0.1172,1.0542l-2.5,2c-0.2739,0.2191 -0.6631,0.2191 -0.937,0l-2.49999,-2c-0.32345,-0.2588 -0.37589,-0.7308 -0.11713,-1.0542Z"></path>
        <path d="M11.5,19.25c0.4142,0 0.75,0.3358 0.75,0.75v2.5c0,0.4142 -0.3358,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.3358 -0.75,-0.75v-2.5c0,-0.4142 0.3358,-0.75 0.75,-0.75Z"></path>
        <path d="M13.5539,11.5001c-0.9688,-0.5274 -2.139,-0.5274 -3.1078,0l-2.58749,1.4086c-0.3638,0.1981 -0.81926,0.0637 -1.01731,-0.3001c-0.19804,-0.3638 -0.06367,-0.8193 0.30013,-1.0173l2.5875,-1.4086c1.41597,-0.77082 3.12627,-0.77082 4.54217,0l2.5875,1.4086c0.3638,0.198 0.4982,0.6535 0.3001,1.0173c-0.198,0.3638 -0.6535,0.4982 -1.0173,0.3001l-2.5875,-1.4086Z"></path>
      </g>
    </svg>
  );
}
