export function AlarmClockWithWakeupSound({
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
        <path d="M12,2.75c-5.10863,0 -9.25,4.14137 -9.25,9.25c0,5.1086 4.14137,9.25 9.25,9.25c5.1086,0 9.25,-4.1414 9.25,-9.25c0,-5.10863 -4.1414,-9.25 -9.25,-9.25Zm-10.75,9.25c0,-5.93706 4.81294,-10.75 10.75,-10.75c5.9371,0 10.75,4.81294 10.75,10.75c0,5.9371 -4.8129,10.75 -10.75,10.75c-5.93706,0 -10.75,-4.8129 -10.75,-10.75Z"></path>
        <path d="M7.53033,20.4697c0.29289,0.2929 0.29289,0.7677 0,1.0606l-2,2c-0.29289,0.2929 -0.76777,0.2929 -1.06066,0c-0.29289,-0.2929 -0.29289,-0.7677 0,-1.0606l2,-2c0.29289,-0.2929 0.76777,-0.2929 1.06066,0Z"></path>
        <path d="M16.4697,20.4697c-0.2929,0.2929 -0.2929,0.7677 0,1.0606l2,2c0.2929,0.2929 0.7677,0.2929 1.0606,0c0.2929,-0.2929 0.2929,-0.7677 0,-1.0606l-2,-2c-0.2929,-0.2929 -0.7677,-0.2929 -1.0606,0Z"></path>
        <path d="M6.60004,0.550044c0.24853,0.331371 0.18137,0.801476 -0.15,1.05l-4,3c-0.33137,0.24853 -0.80147,0.18137 -1.05,-0.15c-0.24852,-0.33137 -0.18137,-0.80147 0.15,-1.05l4,-3c0.33137,-0.248528 0.80148,-0.181371 1.05,0.15Z"></path>
        <path d="M17.4,0.550044c-0.2486,0.331371 -0.1814,0.801476 0.15,1.05l4,3c0.3313,0.24853 0.8014,0.18137 1.05,-0.15c0.2485,-0.33137 0.1813,-0.80147 -0.15,-1.05l-4,-3c-0.3314,-0.248528 -0.8015,-0.181371 -1.05,0.15Z"></path>
        <path d="M12,6.25c0.4142,0 0.75,0.33579 0.75,0.75v4.625l3.7,2.775c0.3314,0.2485 0.3985,0.7186 0.15,1.05c-0.2485,0.3314 -0.7186,0.3985 -1.05,0.15l-4,-3c-0.1889,-0.1416 -0.3,-0.3639 -0.3,-0.6v-5c0,-0.41421 0.3358,-0.75 0.75,-0.75Z"></path>
      </g>
    </svg>
  );
}
