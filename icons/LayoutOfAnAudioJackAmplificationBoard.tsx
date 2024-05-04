export function LayoutOfAnAudioJackAmplificationBoard({
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
        d="M12.6924,7.43934l5.1364,-5.13642c1.0865,-1.08646 2.848,-1.08646 3.9344,-4.44089e-16c1.0865,1.08645 1.0865,2.84795 0,3.93441l-5.1364,5.13637l0.3386,0.3386c0.2929,0.2929 0.2929,0.7678 0,1.0607l-6.3737,6.3737c-1.37759,1.3776 -3.53357,1.5024 -5.05226,0.3745l-2.50911,2.5091c-0.29289,0.2929 -0.76777,0.2929 -1.06066,0c-0.29289,-0.2929 -0.29289,-0.7677 0,-1.0606l2.55862,-2.5587c-0.90362,-1.492 -0.71113,-3.4617 0.57748,-4.7503l6.37363,-6.37365c0.2929,-0.29289 0.7678,-0.29289 1.0607,0l0.1523,0.15229Zm5.4669,0.2806l-2.5406,2.54066l-1.8131,-1.81312l2.5406,-2.54063l1.8131,1.81309Zm1.0606,-1.06066l1.4827,-1.48261c0.5006,-0.50068 0.5006,-1.31242 0,-1.81309c-0.5007,-0.50067 -1.3125,-0.50067 -1.8131,0l-1.4826,1.48261l1.813,1.81309Zm-13.0535,8.06212l5.84337,-5.84336l3.3646,3.36466l-5.84334,5.8433c-0.92911,0.9291 -2.43551,0.9291 -3.36463,0c-0.92912,-0.9291 -0.92912,-2.4355 0,-3.3646Z"
        fill="#000"
        fill-rule="evenodd"
      ></path>
    </svg>
  );
}
