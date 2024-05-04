export function SolidLineBulbHungInDecorativeManner({
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
            transform="matrix(1,0,0,1,0,0.43457)"
          ></path>
        </mask>
      </defs>
      <g mask="url(#a)">
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M5.13577,8.77895c0.22651,-0.12584 0.50195,-0.12584 0.72846,0l2.95382,1.64105c1.19245,0.6624 1.93195,1.9193 1.93195,3.2833c0,0.542 -0.4393,0.9813 -0.98123,0.9813h-8.53754c-0.541915,0 -0.98123,-0.4393 -0.98123,-0.9813c0,-1.364 0.739534,-2.6209 1.93195,-3.2833l2.95382,-1.64105Zm0.36423,1.51355l-2.58959,1.4387c-0.56157,0.312 -0.95591,0.8435 -1.10002,1.4534h7.37922c-0.14411,-0.6099 -0.53845,-1.1414 -1.10002,-1.4534l-2.58959,-1.4387Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M11.6358,18.279c0.2265,-0.1259 0.5019,-0.1259 0.7284,0l2.9539,1.641c1.1924,0.6624 1.9319,1.9193 1.9319,3.2833c0,0.542 -0.4393,0.9813 -0.9812,0.9813h-8.53757c-0.54192,0 -0.98123,-0.4393 -0.98123,-0.9813c0,-1.364 0.73953,-2.6209 1.93195,-3.2833l2.95385,-1.641Zm0.3642,1.5135l-2.58959,1.4387c-0.56157,0.312 -0.95591,0.8435 -1.10002,1.4534h7.37921c-0.1441,-0.6099 -0.5384,-1.1414 -1.1,-1.4534l-2.5896,-1.4387Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M18.1358,12.279c0.2265,-0.1259 0.5019,-0.1259 0.7284,0l2.9539,1.641c1.1924,0.6624 1.9319,1.9193 1.9319,3.2833c0,0.542 -0.4393,0.9813 -0.9812,0.9813h-8.5376c-0.5419,0 -0.9812,-0.4393 -0.9812,-0.9813c0,-1.364 0.7395,-2.6209 1.9319,-3.2833l2.9539,-1.641Zm0.3642,1.5135l-2.5896,1.4387c-0.5616,0.312 -0.9559,0.8435 -1.1,1.4534h7.3792c-0.1441,-0.6099 -0.5384,-1.1414 -1.1,-1.4534l-2.5896,-1.4387Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M5.5,1.18457c0.41421,0 0.75,0.33579 0.75,0.75v7.5c0,0.41421 -0.33579,0.75003 -0.75,0.75003c-0.41421,0 -0.75,-0.33582 -0.75,-0.75003v-7.5c0,-0.41421 0.33579,-0.75 0.75,-0.75Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M12,1.18457c0.4142,0 0.75,0.33579 0.75,0.75v17c0,0.4142 -0.3358,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.3358 -0.75,-0.75v-17c0,-0.41421 0.3358,-0.75 0.75,-0.75Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M18.5,1.18457c0.4142,0 0.75,0.33579 0.75,0.75v11c0,0.4142 -0.3358,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.3358 -0.75,-0.75v-11c0,-0.41421 0.3358,-0.75 0.75,-0.75Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M2.75,1.93457c0,-0.41421 0.33579,-0.75 0.75,-0.75h17c0.4142,0 0.75,0.33579 0.75,0.75c0,0.41421 -0.3358,0.75 -0.75,0.75h-17c-0.41421,0 -0.75,-0.33579 -0.75,-0.75Z"
        ></path>
      </g>
    </svg>
  );
}
