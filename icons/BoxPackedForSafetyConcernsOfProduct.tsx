export function BoxPackedForSafetyConcernsOfProduct({
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
        <path d="M1.25,2c0,-0.41421 0.33579,-0.75 0.75,-0.75h20c0.4142,0 0.75,0.33579 0.75,0.75v20c0,0.4142 -0.3358,0.75 -0.75,0.75h-20c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-20Zm1.5,0.75v18.5h18.5v-18.5h-18.5Z"></path>
        <path d="M8.25,2c0,-0.41421 0.33579,-0.75 0.75,-0.75h6c0.4142,0 0.75,0.33579 0.75,0.75v6.5c0,0.25993 -0.1346,0.50133 -0.3557,0.63799c-0.2211,0.13665 -0.4972,0.14908 -0.7297,0.03283l-2.6646,-1.33229l-2.66459,1.33229c-0.23249,0.11625 -0.5086,0.10382 -0.72971,-0.03283c-0.22111,-0.13666 -0.3557,-0.37806 -0.3557,-0.63799v-6.5Zm1.5,0.75v4.53647l1.9146,-0.95729c0.2111,-0.10557 0.4597,-0.10557 0.6708,0l1.9146,0.95729v-4.53647h-4.5Z"></path>
        <path d="M17,12.25c0.4142,0 0.75,0.3358 0.75,0.75v4c0,0.4142 -0.3358,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.3358 -0.75,-0.75v-4c0,-0.4142 0.3358,-0.75 0.75,-0.75Z"></path>
        <path d="M16.4697,12.4697c0.2929,-0.2929 0.7677,-0.2929 1.0606,0l2,2c0.2929,0.2929 0.2929,0.7677 0,1.0606c-0.2929,0.2929 -0.7677,0.2929 -1.0606,0l-1.4697,-1.4696l-1.4697,1.4696c-0.2929,0.2929 -0.7677,0.2929 -1.0606,0c-0.2929,-0.2929 -0.2929,-0.7677 0,-1.0606l2,-2Z"></path>
        <path d="M14.25,19.5c0,-0.4142 0.3358,-0.75 0.75,-0.75h4c0.4142,0 0.75,0.3358 0.75,0.75c0,0.4142 -0.3358,0.75 -0.75,0.75h-4c-0.4142,0 -0.75,-0.3358 -0.75,-0.75Z"></path>
      </g>
    </svg>
  );
}
