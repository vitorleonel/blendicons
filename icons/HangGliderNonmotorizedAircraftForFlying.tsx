export function HangGliderNonmotorizedAircraftForFlying({
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
        <path d="M12,2.75c0.2108,0 0.4118,0.08867 0.5539,0.2443l10.5,11.5c0.2213,0.2424 0.2593,0.6006 0.0937,0.8841c-0.1657,0.2834 -0.4964,0.4262 -0.8162,0.3524l-4.6098,-1.0638c-0.9239,-0.2132 -1.8925,0.0646 -2.563,0.735l-2.6283,2.6283c-0.2929,0.2929 -0.7677,0.2929 -1.0606,0l-2.62833,-2.6283c-0.67046,-0.6704 -1.63901,-0.9482 -2.5629,-0.735l-4.60982,1.0638c-0.31987,0.0738 -0.65058,-0.069 -0.816196,-0.3524c-0.165619,-0.2835 -0.127657,-0.6417 0.093692,-0.8841l10.5,-11.5c0.1421,-0.15563 0.3432,-0.2443 0.5539,-0.2443Zm-8.3229,10.9779l2.26408,-0.5225c1.42783,-0.3295 2.92469,0.0998 3.96085,1.136l2.09797,2.0979l2.098,-2.0979c1.0362,-1.0362 2.533,-1.4655 3.9608,-1.136l2.2641,0.5225l-8.3229,-9.11558l-8.3229,9.11558Z"></path>
        <path d="M12,2.75c0.4142,0 0.75,0.33579 0.75,0.75v17c0,0.4142 -0.3358,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.3358 -0.75,-0.75v-17c0,-0.41421 0.3358,-0.75 0.75,-0.75Z"></path>
      </g>
    </svg>
  );
}
