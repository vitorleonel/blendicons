export function KeepOutDoorHangingLayoutForTheHotelRoom({
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
        <path d="M11,1.75c-1.79493,0 -3.25,1.45508 -3.25,3.25c0,0.13807 0.11193,0.25 0.25,0.25h0.25351c0.07829,-1.67004 1.45708,-3 3.14649,-3h0.6c2.0711,0 3.75,1.67893 3.75,3.75c0,2.07107 -1.6789,3.75 -3.75,3.75h-3c-0.69036,0 -1.25,0.5596 -1.25,1.25v10c0,0.6904 0.55964,1.25 1.25,1.25h6c0.6904,0 1.25,-0.5596 1.25,-1.25v-16c0,-1.79493 -1.4551,-3.25 -3.25,-3.25h-2Zm-4.75,3.25c0,-2.62335 2.12665,-4.75 4.75,-4.75h2c2.6234,0 4.75,2.12665 4.75,4.75v16c0,1.5188 -1.2312,2.75 -2.75,2.75h-6c-1.51878,0 -2.75,-1.2312 -2.75,-2.75v-10c0,-1.51878 1.23122,-2.75 2.75,-2.75h3c1.2426,0 2.25,-1.00736 2.25,-2.25c0,-1.24264 -1.0074,-2.25 -2.25,-2.25h-0.6c-0.9113,0 -1.65,0.73873 -1.65,1.65c0,0.74559 -0.60442,1.35 -1.35,1.35h-0.4c-0.9665,0 -1.75,-0.7835 -1.75,-1.75Z"></path>
        <path d="M12,13.75c-1.2426,0 -2.25,1.0074 -2.25,2.25c0,1.2426 1.0074,2.25 2.25,2.25c1.2426,0 2.25,-1.0074 2.25,-2.25c0,-1.2426 -1.0074,-2.25 -2.25,-2.25Zm-3.75,2.25c0,-2.0711 1.67893,-3.75 3.75,-3.75c2.0711,0 3.75,1.6789 3.75,3.75c0,2.0711 -1.6789,3.75 -3.75,3.75c-2.07107,0 -3.75,-1.6789 -3.75,-3.75Z"></path>
        <path d="M15.75,16c0,0.4142 -0.3358,0.75 -0.75,0.75h-6c-0.41421,0 -0.75,-0.3358 -0.75,-0.75c0,-0.4142 0.33579,-0.75 0.75,-0.75h6c0.4142,0 0.75,0.3358 0.75,0.75Z"></path>
      </g>
    </svg>
  );
}
