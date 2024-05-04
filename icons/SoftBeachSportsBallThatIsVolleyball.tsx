export function SoftBeachSportsBallThatIsVolleyball({
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
          d="M12,1.75c-5.66092,0 -10.25,4.58908 -10.25,10.25c0,5.6609 4.58908,10.25 10.25,10.25c5.6609,0 10.25,-4.5891 10.25,-10.25c0,-5.66092 -4.5891,-10.25 -10.25,-10.25Zm-11.75,10.25c0,-6.48935 5.26065,-11.75 11.75,-11.75c6.4893,0 11.75,5.26065 11.75,11.75c0,6.4893 -5.2607,11.75 -11.75,11.75c-6.48935,0 -11.75,-5.2607 -11.75,-11.75Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M3.6915,3.69155c0.2929,-0.29289 0.76777,-0.29289 1.06066,0l15.5563,15.5564c0.2929,0.2929 0.2929,0.7678 0,1.0607c-0.2929,0.2929 -0.7678,0.2929 -1.0606,0l-15.5564,-15.5564c-0.29289,-0.29289 -0.29289,-0.76776 4.44089e-16,-1.06066Zm-3.18198,6.71755c0.292893,-0.2929 0.767767,-0.2929 1.06066,0l12.0208,12.0208c0.2929,0.2929 0.2929,0.7677 0,1.0606c-0.2929,0.2929 -0.7678,0.2929 -1.0607,0l-12.0208,-12.0208c-0.292894,-0.2929 -0.292893,-0.7677 2.22045e-16,-1.0606Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M17.521,1.96034c0.298,0.28765 0.3064,0.76245 0.0188,1.0605l-6.6097,6.8485l3.2006,3.20066l6.8486,-6.60966c0.298,-0.28765 0.7728,-0.27922 1.0605,0.01883c0.2876,0.29804 0.2792,0.77284 -0.0189,1.06049l-7.3786,7.12134c-0.2944,0.284 -0.762,0.2799 -1.0512,-0.0094l-4.24265,-4.2426c-0.28923,-0.2892 -0.29338,-0.75686 -0.00933,-1.05117l7.12138,-7.37867c0.2876,-0.29804 0.7624,-0.30646 1.0605,-0.01882Z"
        ></path>
      </g>
    </svg>
  );
}
