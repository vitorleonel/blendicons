export function CanvasBoardOnEaselForDrawingWork({
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
        <path d="M12.5,0.75c0.4142,0 0.75,0.33579 0.75,0.75v2c0,0.41421 -0.3358,0.75 -0.75,0.75c-0.4142,0 -0.75,-0.33579 -0.75,-0.75v-2c0,-0.41421 0.3358,-0.75 0.75,-0.75Z"></path>
        <path d="M2.25,3.5c0,-0.41421 0.33579,-0.75 0.75,-0.75h18c0.4142,0 0.75,0.33579 0.75,0.75v11c0,0.4142 -0.3358,0.75 -0.75,0.75h-18c-0.41421,0 -0.75,-0.3358 -0.75,-0.75v-11Zm1.5,0.75v9.5h16.5v-9.5h-16.5Z"></path>
        <path d="M6.75,19c0,-0.4142 0.33579,-0.75 0.75,-0.75h9c0.4142,0 0.75,0.3358 0.75,0.75c0,0.4142 -0.3358,0.75 -0.75,0.75h-9c-0.41421,0 -0.75,-0.3358 -0.75,-0.75Z"></path>
        <path d="M15.8619,13.763c0.4071,-0.0764 0.7991,0.1918 0.8754,0.5989l1.5,8c0.0763,0.4071 -0.1918,0.7991 -0.5989,0.8754c-0.4072,0.0763 -0.7991,-0.1918 -0.8754,-0.5989l-1.5,-8c-0.0764,-0.4072 0.1918,-0.7991 0.5989,-0.8754Z"></path>
        <path d="M8.13808,13.763c-0.40712,-0.0764 -0.79903,0.1918 -0.87537,0.5989l-1.5,8c-0.07633,0.4071 0.19182,0.7991 0.59894,0.8754c0.40712,0.0763 0.79903,-0.1918 0.87537,-0.5989l1.5,-8c0.07633,-0.4072 -0.19182,-0.7991 -0.59894,-0.8754Z"></path>
        <path d="M11.6888,9.04389c-0.4386,0.51164 -1.2037,0.58356 -1.72995,0.1626l-3.4903,-2.79225c-0.32345,-0.25875 -0.79542,-0.20631 -1.05417,0.11713c-0.25876,0.32345 -0.20632,0.79542 0.11713,1.05418l3.4903,2.79225c1.15769,0.9261 2.84109,0.7679 3.80589,-0.3577l0.5696,-0.66457c0.3778,-0.44078 1.0414,-0.49182 1.4822,-0.11401c1.4118,1.21018 3.6024,0.55184 4.1133,-1.23613l0.2284,-0.79945c0.1138,-0.39828 -0.1169,-0.81339 -0.5151,-0.92719c-0.3983,-0.11379 -0.8134,0.11683 -0.9272,0.5151l-0.2284,0.79946c-0.2105,0.7367 -1.1131,1.00795 -1.6948,0.50932c-1.0698,-0.91694 -2.6804,-0.79305 -3.5973,0.27672l-0.5696,0.66454Z"></path>
      </g>
    </svg>
  );
}
