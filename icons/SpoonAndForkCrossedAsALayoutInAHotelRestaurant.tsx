export function SpoonAndForkCrossedAsALayoutInAHotelRestaurant({
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
          d="M0.582576,4.72065c0.292893,-0.2929 0.767764,-0.2929 1.06066,0l4.2269,4.2269c0.66339,0.66339 1.64856,0.80889 2.4531,0.43649l-5.6717,-5.6717c-0.29289,-0.29289 -0.29289,-0.76777 0,-1.06066c0.29289,-0.29289 0.76777,-0.29289 1.06066,0l5.6717,5.6717c0.3724,-0.80454 0.2269,-1.78971 -0.43649,-2.4531l-4.2269,-4.22691c-0.2929,-0.29289 -0.2929,-0.767762 0,-1.06066c0.29289,-0.292894 0.76776,-0.292893 1.06066,1.11022e-16l4.22693,4.2269c1.2538,1.25381 1.4125,3.18803 0.4762,4.61412l11.4348,11.4349c0.2929,0.2929 0.2929,0.7677 0,1.0606c-0.2929,0.2929 -0.7678,0.2929 -1.0607,0l-11.4348,-11.4348c-1.42609,0.9364 -3.3603,0.7776 -4.61412,-0.4762l-4.2269,-4.22689c-0.292893,-0.2929 -0.292893,-0.76777 -4.44089e-16,-1.06066Z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M20.5913,3.44508c-0.7654,-0.76547 -1.9686,-0.87455 -2.8592,-0.25924l-2.035,1.40588c-1.3603,0.93981 -1.5339,2.89561 -0.3592,4.07031l0.0379,0.03796c1.1628,1.16272 3.0931,0.99527 4.0382,-0.3503l1.4266,-2.03106c0.626,-0.89123 0.5208,-2.10344 -0.2493,-2.87355Zm-3.7118,-1.49336c1.4866,-1.02706 3.4948,-0.84498 4.7725,0.4327c1.2854,1.28543 1.461,3.30879 0.4161,4.79638l-1.4266,2.03105c-1.344,1.91335 -3.9594,2.30615 -5.7931,1.00035l-11.4216,11.4215c-0.29289,0.2929 -0.76776,0.2929 -1.06066,0c-0.29289,-0.2929 -0.29289,-0.7677 0,-1.0606l11.4281,-11.4281c-1.2782,-1.8439 -0.8753,-4.45711 1.0502,-5.78737l2.035,-1.40587Z"
        ></path>
      </g>
    </svg>
  );
}
