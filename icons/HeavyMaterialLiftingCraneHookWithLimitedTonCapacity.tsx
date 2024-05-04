export function HeavyMaterialLiftingCraneHookWithLimitedTonCapacity({
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
      <path d="m14.601 12h-5.202c-.69 0-1.318-.408-1.599-1.04l-2.563-5.768c-.157-.351-.237-.728-.237-1.116v-3.326c0-.414.336-.75.75-.75h12.5c.414 0 .75.336.75.75v3.326c0 .389-.08.765-.238 1.118l-2.562 5.767c-.281.631-.909 1.039-1.599 1.039zm-8.101-10.5v2.576c0 .176.036.346.107.506l2.564 5.77c.04.09.129.148.228.148h5.201c.099 0 .188-.058.228-.148l2.563-5.769c.073-.161.109-.331.109-.507v-2.576z" />
      <path d="m12 24c-2.71 0-5-2.318-5-5.062 0-1.904 1.039-3.629 2.713-4.503.934-.486 1.537-1.541 1.537-2.685 0-.414.336-.75.75-.75s.75.336.75.75c0 1.723-.898 3.261-2.344 4.015-1.176.614-1.906 1.83-1.906 3.173 0 1.931 1.603 3.562 3.5 3.562 1.93 0 3.5-1.598 3.5-3.562 0-.414.336-.75.75-.75s.75.335.75.75c0 2.791-2.243 5.062-5 5.062z" />
      <path d="m6.33 6.56c-.197 0-.395-.078-.542-.231-.286-.3-.275-.775.024-1.061l5.29-5.06c.299-.287.772-.276 1.061.023.286.299.275.774-.023 1.061l-5.29 5.06c-.147.139-.333.208-.52.208z" />
      <path d="m7.85 9.98c-.195 0-.391-.076-.538-.228-.289-.296-.282-.772.015-1.06l8.73-8.48c.297-.288.771-.281 1.061.016.288.296.281.772-.015 1.06l-8.73 8.48c-.146.142-.335.212-.523.212z" />
      <path d="m10.79 12c-.195 0-.392-.076-.538-.228-.289-.297-.281-.772.016-1.06l7.46-7.24c.297-.288.773-.281 1.061.016.289.297.281.772-.016 1.061l-7.46 7.24c-.146.141-.334.211-.523.211z" />
    </svg>
  );
}
