export function FavoriteSongOnASongMusicPlaylist({
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
      <path
        d="M12,2.75c-5.10863,0 -9.25,4.14137 -9.25,9.25c0,5.1086 4.14137,9.25 9.25,9.25c0.4723,0 0.936,-0.0353 1.3884,-0.1034c0.4096,-0.0616 0.7916,0.2205 0.8533,0.6301c0.0616,0.4096 -0.2205,0.7916 -0.6301,0.8532c-0.5261,0.0791 -1.0643,0.1201 -1.6116,0.1201c-5.93706,0 -10.75,-4.8129 -10.75,-10.75c0,-5.93706 4.81294,-10.75 10.75,-10.75c5.9371,0 10.75,4.81294 10.75,10.75c0,1.3223 -0.2391,2.5905 -0.6771,3.7625c-0.1449,0.388 -0.577,0.585 -0.965,0.4401c-0.388,-0.145 -0.585,-0.5771 -0.4401,-0.9651c0.3762,-1.0067 0.5822,-2.0972 0.5822,-3.2375c0,-5.10863 -4.1414,-9.25 -9.25,-9.25Zm-2.36952,5.59735c0.23513,-0.13313 0.52372,-0.12949 0.75542,0.00953l5,3.00002c0.2259,0.1355 0.3641,0.3797 0.3641,0.6431c0,0.2634 -0.1382,0.5076 -0.3641,0.6431l-5,3c-0.2317,0.139 -0.52029,0.1427 -0.75542,0.0095c-0.23514,-0.1331 -0.38048,-0.3824 -0.38048,-0.6526v-6c0,-0.2702 0.14534,-0.51952 0.38048,-0.65265Zm1.11952,5.32805l2.7923,-1.6754l-2.7923,-1.6754v3.3508Zm9.7804,3.2635c-0.7573,-0.7573 -1.9024,-0.8902 -2.7958,-0.3989c-0.8934,-0.4913 -2.0385,-0.3584 -2.7957,0.3989c-0.9185,0.9184 -0.9185,2.4076 0,3.326l0.0103,0.0103l2.2551,2.2551c0.1407,0.1407 0.3315,0.2197 0.5304,0.2197c0.1989,0 0.3897,-0.079 0.5303,-0.2197l2.2654,-2.2654c0.9184,-0.9185 0.9184,-2.4076 0,-3.326Zm-4.5309,1.0606c0.3327,-0.3327 0.8721,-0.3327 1.2048,0c0.1406,0.1407 0.3314,0.2197 0.5303,0.2197c0.1989,0 0.3897,-0.079 0.5303,-0.2197c0.3327,-0.3327 0.8721,-0.3327 1.2048,0c0.3327,0.3327 0.3327,0.8721 0,1.2047l-1.735,1.7351l-1.7248,-1.7248l-0.0048,-0.0047l-0.0056,-0.0055c-0.3327,-0.3327 -0.3327,-0.8721 0,-1.2048Z"
        fill="#000"
        fill-rule="evenodd"
      ></path>
    </svg>
  );
}
