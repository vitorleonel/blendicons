export function SquareSelectionCursorDrawingInDesignApplication({
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
      <path d="m.75 4.5c-.414 0-.75-.336-.75-.75v-1c0-1.517 1.233-2.75 2.75-2.75h1c.414 0 .75.336.75.75s-.336.75-.75.75h-1c-.689 0-1.25.561-1.25 1.25v1c0 .414-.336.75-.75.75z" />
      <path d="m19.25 4.5c-.414 0-.75-.336-.75-.75v-1c0-.689-.561-1.25-1.25-1.25h-1c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1c1.517 0 2.75 1.233 2.75 2.75v1c0 .414-.336.75-.75.75z" />
      <path d="m12.25 1.5h-4.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.5c.414 0 .75.336.75.75s-.336.75-.75.75z" />
      <path d="m9.25 20h-1.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.5c.414 0 .75.336.75.75s-.336.75-.75.75z" />
      <path d="m3.75 20h-1c-1.517 0-2.75-1.233-2.75-2.75v-1c0-.414.336-.75.75-.75s.75.336.75.75v1c0 .689.561 1.25 1.25 1.25h1c.414 0 .75.336.75.75s-.336.75-.75.75z" />
      <path d="m.75 13c-.414 0-.75-.336-.75-.75v-4.5c0-.414.336-.75.75-.75s.75.336.75.75v4.5c0 .414-.336.75-.75.75z" />
      <path d="m19.25 10c-.414 0-.75-.336-.75-.75v-1.5c0-.414.336-.75.75-.75s.75.336.75.75v1.5c0 .414-.336.75-.75.75z" />
      <path d="m19.343 24c-.095 0-.189-.018-.279-.054-.185-.074-.333-.218-.411-.401l-1.766-4.126-2.008 1.749c-.122.127-.355.224-.597.224-.503 0-.913-.41-.913-.913v-12.066c0-.503.41-.913.913-.913.212 0 .416.073.588.212l8.864 8.858c.193.231.266.435.266.647 0 .503-.41.913-.913.913h-2.633l1.679 3.925c.163.38-.014.821-.394.984l-2.1.9c-.095.041-.195.061-.296.061zm-2.171-6.574c.056 0 .112.006.167.019.233.053.428.215.522.436l1.876 4.384.722-.309-1.831-4.281c-.099-.231-.075-.498.063-.708s.374-.337.626-.337h2.362l-6.81-6.805v9.363l1.81-1.578c.138-.119.314-.184.493-.184zm-3.247 2.586c-.026.02-.051.041-.074.064zm8.695-2.441h.01z" />
    </svg>
  );
}
