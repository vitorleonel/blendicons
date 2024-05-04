export function CellPhoneSwitchOnAndOffFunctionButton({
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
      <path d="m18 12.945c-3.309 0-6-2.655-6-5.919 0-2.01 1.021-3.865 2.73-4.962.351-.226.813-.122 1.036.226.224.349.123.812-.226 1.036-1.278.82-2.041 2.203-2.041 3.7 0 2.437 2.019 4.419 4.5 4.419s4.5-1.982 4.5-4.419c0-1.497-.763-2.88-2.041-3.7-.348-.223-.448-.687-.225-1.036.223-.348.686-.451 1.036-.226 1.71 1.097 2.731 2.953 2.731 4.962 0 3.264-2.691 5.919-6 5.919z" />
      <path d="m18 6c-.414 0-.75-.336-.75-.75v-4.5c0-.414.336-.75.75-.75s.75.336.75.75v4.5c0 .414-.336.75-.75.75z" />
      <path d="m11.25 24h-7.5c-1.517 0-2.75-1.233-2.75-2.75v-15.5c0-1.517 1.233-2.75 2.75-2.75h6.69c.414 0 .75.336.75.75s-.336.75-.75.75h-6.69c-.689 0-1.25.561-1.25 1.25v15.5c0 .689.561 1.25 1.25 1.25h7.5c.689 0 1.25-.561 1.25-1.25v-7.55c0-.414.336-.75.75-.75s.75.336.75.75v7.55c0 1.517-1.233 2.75-2.75 2.75z" />
      <path d="m8.75 6.5h-2.5c-.965 0-1.75-.785-1.75-1.75 0-.136-.114-.25-.25-.25h-.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h.5c.965 0 1.75.785 1.75 1.75 0 .136.114.25.25.25h2.5c.136 0 .25-.114.25-.25 0-.729.462-1.39 1.149-1.644.477-.176 1.016.2 1.016.703 0 .337-.22.622-.524.717-.075.04-.141.123-.141.224 0 .965-.785 1.75-1.75 1.75z" />
    </svg>
  );
}
