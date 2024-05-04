export function PageWithHeaderAndAnImageLayout({
  size = 24,
}: {
  size?: number;
}): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      version="1.1"
      id="regular"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 24 24"
      xmlSpace="preserve"
    >
      <g>
        <path
          d="M22.25,24H1.75C0.785,24,0,23.215,0,22.25V9.75C0,8.785,0.785,8,1.75,8h20.5C23.215,8,24,8.785,24,9.75v12.5
		C24,23.215,23.215,24,22.25,24z M1.75,9.5C1.612,9.5,1.5,9.612,1.5,9.75v12.5c0,0.138,0.112,0.25,0.25,0.25h20.5
		c0.138,0,0.25-0.112,0.25-0.25V9.75c0-0.138-0.112-0.25-0.25-0.25H1.75z"
        />
      </g>
      <g>
        <path
          d="M0.75,20.9c-0.202,0-0.403-0.081-0.551-0.241c-0.281-0.304-0.263-0.778,0.042-1.06l5.54-5.12
		c0.692-0.641,1.76-0.62,2.429,0.05l3.61,3.61c0.098,0.098,0.262,0.098,0.36,0l5.619-5.63c0.668-0.652,1.72-0.679,2.401-0.068
		l3.548,3.158c0.31,0.275,0.337,0.75,0.062,1.06c-0.274,0.309-0.749,0.337-1.059,0.062l-3.55-3.16
		c-0.098-0.088-0.249-0.079-0.348,0.017L13.241,19.2c-0.684,0.684-1.796,0.685-2.48,0l-3.61-3.61
		c-0.099-0.099-0.25-0.104-0.351-0.009l-5.54,5.12C1.115,20.835,0.932,20.9,0.75,20.9z"
        />
      </g>
      <g>
        <path
          d="M22.25,6H1.75C0.785,6,0,5.215,0,4.25v-2.5C0,0.785,0.785,0,1.75,0h20.5C23.215,0,24,0.785,24,1.75v2.5
		C24,5.215,23.215,6,22.25,6z M1.75,1.5C1.612,1.5,1.5,1.612,1.5,1.75v2.5c0,0.138,0.112,0.25,0.25,0.25h20.5
		c0.138,0,0.25-0.112,0.25-0.25v-2.5c0-0.138-0.112-0.25-0.25-0.25H1.75z"
        />
      </g>
    </svg>
  );
}
