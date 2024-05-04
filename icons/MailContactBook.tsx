export function MailContactBook({ size = 24 }: { size?: number }): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      enable-background="new 0 0 24 24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m20.25 24h-17.5c-1.517 0-2.75-1.233-2.75-2.75v-18.5c0-.414.336-.75.75-.75s.75.336.75.75v18.5c0 .689.561 1.25 1.25 1.25h16.75v-17.75c0-.414.336-.75.75-.75s.75.336.75.75v18.5c0 .414-.336.75-.75.75z" />
      <path d="m20.25 5.5h-17.5c-1.517 0-2.75-1.233-2.75-2.75s1.233-2.75 2.75-2.75h15.5c.414 0 .75.336.75.75v3.25h1.25c.414 0 .75.336.75.75s-.336.75-.75.75zm-17.5-4c-.689 0-1.25.561-1.25 1.25s.561 1.25 1.25 1.25h14.75v-2.5z" />
      <path d="m10.5 17.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zm0-5.5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
      <path d="m10.5 20.5c-1.965 0-3.805-.875-5.046-2.402-1.241-1.526-1.718-3.527-1.31-5.488.513-2.458 2.508-4.453 4.965-4.965 1.962-.408 3.963.069 5.489 1.31 1.527 1.24 2.402 3.08 2.402 5.045v1.25c0 1.241-1.009 2.25-2.25 2.25s-2.25-1.009-2.25-2.25v-4c0-.414.336-.75.75-.75s.75.336.75.75v4c0 .414.336.75.75.75s.75-.336.75-.75v-1.25c0-1.512-.674-2.927-1.848-3.882s-2.718-1.321-4.236-1.005c-1.882.392-3.41 1.92-3.802 3.803-.316 1.517.05 3.062 1.005 4.236s2.369 1.848 3.881 1.848c.414 0 .75.336.75.75s-.336.75-.75.75z" />
    </svg>
  );
}
