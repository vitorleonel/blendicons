export function CellPhoneMissCallAlertLayoutWithAnArrow({
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
      <path d="m12.5 11c-.171 0-.342-.058-.482-.176l-7.75-6.5c-.317-.265-.359-.739-.093-1.056s.739-.358 1.057-.092l7.233 6.066 6.265-6.032c.298-.287.773-.277 1.06.02.288.299.278.773-.02 1.061l-6.75 6.5c-.145.139-.332.209-.52.209z" />
      <path d="m4.75 7c-.414 0-.75-.336-.75-.75v-2.5c0-.414.336-.75.75-.75h2.5c.414 0 .75.336.75.75s-.336.75-.75.75h-1.75v1.75c0 .414-.336.75-.75.75z" />
      <path d="m3.136 23.002c-.415 0-.826-.115-1.178-.347-.222-.148-.429-.302-.621-.481-1.054-.983-1.528-2.394-1.27-3.771.441-2.342 3.051-3.866 4.976-4.81 2.129-1.042 4.535-1.593 6.957-1.593 3.26 0 6.549.996 9.024 2.731 1.122.787 2.459 1.886 2.851 3.415.369 1.439-.095 2.982-1.212 4.026-.192.18-.398.333-.606.472-.758.498-1.766.468-2.52-.07l-3.496-2.494c-.78-.558-1.091-1.541-.758-2.393.019-.049.039-.097.06-.146-2.137-.721-4.55-.721-6.687 0 .021.049.041.097.06.146.333.854.021 1.837-.758 2.393l-3.497 2.495c-.395.283-.863.427-1.325.427zm19.015-1.377h.01zm-10.151-8.125c-2.195 0-4.373.498-6.297 1.44-.941.461-3.808 1.865-4.161 3.739-.163.87.143 1.767.819 2.398.132.123.275.226.417.321.227.149.567.129.813-.045l3.497-2.495c.223-.159.316-.41.232-.626-.084-.215-.203-.426-.353-.626-.138-.184-.184-.42-.125-.642.059-.223.216-.405.427-.496 2.979-1.289 6.48-1.289 9.46 0 .211.091.369.274.428.496.059.223.013.459-.125.644-.149.197-.267.407-.353.625-.084.215.01.466.233.625l3.495 2.494c.245.175.585.195.81.047.146-.098.289-.2.421-.323.716-.67 1.016-1.65.783-2.559-.27-1.053-1.349-1.921-2.259-2.559-2.227-1.562-5.203-2.458-8.162-2.458z" />
    </svg>
  );
}
