export function CloudStorageSystemWithDataEncryption({
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
        <path d="M12,9.25c-2.34721,0 -4.25,1.9028 -4.25,4.25c0,2.3472 1.90279,4.25 4.25,4.25c2.3472,0 4.25,-1.9028 4.25,-4.25c0,-2.3472 -1.9028,-4.25 -4.25,-4.25Zm-5.75,4.25c0,-3.1756 2.57436,-5.75 5.75,-5.75c3.1756,0 5.75,2.5744 5.75,5.75c0,3.1756 -2.5744,5.75 -5.75,5.75c-3.17564,0 -5.75,-2.5744 -5.75,-5.75Z"></path>
        <path d="M12,11.9585c-0.2761,0 -0.5,0.2239 -0.5,0.5c0,0.2761 0.2239,0.5 0.5,0.5c0.2761,0 0.5,-0.2239 0.5,-0.5c0,-0.2761 -0.2239,-0.5 -0.5,-0.5Zm-2,0.5c0,-1.1046 0.8954,-2 2,-2c1.1046,0 2,0.8954 2,2c0,1.1046 -0.8954,2 -2,2c-1.1046,0 -2,-0.8954 -2,-2Z"></path>
        <path d="M12,12.9585c0.4142,0 0.75,0.3358 0.75,0.75v2.0833c0,0.4142 -0.3358,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.3358 -0.75,-0.75v-2.0833c0,-0.4142 0.3358,-0.75 0.75,-0.75Z"></path>
        <path d="M15.25,16.5c0,-0.4142 0.3358,-0.75 0.75,-0.75h3.5c0.4142,0 0.75,0.3358 0.75,0.75v2.5c0,0.4142 -0.3358,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.3358 -0.75,-0.75v-1.75h-2.75c-0.4142,0 -0.75,-0.3358 -0.75,-0.75Z"></path>
        <path d="M8.75,16.5c0,-0.4142 -0.33579,-0.75 -0.75,-0.75h-3.5c-0.41421,0 -0.75,0.3358 -0.75,0.75v2.5c0,0.4142 0.33579,0.75 0.75,0.75c0.41421,0 0.75,-0.3358 0.75,-0.75v-1.75h2.75c0.41421,0 0.75,-0.3358 0.75,-0.75Z"></path>
        <path d="M12,2.75c-2.09882,0 -3.84362,1.52212 -4.18815,3.52276c-0.03597,0.20891 -0.15867,0.39284 -0.33775,0.50628c-0.17908,0.11345 -0.3978,0.14581 -0.60205,0.08909c-0.27666,-0.07683 -0.56893,-0.11813 -0.87205,-0.11813c-1.79493,0 -3.25,1.45507 -3.25,3.25c0,1.6568 1.24038,3.025 2.8428,3.2248c0.04146,0.0052 0.08178,0.0137 0.1207,0.0252h1.0365c0.41421,0 0.75,0.3358 0.75,0.75c0,0.4142 -0.33579,0.75 -0.75,0.75h-1.25c-0.11333,0 -0.22078,-0.0251 -0.31709,-0.0701c-2.23428,-0.3878 -3.93291,-2.3349 -3.93291,-4.6799c0,-2.62335 2.12665,-4.75 4.75,-4.75c0.17305,0 0.34411,0.00928 0.51269,0.02741c0.73214,-2.33415 2.91137,-4.02741 5.48731,-4.02741c2.5759,0 4.7552,1.69326 5.4873,4.02741c0.1686,-0.01812 0.3397,-0.02741 0.5127,-0.02741c2.6234,0 4.75,2.12665 4.75,4.75c0,2.345 -1.6986,4.2921 -3.9329,4.6799c-0.0963,0.045 -0.2038,0.0701 -0.3171,0.0701h-1.25c-0.4142,0 -0.75,-0.3358 -0.75,-0.75c0,-0.4142 0.3358,-0.75 0.75,-0.75h1.0365c0.0389,-0.0115 0.0792,-0.02 0.1207,-0.0252c1.6024,-0.1998 2.8428,-1.568 2.8428,-3.2248c0,-1.79493 -1.4551,-3.25 -3.25,-3.25c-0.3031,0 -0.5954,0.0413 -0.872,0.11813c-0.2043,0.05672 -0.423,0.02436 -0.6021,-0.08909c-0.1791,-0.11344 -0.3018,-0.29737 -0.3378,-0.50628c-0.3445,-2.00064 -2.0893,-3.52276 -4.1881,-3.52276Z"></path>
        <path d="M4.5,19.75c-0.41421,0 -0.75,0.3358 -0.75,0.75c0,0.4142 0.33579,0.75 0.75,0.75c0.41421,0 0.75,-0.3358 0.75,-0.75c0,-0.4142 -0.33579,-0.75 -0.75,-0.75Zm-2.25,0.75c0,-1.2426 1.00736,-2.25 2.25,-2.25c1.24264,0 2.25,1.0074 2.25,2.25c0,1.2426 -1.00736,2.25 -2.25,2.25c-1.24264,0 -2.25,-1.0074 -2.25,-2.25Z"></path>
        <path d="M19.5,19.75c-0.4142,0 -0.75,0.3358 -0.75,0.75c0,0.4142 0.3358,0.75 0.75,0.75c0.4142,0 0.75,-0.3358 0.75,-0.75c0,-0.4142 -0.3358,-0.75 -0.75,-0.75Zm-2.25,0.75c0,-1.2426 1.0074,-2.25 2.25,-2.25c1.2426,0 2.25,1.0074 2.25,2.25c0,1.2426 -1.0074,2.25 -2.25,2.25c-1.2426,0 -2.25,-1.0074 -2.25,-2.25Z"></path>
      </g>
    </svg>
  );
}
