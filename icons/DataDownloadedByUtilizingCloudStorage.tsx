export function DataDownloadedByUtilizingCloudStorage({
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
        <path d="M13,5.75c-2.7902,0 -5.07247,2.17704 -5.24011,4.9246c-0.01365,0.2238 -0.12674,0.4298 -0.30826,0.5615c-0.18152,0.1316 -0.41242,0.1751 -0.62942,0.1186c-0.26181,-0.0682 -0.53719,-0.1047 -0.82221,-0.1047c-1.79493,0 -3.25,1.4551 -3.25,3.25c0,1.7949 1.45507,3.25 3.25,3.25h12c2.0711,0 3.75,-1.6789 3.75,-3.75c0,-1.8339 -1.3172,-3.3618 -3.0574,-3.6863c-0.2901,-0.0541 -0.5215,-0.2733 -0.5912,-0.55997c-0.5593,-2.29824 -2.6321,-4.00373 -5.1014,-4.00373Zm-6.63695,4.0137c0.58096,-3.13776 3.33125,-5.5137 6.63695,-5.5137c3.0132,0 5.5637,1.97367 6.4322,4.69794c2.2034,0.6236 3.8178,2.64856 3.8178,5.05206c0,2.8995 -2.3505,5.25 -5.25,5.25h-12c-2.62335,0 -4.75,-2.1266 -4.75,-4.75c0,-2.6234 2.12665,-4.75 4.75,-4.75c0.12206,0 0.24313,0.00462 0.36305,0.0137Z"></path>
        <path d="M13,16.25c-0.4142,0 -0.75,-0.3358 -0.75,-0.75v-6c0,-0.41421 0.3358,-0.75 0.75,-0.75c0.4142,0 0.75,0.33579 0.75,0.75v6c0,0.4142 -0.3358,0.75 -0.75,0.75Z"></path>
        <path d="M13.5303,16.0303c-0.2929,0.2929 -0.7677,0.2929 -1.0606,0l-2.50003,-2.5c-0.29289,-0.2929 -0.29289,-0.7677 0,-1.0606c0.29293,-0.2929 0.76773,-0.2929 1.06063,0l1.9697,1.9696l1.9697,-1.9696c0.2929,-0.2929 0.7677,-0.2929 1.0606,0c0.2929,0.2929 0.2929,0.7677 0,1.0606l-2.5,2.5Z"></path>
      </g>
    </svg>
  );
}
