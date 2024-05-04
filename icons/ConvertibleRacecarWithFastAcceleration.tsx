export function ConvertibleRacecarWithFastAcceleration({
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
        <path d="M5.47275,9.25012c-1.72571,0.01519 -3.09072,1.47248 -2.98916,3.19898l0.18023,3.064c0.03676,0.6249 0.40448,1.1825 0.96436,1.4625l0.17936,0.0896c0.24299,0.1215 0.51094,0.1848 0.78262,0.1848h14.8196c0.2717,0 0.5396,-0.0633 0.7826,-0.1848l0.1794,-0.0896c0.5599,-0.28 0.9276,-0.8376 0.9644,-1.4625l0.1802,-3.064c0.1016,-1.7265 -1.2635,-3.18379 -2.9892,-3.19898l-5.2809,0.40623c-0.8296,0.06381 -1.663,0.06381 -2.4926,-1e-05l-5.28095,-0.40622Zm0.02724,-0.75012v-0.75c-2.60161,0 -4.66659,2.19001 -4.51382,4.7871l0.180237,3.0641c0.06826,1.1605 0.75117,2.1961 1.79095,2.716l0.17936,0.0897c0.45128,0.2256 0.94889,0.3431 1.45344,0.3431h14.8196c0.5046,0 1.0022,-0.1175 1.4535,-0.3431l0.1793,-0.0897c1.0398,-0.5199 1.7227,-1.5555 1.791,-2.716l0.1802,-3.0641c0.1528,-2.59709 -1.9122,-4.7871 -4.5138,-4.7871v0.75l-0.0575,-0.74779l-5.3112,0.40855c-0.7531,0.05793 -1.5095,0.05793 -2.2626,0l-5.31119,-0.40855l-0.05752,0.74779Z"></path>
        <path d="M6.94998,4.65c0.42493,-0.56656 1.0918,-0.9 1.8,-0.9h6.50002c0.7082,0 1.3751,0.33344 1.8,0.9l2.55,3.4c0.2485,0.33137 0.1814,0.80147 -0.15,1.05c-0.3314,0.24853 -0.8015,0.18137 -1.05,-0.15l-2.55,-3.4c-0.1417,-0.18885 -0.3639,-0.3 -0.6,-0.3h-6.50002c-0.23606,0 -0.45836,0.11115 -0.6,0.3l-2.55,3.4c-0.24853,0.33137 -0.71863,0.39853 -1.05,0.15c-0.33137,-0.24853 -0.39853,-0.71863 -0.15,-1.05l2.55,-3.4Z"></path>
        <path d="M1.75,6.5c0,-0.41421 0.33579,-0.75 0.75,-0.75h1.5c0.19891,0 0.38968,0.07902 0.53033,0.21967l1.5,1.5c0.29289,0.29289 0.29289,0.76777 0,1.06066c-0.29289,0.29289 -0.76777,0.29289 -1.06066,0l-1.28033,-1.28033h-1.18934c-0.41421,0 -0.75,-0.33579 -0.75,-0.75Z"></path>
        <path d="M22.25,6.5c0,-0.41421 -0.3358,-0.75 -0.75,-0.75h-1.5c-0.1989,0 -0.3897,0.07902 -0.5303,0.21967l-1.5,1.5c-0.2929,0.29289 -0.2929,0.76777 0,1.06066c0.2929,0.29289 0.7677,0.29289 1.0606,0l1.2804,-1.28033h1.1893c0.4142,0 0.75,-0.33579 0.75,-0.75Z"></path>
        <path d="M3.26454,11.3529c-0.08123,0.4062 0.18218,0.8013 0.58835,0.8825l2.5,0.5c0.40617,0.0813 0.80129,-0.1821 0.88252,-0.5883c0.08124,-0.4062 -0.18218,-0.8013 -0.58835,-0.8825l-2.5,-0.5c-0.40617,-0.0813 -0.80128,0.1822 -0.88252,0.5883Z"></path>
        <path d="M20.7354,11.3529c0.0812,0.4062 -0.1822,0.8013 -0.5884,0.8825l-2.5,0.5c-0.4061,0.0813 -0.8012,-0.1821 -0.8825,-0.5883c-0.0812,-0.4062 0.1822,-0.8013 0.5884,-0.8825l2.5,-0.5c0.4061,-0.0813 0.8013,0.1822 0.8825,0.5883Z"></path>
        <path d="M10.4822,13.75c-0.3629,0 -0.70172,0.1813 -0.903,0.4833c-0.40799,0.612 -1.05734,1.0212 -1.78546,1.1252l-1.50972,0.2157c-0.52168,0.0745 -0.98199,0.3801 -1.25312,0.832l-0.88779,1.4797c-0.21311,0.3552 -0.67381,0.4703 -1.02899,0.2572c-0.35519,-0.2131 -0.47036,-0.6738 -0.25725,-1.029l0.88779,-1.4796c0.50352,-0.8392 1.3584,-1.4068 2.32723,-1.5452l1.50971,-0.2157c0.30566,-0.0437 0.57825,-0.2155 0.74952,-0.4724c0.47948,-0.7192 1.28669,-1.1512 2.15108,-1.1512h3.0356c0.8644,0 1.6716,0.432 2.1511,1.1512c0.1712,0.2569 0.4438,0.4287 0.7495,0.4724l1.5097,0.2157c0.9688,0.1384 1.8237,0.706 2.3272,1.5452l0.8878,1.4796c0.2131,0.3552 0.0979,0.8159 -0.2572,1.029c-0.3552,0.2131 -0.8159,0.098 -1.029,-0.2572l-0.8878,-1.4797c-0.2711,-0.4519 -0.7315,-0.7575 -1.2531,-0.832l-1.5098,-0.2157c-0.7281,-0.104 -1.3774,-0.5132 -1.7854,-1.1252c-0.2013,-0.302 -0.5402,-0.4833 -0.903,-0.4833h-3.0356Z"></path>
        <path d="M2,15.25c0.41421,0 0.75,0.3358 0.75,0.75v3.5c0,0.1381 0.11193,0.25 0.25,0.25h2.5c0.13807,0 0.25,-0.1119 0.25,-0.25v-1c0,-0.4142 0.33579,-0.75 0.75,-0.75c0.41421,0 0.75,0.3358 0.75,0.75v1c0,0.9665 -0.7835,1.75 -1.75,1.75h-2.5c-0.9665,0 -1.75,-0.7835 -1.75,-1.75v-3.5c0,-0.4142 0.33579,-0.75 0.75,-0.75Z"></path>
        <path d="M22,15.25c-0.4142,0 -0.75,0.3358 -0.75,0.75v3.5c0,0.1381 -0.1119,0.25 -0.25,0.25h-2.5c-0.1381,0 -0.25,-0.1119 -0.25,-0.25v-1c0,-0.4142 -0.3358,-0.75 -0.75,-0.75c-0.4142,0 -0.75,0.3358 -0.75,0.75v1c0,0.9665 0.7835,1.75 1.75,1.75h2.5c0.9665,0 1.75,-0.7835 1.75,-1.75v-3.5c0,-0.4142 -0.3358,-0.75 -0.75,-0.75Z"></path>
      </g>
    </svg>
  );
}
