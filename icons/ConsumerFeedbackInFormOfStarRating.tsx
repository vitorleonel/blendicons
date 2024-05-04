export function ConsumerFeedbackInFormOfStarRating({
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
        <path d="M3.25,15c0,-0.4142 0.33579,-0.75 0.75,-0.75h4c0.41421,0 0.75,0.3358 0.75,0.75v7c0,0.4142 -0.33579,0.75 -0.75,0.75h-4c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-7Zm1.5,0.75v5.5h2.5v-5.5h-2.5Z"></path>
        <path d="M13,10.25c-0.4142,0 -0.75,0.3358 -0.75,0.75v2c0,0.1164 -0.0271,0.2313 -0.0792,0.3354l-1.5,3c-0.127,0.2541 -0.3867,0.4146 -0.6708,0.4146h-1.25v3.5h8.5995l0.408,-2.8561c0.0302,-0.2112 0.1489,-0.3996 0.3265,-0.5179l1.166,-0.7774v-1.8486h-4.75c-0.4142,0 -0.75,-0.3358 -0.75,-0.75v-2.5c0,-0.4142 -0.3358,-0.75 -0.75,-0.75Zm-2.25,0.75c0,-1.24264 1.0074,-2.25 2.25,-2.25c1.2426,0 2.25,1.00736 2.25,2.25v1.75h4.75c0.4142,0 0.75,0.3358 0.75,0.75v3c0,0.2508 -0.1253,0.4849 -0.334,0.624l-1.221,0.814l-0.4525,3.1681c-0.0528,0.3695 -0.3693,0.6439 -0.7425,0.6439h-10c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-5c0,-0.4142 0.33579,-0.75 0.75,-0.75h1.53647l1.21353,-2.4271v-1.8229Z"></path>
        <path d="M4.99991,3.25c0.26309,0 0.50695,0.13785 0.64261,0.36327l0.82364,1.36861l1.55614,0.36041c0.25631,0.05936 0.46277,0.24868 0.54407,0.4989c0.0813,0.25021 0.02555,0.52473 -0.14692,0.72341l-1.0471,1.20625l0.13811,1.59135c0.02274,0.26211 -0.09351,0.51697 -0.30636,0.6716c-0.21284,0.1547 -0.49115,0.1865 -0.7334,0.0838l-1.47079,-0.62307l-1.47079,0.62307c-0.24225,0.1027 -0.52056,0.0709 -0.7334,-0.0838c-0.21285,-0.15463 -0.3291,-0.40949 -0.30636,-0.6716l0.13811,-1.59135l-1.0471,-1.20625c-0.17247,-0.19868 -0.22822,-0.4732 -0.14692,-0.72341c0.0813,-0.25022 0.28776,-0.43954 0.54407,-0.4989l1.55614,-0.36041l0.82364,-1.36861c0.13566,-0.22542 0.37952,-0.36327 0.64261,-0.36327Zm0,2.20452l-0.34487,0.57306c-0.10472,0.17401 -0.27553,0.29811 -0.47339,0.34393l-0.65158,0.15091l0.43844,0.50508c0.13313,0.15337 0.19838,0.35417 0.18082,0.55649l-0.05783,0.66633l0.61584,-0.2609c0.187,-0.07923 0.39814,-0.07923 0.58514,0l0.61584,0.2609l-0.05783,-0.66633c-0.01756,-0.20232 0.04769,-0.40312 0.18082,-0.55649l0.43844,-0.50508l-0.65158,-0.15091c-0.19786,-0.04582 -0.36867,-0.16992 -0.47339,-0.34393l-0.34487,-0.57306Z"></path>
        <path d="M11.9999,1.25c0.2631,0 0.507,0.13785 0.6426,0.36327l0.8237,1.36861l1.5561,0.36041c0.2563,0.05936 0.4628,0.24868 0.5441,0.4989c0.0813,0.25021 0.0255,0.52473 -0.1469,0.72341l-1.0472,1.20625l0.1382,1.59135c0.0227,0.26211 -0.0935,0.51697 -0.3064,0.67161c-0.2128,0.15465 -0.4912,0.18645 -0.7334,0.08382l-1.4708,-0.6231l-1.4708,0.6231c-0.2422,0.10263 -0.5205,0.07083 -0.73338,-0.08382c-0.21285,-0.15464 -0.3291,-0.4095 -0.30636,-0.67161l0.13811,-1.59135l-1.0471,-1.20625c-0.17247,-0.19868 -0.22822,-0.4732 -0.14692,-0.72341c0.0813,-0.25022 0.28776,-0.43954 0.54407,-0.4989l1.55618,-0.36041l0.8236,-1.36861c0.1357,-0.22542 0.3795,-0.36327 0.6426,-0.36327Zm0,2.20452l-0.3449,0.57306c-0.1047,0.17401 -0.2755,0.29811 -0.4733,0.34393l-0.6516,0.15091l0.4384,0.50508c0.1331,0.15337 0.1984,0.35417 0.1808,0.55649l-0.0578,0.66633l0.6158,-0.2609c0.187,-0.07923 0.3982,-0.07923 0.5852,0l0.6158,0.2609l-0.0578,-0.66633c-0.0176,-0.20232 0.0477,-0.40312 0.1808,-0.55649l0.4385,-0.50508l-0.6516,-0.15091c-0.1979,-0.04582 -0.3687,-0.16992 -0.4734,-0.34393l-0.3449,-0.57306Z"></path>
        <path d="M18.9999,3.25c0.2631,0 0.507,0.13785 0.6426,0.36327l0.8237,1.36861l1.5561,0.36041c0.2563,0.05936 0.4628,0.24868 0.5441,0.4989c0.0813,0.25021 0.0255,0.52473 -0.1469,0.72341l-1.0472,1.20625l0.1382,1.59135c0.0227,0.26211 -0.0935,0.51697 -0.3064,0.6716c-0.2128,0.1547 -0.4912,0.1865 -0.7334,0.0838l-1.4708,-0.62307l-1.4708,0.62307c-0.2422,0.1027 -0.5205,0.0709 -0.7334,-0.0838c-0.2128,-0.15463 -0.3291,-0.40949 -0.3063,-0.6716l0.1381,-1.59135l-1.0471,-1.20625c-0.1725,-0.19868 -0.2283,-0.4732 -0.147,-0.72341c0.0813,-0.25022 0.2878,-0.43954 0.5441,-0.4989l1.5562,-0.36041l0.8236,-1.36861c0.1357,-0.22542 0.3795,-0.36327 0.6426,-0.36327Zm0,2.20452l-0.3449,0.57306c-0.1047,0.17401 -0.2755,0.29811 -0.4733,0.34393l-0.6516,0.15091l0.4384,0.50508c0.1331,0.15337 0.1984,0.35417 0.1808,0.55649l-0.0578,0.66633l0.6158,-0.2609c0.187,-0.07923 0.3982,-0.07923 0.5852,0l0.6158,0.2609l-0.0578,-0.66633c-0.0176,-0.20232 0.0477,-0.40312 0.1808,-0.55649l0.4385,-0.50508l-0.6516,-0.15091c-0.1979,-0.04582 -0.3687,-0.16992 -0.4734,-0.34393l-0.3449,-0.57306Z"></path>
      </g>
    </svg>
  );
}
