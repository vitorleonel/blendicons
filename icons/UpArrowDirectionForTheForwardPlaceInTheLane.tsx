export function UpArrowDirectionForTheForwardPlaceInTheLane({
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
        <path d="M0.25,3c0,-1.51878 1.23122,-2.75 2.75,-2.75h18c1.5188,0 2.75,1.23122 2.75,2.75v18c0,1.5188 -1.2312,2.75 -2.75,2.75h-18c-1.51878,0 -2.75,-1.2312 -2.75,-2.75v-18Zm2.75,-1.25c-0.69036,0 -1.25,0.55964 -1.25,1.25v18c0,0.6904 0.55964,1.25 1.25,1.25h18c0.6904,0 1.25,-0.5596 1.25,-1.25v-18c0,-0.69036 -0.5596,-1.25 -1.25,-1.25h-18Z"></path>
        <path d="M16.6679,9.86741c0.1282,-0.25096 0.1049,-0.55258 -0.0604,-0.78085l-4,-5.52631c-0.141,-0.19486 -0.367,-0.31025 -0.6075,-0.31025c-0.2406,0 -0.4665,0.11539 -0.6076,0.31025l-3.99995,5.52631c-0.16523,0.22827 -0.18856,0.52989 -0.0604,0.78085c0.12815,0.25099 0.38616,0.40889 0.66795,0.40889h1.65v7.9342c0,0.8596 0.7034,1.5395 1.55,1.5395h1.6c0.8466,0 1.55,-0.6799 1.55,-1.5395v-7.9342h1.65c0.2818,0 0.5398,-0.1579 0.6679,-0.40889Zm-2.1366,-1.09109h-0.9313c-0.4142,0 -0.75,0.33578 -0.75,0.75v8.68418c0,0.0054 -0.0009,0.0089 -0.0022,0.0119c-0.0015,0.0035 -0.0043,0.008 -0.0089,0.0125c-0.0091,0.009 -0.0216,0.0151 -0.0389,0.0151h-1.6c-0.0173,0 -0.0298,-0.0061 -0.0389,-0.0151c-0.0046,-0.0045 -0.0074,-0.009 -0.0089,-0.0125c-0.0013,-0.003 -0.0022,-0.0065 -0.0022,-0.0119v-8.68418c0,-0.41422 -0.3358,-0.75 -0.75,-0.75h-0.9313l2.5313,-3.49719l2.5313,3.49719Z"></path>
      </g>
    </svg>
  );
}
