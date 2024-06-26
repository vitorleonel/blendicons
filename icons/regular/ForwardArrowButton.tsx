/**
 * Original name: forward arrow button Icon Free Download
 */
export function ForwardArrowButton({
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
      <path d="m14.75 22c-.092 0-.184-.017-.272-.051-.289-.113-.478-.39-.478-.699v-5.25h-13.25c-.414 0-.75-.336-.75-.75v-6.5c0-.414.336-.75.75-.75h13.25v-5.25c0-.309.189-.586.478-.699.288-.113.615-.037.825.191l8.5 9.25c.264.287.264.728 0 1.015l-8.5 9.25c-.146.158-.347.243-.553.243zm-13.25-7.5h13.25c.414 0 .75.336.75.75v4.075l6.731-7.325-6.731-7.325v4.075c0 .414-.336.75-.75.75h-13.25z" />
    </svg>
  );
}
