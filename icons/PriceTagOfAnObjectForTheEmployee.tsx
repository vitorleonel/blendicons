export function PriceTagOfAnObjectForTheEmployee({
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
          d="M6,2.75c-0.69036,0 -1.25,0.55964 -1.25,1.25c0,0.69036 0.55964,1.25 1.25,1.25c0.69036,0 1.25,-0.55964 1.25,-1.25c0,-0.69036 -0.55964,-1.25 -1.25,-1.25Zm-2.75,1.25c0,-1.51878 1.23122,-2.75 2.75,-2.75c1.51878,0 2.75,1.23122 2.75,2.75c0,1.51878 -1.23122,2.75 -2.75,2.75c-1.51878,0 -2.75,-1.23122 -2.75,-2.75Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M4,8.75c-0.78756,0 -1.25,0.53866 -1.25,1v4.7868c0,0.0031 0.00035,0.007 0.00383,0.0141c0.00396,0.0082 0.01332,0.023 0.03294,0.0402c0.04029,0.0352 0.11343,0.0707 0.21323,0.0707h1c0.41421,0 0.75,0.3358 0.75,0.75v5.7132c0,0.0031 0.00035,0.007 0.00383,0.0142c0.00396,0.0082 0.01332,0.0229 0.03294,0.0401c0.04029,0.0352 0.11343,0.0707 0.21323,0.0707h2c0.0998,0 0.17294,-0.0355 0.21323,-0.0707c0.01962,-0.0172 0.02898,-0.0319 0.03294,-0.0401c0.00348,-0.0072 0.00383,-0.0111 0.00383,-0.0142v-5.7132c0,-0.4142 0.33579,-0.75 0.75,-0.75h1c0.0998,0 0.17294,-0.0355 0.21323,-0.0707c0.01962,-0.0172 0.02898,-0.032 0.03294,-0.0402c0.00348,-0.0071 0.00383,-0.011 0.00383,-0.0141v-4.7868c0,-0.46134 -0.46244,-1 -1.25,-1h-4Zm-2.75,1c0,-1.47165 1.32842,-2.5 2.75,-2.5h4c1.42158,0 2.75,1.02835 2.75,2.5v4.7868c0,0.9884 -0.8807,1.625 -1.75,1.625h-0.25v4.9632c0,0.9884 -0.88071,1.625 -1.75,1.625h-2c-0.86929,0 -1.75,-0.6366 -1.75,-1.625v-4.9632h-0.25c-0.86929,0 -1.75,-0.6366 -1.75,-1.625v-4.7868Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M12.3815,2.99806c0.0527,-0.31611 0.3004,-0.56382 0.6165,-0.6165l3.6366,-0.60609c0.2389,-0.03982 0.4823,0.03819 0.6536,0.20946l4.8487,4.84874c0.2929,0.29289 0.2929,0.76776 0,1.06066l-4.2426,4.24267c-0.2929,0.2929 -0.7678,0.2929 -1.0607,0l-4.8487,-4.84877c-0.1713,-0.17127 -0.2493,-0.41471 -0.2095,-0.65362l0.6061,-3.63655Zm0.937,3.50243l4.0455,4.04551l3.1819,-3.182l-4.0455,-4.04549l-2.7274,0.45457l-0.4545,2.72741Z"
        ></path>
      </g>
    </svg>
  );
}
