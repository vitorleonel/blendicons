export function FlipVerticalToHorizontalInRightOrientation({
  size = 24,
}: {
  size?: number;
}): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      enable-background="new 0 0 24 24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m14.25 12.75h-12.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h12.5c.414 0 .75.336.75.75s-.336.75-.75.75z" />
      <path d="m14.75 24h-13.5c-.689 0-1.25-.561-1.25-1.25 0-.33.131-.642.37-.88.014-.014.099-.087.113-.1l6.327-6.33c.583-.6 1.303-.544 1.779-.12l7.011 6.51c.247.222.4.569.4.92 0 .689-.561 1.25-1.25 1.25zm-.169-1.07c.002.002.005.005.008.008zm-12.711-.43h12.247l-6.355-5.901z" />
      <path d="m7.75 9c-.328 0-.64-.131-.879-.368-.015-.014-.088-.1-.102-.115l-6.329-6.327c-.309-.3-.44-.612-.44-.94 0-.689.561-1.25 1.25-1.25h13.5c.689 0 1.25.561 1.25 1.25 0 .355-.148.693-.408.927l-6.992 6.493c-.243.216-.54.33-.85.33zm.22-1.387h.01zm-6.109-6.113 5.906 5.896 6.35-5.896zm12.719-.43c-.002.002-.004.004-.006.005z" />
      <path d="m16.75 11c-.414 0-.75-.336-.75-.75v-6.5c0-.414.336-.75.75-.75h6.5c.414 0 .75.336.75.75s-.336.75-.75.75h-5.75v5.75c0 .414-.336.75-.75.75z" />
      <path d="m16.75 21c-.311 0-.602-.195-.709-.505-.135-.392.073-.818.464-.954 3.287-1.134 5.495-4.164 5.495-7.541s-2.208-6.407-5.495-7.541c-.392-.135-.6-.562-.464-.954.135-.392.56-.599.954-.464 3.891 1.342 6.505 4.942 6.505 8.959s-2.614 7.617-6.505 8.959c-.081.028-.164.041-.245.041z" />
    </svg>
  );
}
