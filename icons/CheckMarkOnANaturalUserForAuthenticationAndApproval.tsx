export function CheckMarkOnANaturalUserForAuthenticationAndApproval({
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
        <path d="M11.5,2c-0.7165,0 -1.3966,0.25406 -1.98526,0.71591c-0.24825,0.19477 -0.52316,0.23278 -0.6953,0.23794c-0.00535,0.00526 -0.01206,0.01241 -0.0201,0.02198c-0.05378,0.06403 -0.12362,0.19346 -0.16084,0.38938c-0.03941,0.2074 -0.10749,0.44518 -0.23701,0.6769c-0.43561,0.77934 -0.69694,1.73488 -0.69694,2.77607c0,0.05442 0.00071,0.10965 0.00214,0.16566c0.01159,0.45436 -0.15099,0.84764 -0.29192,1.12566c-0.12139,0.23946 -0.1723,0.55884 -0.1042,0.87979c0.08442,0.39789 0.35931,0.86072 0.64453,1.09691c0.21319,0.1765 0.53556,0.4587 0.72111,0.8715c0.17359,0.3861 0.36525,0.7516 0.57108,1.0852c0.16944,0.2747 0.27543,0.602 0.27543,0.9522v1.4082c0,0.8228 -0.57312,1.5344 -1.37696,1.7098l-4.12539,0.9001c-1.0335,0.2255 -1.77037,1.1405 -1.77037,2.1983v2.0385c0,0.1381 0.11193,0.25 0.25,0.25h7c0.41421,0 0.75,0.3358 0.75,0.75c0,0.4142 -0.33579,0.75 -0.75,0.75h-7c-0.9665,0 -1.75,-0.7835 -1.75,-1.75v-2.0385c0,-1.763 1.22811,-3.288 2.95062,-3.6638l4.12539,-0.9001c0.11483,-0.0251 0.19671,-0.1267 0.19671,-0.2443v-1.4082c0,-0.0452 -0.01392,-0.1028 -0.05208,-0.1647c-0.24367,-0.395 -0.46524,-0.8188 -0.66254,-1.2577c-0.03273,-0.0728 -0.11272,-0.1681 -0.3096,-0.3312c-0.56453,-0.4674 -1.00586,-1.2367 -1.15526,-1.94087c-0.13853,-0.65289 -0.04399,-1.32174 0.23362,-1.86936c0.10195,-0.20113 0.13243,-0.32651 0.13032,-0.40917c-0.00175,-0.06841 -0.00263,-0.1364 -0.00263,-0.20392c0,-1.29017 0.32348,-2.49868 0.88759,-3.50793c0.02649,-0.04739 0.05244,-0.11831 0.07272,-0.22505c0.07495,-0.39446 0.23497,-0.77536 0.48584,-1.07406c0.23764,-0.28296 0.59296,-0.52768 1.04124,-0.55421c0.8043,-0.599576 1.76656,-0.95693 2.80806,-0.95693c0.1608,0 0.3201,0.008539 0.4777,0.025293c0.0432,0.004596 0.0865,0.004609 0.1292,0.000105c0.1593,-0.016805 0.3208,-0.025398 0.484,-0.025398h0.7273c1.4183,0 2.5682,1.14981 2.5682,2.56818v0.12632c0,0.04055 0.0118,0.09766 0.0494,0.1662c0.5468,0.99891 0.8597,2.18866 0.8597,3.45748c0,0.06752 -0.0009,0.13551 -0.0027,0.20393c-0.0021,0.08265 0.0284,0.20803 0.1303,0.40916c0.2776,0.54762 0.3722,1.21647 0.2337,1.86936c-0.086,0.40519 -0.4842,0.66397 -0.8894,0.578c-0.4052,-0.08598 -0.6639,-0.48414 -0.578,-0.88934c0.0681,-0.32095 0.0172,-0.64033 -0.1042,-0.87979c-0.1409,-0.27802 -0.3035,-0.6713 -0.2919,-1.12566c0.0014,-0.05601 0.0022,-0.11124 0.0022,-0.16566c0,-1.02387 -0.2528,-1.965 -0.6755,-2.7372c-0.1397,-0.25522 -0.2336,-0.55793 -0.2336,-0.88648v-0.12632c0,-0.58994 -0.4783,-1.06818 -1.0682,-1.06818h-0.7273c-0.1106,0 -0.2195,0.00582 -0.3266,0.01712c-0.1483,0.01564 -0.2976,0.01547 -0.4453,-0.00024c-0.105,-0.01117 -0.2114,-0.01688 -0.319,-0.01688Zm-2.66524,0.94102c0,8e-05 -0.00088,0.00073 -0.00268,0.00171c0.00177,-0.00131 0.00267,-0.00179 0.00268,-0.00171Z"></path>
        <path d="M17.5,13.5c-2.3472,0 -4.25,1.9028 -4.25,4.25c0,2.3472 1.9028,4.25 4.25,4.25c2.3472,0 4.25,-1.9028 4.25,-4.25c0,-2.3472 -1.9028,-4.25 -4.25,-4.25Zm-5.75,4.25c0,-3.1756 2.5744,-5.75 5.75,-5.75c3.1756,0 5.75,2.5744 5.75,5.75c0,3.1756 -2.5744,5.75 -5.75,5.75c-3.1756,0 -5.75,-2.5744 -5.75,-5.75Z"></path>
        <path d="M19.5479,16.248c0.3246,0.2573 0.3791,0.7291 0.1217,1.0536l-1.9142,2.4144c-0.1329,0.1676 -0.331,0.2705 -0.5446,0.2828c-0.2135,0.0123 -0.4222,-0.0672 -0.5734,-0.2185l-1.5,-1.5c-0.2929,-0.2929 -0.2929,-0.7677 0,-1.0606c0.2929,-0.2929 0.7678,-0.2929 1.0607,0l0.9048,0.9048l1.3913,-1.7548c0.2574,-0.3245 0.7291,-0.379 1.0537,-0.1217Z"></path>
      </g>
    </svg>
  );
}
