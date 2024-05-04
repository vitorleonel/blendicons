export function DownstairsWithDownwardDirectionArrowsForNavigation({
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
        <path d="M21.3358,8.25577c0,0.41421 -0.3358,0.75 -0.75,0.75h-2.8284c-0.4142,0 -0.75,-0.33579 -0.75,-0.75c0,-0.41422 0.3358,-0.75 0.75,-0.75h1.0177l-3.5611,-3.56118c-0.2929,-0.29289 -0.2929,-0.76777 0,-1.06066c0.2929,-0.29289 0.7677,-0.29289 1.0606,0l3.5612,3.56118v-1.01777c0,-0.41421 0.3358,-0.75 0.75,-0.75c0.4142,0 0.75,0.33579 0.75,0.75v2.82843Z"></path>
        <path d="M2,6.75c-0.13807,0 -0.25,0.11193 -0.25,0.25v15c0,0.1381 0.11193,0.25 0.25,0.25h19c0.1381,0 0.25,-0.1119 0.25,-0.25v-1.4c0,-0.1381 -0.1119,-0.25 -0.25,-0.25h-1.8182c-0.9665,0 -1.75,-0.7835 -1.75,-1.75v-1.4c0,-0.1381 -0.1119,-0.25 -0.25,-0.25h-1.8182c-0.9665,0 -1.75,-0.7835 -1.75,-1.75v-1.4c0,-0.1381 -0.1119,-0.25 -0.25,-0.25h-1.8181c-0.9665,0 -1.75005,-0.7835 -1.75005,-1.75v-1.4c0,-0.1381 -0.11192,-0.25 -0.25,-0.25h-1.81818c-0.9665,0 -1.75,-0.7835 -1.75,-1.75v-1.4c0,-0.13807 -0.11193,-0.25 -0.25,-0.25h-3.72727Zm-1.75,0.25c0,-0.9665 0.7835,-1.75 1.75,-1.75h3.72727c0.9665,0 1.75,0.7835 1.75,1.75v1.4c0,0.13807 0.11193,0.25 0.25,0.25h1.81818c0.96655,0 1.75005,0.7835 1.75005,1.75v1.4c0,0.1381 0.1119,0.25 0.25,0.25h1.8181c0.9665,0 1.75,0.7835 1.75,1.75v1.4c0,0.1381 0.112,0.25 0.25,0.25h1.8182c0.9665,0 1.75,0.7835 1.75,1.75v1.4c0,0.1381 0.1119,0.25 0.25,0.25h1.8182c0.9665,0 1.75,0.7835 1.75,1.75v1.4c0,0.9665 -0.7835,1.75 -1.75,1.75h-19c-0.9665,0 -1.75,-0.7835 -1.75,-1.75v-15Z"></path>
      </g>
    </svg>
  );
}
