export function UseOfLockSystemToProtectFolderData({
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
        <path d="M1.25,2.5c0,-0.41421 0.33579,-0.75 0.75,-0.75h5c0.17545,0 0.34535,0.06151 0.48014,0.17383l2.79136,2.32617h11.7285c0.4142,0 0.75,0.33579 0.75,0.75v16.5c0,0.4142 -0.3358,0.75 -0.75,0.75h-20c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-19Zm1.5,0.75v17.5h18.5v-15h-11.25c-0.17545,0 -0.34535,-0.06151 -0.48014,-0.17383l-2.7914,-2.32617h-3.97846Z"></path>
        <path d="M8.25,12.5c0,-0.4142 0.33579,-0.75 0.75,-0.75h6c0.4142,0 0.75,0.3358 0.75,0.75v5c0,0.4142 -0.3358,0.75 -0.75,0.75h-6c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-5Zm1.5,0.75v3.5h4.5v-3.5h-4.5Z"></path>
        <path d="M9.25,10.5c0,-1.51878 1.2312,-2.75 2.75,-2.75c1.5188,0 2.75,1.23122 2.75,2.75v2c0,0.4142 -0.3358,0.75 -0.75,0.75h-4c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-2Zm2.75,-1.25c-0.6904,0 -1.25,0.55964 -1.25,1.25v1.25h2.5v-1.25c0,-0.69036 -0.5596,-1.25 -1.25,-1.25Z"></path>
      </g>
    </svg>
  );
}
