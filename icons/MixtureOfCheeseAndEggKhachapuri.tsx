export function MixtureOfCheeseAndEggKhachapuri({
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
          d="M6.51995,18.6871c-3.41709,-3.4171 -3.41709,-8.95732 0,-12.3744l4.94975,-4.94974c0.2929,-0.2929 0.7678,-0.2929 1.0607,4.44089e-16l4.9497,4.94974c3.4171,3.41709 3.4171,8.95731 0,12.3744l-4.9497,4.9497c-0.2929,0.2929 -0.7678,0.2929 -1.0607,0l-4.94975,-4.9497Zm1.06066,-11.3138c-2.8313,2.83135 -2.8313,7.42175 0,10.253l4.41939,4.4194l4.4194,-4.4194c2.8313,-2.8313 2.8313,-7.4217 0,-10.253l-4.4194,-4.41941l-4.41939,4.41941Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M10.5495,8.59265c-0.4806,0.96119 -0.7995,2.34155 -0.7995,3.90725c0,1.5656 0.3189,2.946 0.7995,3.9072c0.503,1.0061 1.0592,1.3428 1.4505,1.3428c0.3913,0 0.9475,-0.3367 1.4505,-1.3428c0.4806,-0.9612 0.7995,-2.3416 0.7995,-3.9072c0,-1.5657 -0.3189,-2.94606 -0.7995,-3.90725c-0.503,-1.00606 -1.0592,-1.34277 -1.4505,-1.34277c-0.3913,0 -0.9475,0.33671 -1.4505,1.34277Zm-1.34164,-0.67082c0.58276,-1.16552 1.52664,-2.17195 2.79214,-2.17195c1.2655,0 2.2094,1.00643 2.7921,2.17195c0.6052,1.21037 0.9579,2.82997 0.9579,4.57807c0,1.748 -0.3527,3.3677 -0.9579,4.578c-0.5827,1.1655 -1.5266,2.172 -2.7921,2.172c-1.2655,0 -2.20938,-1.0065 -2.79214,-2.172c-0.60519,-1.2103 -0.95786,-2.83 -0.95786,-4.578c0,-1.7481 0.35267,-3.3677 0.95786,-4.57807Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M12,10.7499c-0.9665,0 -1.75,0.7835 -1.75,1.75c0,0.9665 0.7835,1.75 1.75,1.75c0.9665,0 1.75,-0.7835 1.75,-1.75c0,-0.9665 -0.7835,-1.75 -1.75,-1.75Zm-3.25,1.75c0,-1.7949 1.4551,-3.25002 3.25,-3.25002c1.7949,0 3.25,1.45512 3.25,3.25002c0,1.7949 -1.4551,3.25 -3.25,3.25c-1.7949,0 -3.25,-1.4551 -3.25,-3.25Z"
        ></path>
      </g>
    </svg>
  );
}
