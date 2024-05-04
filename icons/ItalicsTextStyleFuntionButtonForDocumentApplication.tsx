export function ItalicsTextStyleFuntionButtonForDocumentApplication({
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
      <path d="m11.25 22h-3.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3.5c.414 0 .75.336.75.75s-.336.75-.75.75z" />
      <path d="m16.25 3.5h-3.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3.5c.414 0 .75.336.75.75s-.336.75-.75.75z" />
      <path d="m9.5 22c-.065 0-.131-.008-.196-.026-.4-.107-.636-.52-.528-.919l5-18.5c.108-.401.52-.643.92-.528.4.107.636.52.528.919l-5 18.5c-.09.334-.393.554-.724.554z" />
    </svg>
  );
}
