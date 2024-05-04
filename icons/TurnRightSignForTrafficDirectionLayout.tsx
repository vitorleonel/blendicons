export function TurnRightSignForTrafficDirectionLayout({
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
        <path d="M0.25,21c0,1.5188 1.23122,2.75 2.75,2.75h18c1.5188,0 2.75,-1.2312 2.75,-2.75v-18c0,-1.51878 -1.2312,-2.75 -2.75,-2.75h-18c-1.51878,0 -2.75,1.23122 -2.75,2.75v18Zm2.75,1.25c-0.69036,0 -1.25,-0.5596 -1.25,-1.25v-18c0,-0.69036 0.55964,-1.25 1.25,-1.25h18c0.6904,0 1.25,0.55964 1.25,1.25v18c0,0.6904 -0.5596,1.25 -1.25,1.25h-18Z"></path>
        <path d="M14.1326,4.33205c-0.251,0.12816 -0.4089,0.38617 -0.4089,0.66795v1.75449c-5.25898,0.15797 -9.4737,4.47081 -9.4737,9.76811v2.4774c0,0.4142 0.33579,0.75 0.75,0.75h3c0.41421,0 0.75,-0.3358 0.75,-0.75v-2.2346c0,-2.8421 2.1894,-5.1729 4.9737,-5.3976v1.6322c0,0.2818 0.1579,0.5398 0.4089,0.668c0.251,0.1281 0.5526,0.1048 0.7808,-0.0604l5.5264,-4.00004c0.1948,-0.14105 0.3102,-0.367 0.3102,-0.60756c0,-0.24055 -0.1154,-0.4665 -0.3102,-0.60755l-5.5264,-4c-0.2282,-0.16522 -0.5298,-0.18855 -0.7808,-0.0604Zm4.5883,4.66795l-3.4972,2.5313v-0.623c0,-0.5845 -0.4738,-1.0583 -1.0583,-1.0583c-3.8193,0 -6.9154,3.0961 -6.9154,6.9154v1.4846h-1.5v-1.7274c0,-4.5688 3.70375,-8.2726 8.2726,-8.2726c0.6633,0 1.2011,-0.53776 1.2011,-1.20112v-0.58017l3.4972,2.53129Z"></path>
      </g>
    </svg>
  );
}
