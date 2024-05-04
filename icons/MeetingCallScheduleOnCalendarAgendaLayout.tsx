export function MeetingCallScheduleOnCalendarAgendaLayout({
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
      <path d="m21.25 24h-18.5c-1.517 0-2.75-1.233-2.75-2.75v-16.5c0-1.517 1.233-2.75 2.75-2.75h18.5c1.517 0 2.75 1.233 2.75 2.75v16.5c0 1.517-1.233 2.75-2.75 2.75zm-18.5-20.5c-.689 0-1.25.561-1.25 1.25v16.5c0 .689.561 1.25 1.25 1.25h18.5c.689 0 1.25-.561 1.25-1.25v-16.5c0-.689-.561-1.25-1.25-1.25z" />
      <path d="m23.25 9h-22.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h22.5c.414 0 .75.336.75.75s-.336.75-.75.75z" />
      <path d="m5.75 5c-.414 0-.75-.336-.75-.75v-3.5c0-.414.336-.75.75-.75s.75.336.75.75v3.5c0 .414-.336.75-.75.75z" />
      <path d="m18.25 5c-.414 0-.75-.336-.75-.75v-3.5c0-.414.336-.75.75-.75s.75.336.75.75v3.5c0 .414-.336.75-.75.75z" />
      <path d="m16.523 22c-.035 0-.071-.001-.106-.004-1.723-.137-3.34-.642-4.813-1.5-.194-.113-.328-.309-.363-.531s.032-.449.183-.617l2.169-2.419c.309-.422.91-.632 1.478-.485l1.828.447c.652.168 1.101.746 1.101 1.407v2.25c0 .405-.163.78-.458 1.055-.274.255-.64.397-1.019.397zm-3.346-2.373c1.051.486 2.175.779 3.353.874l-.028-2.164-1.798-.439zm3.323-1.329v.001z" />
      <path d="m11.98 20.598c-.126 0-.254-.032-.371-.099-1.71-.977-3.144-2.409-4.146-4.143-.001-.002-.003-.004-.004-.006-.827-1.449-1.331-3.093-1.456-4.755-.03-.411.111-.817.389-1.115.276-.297.652-.461 1.06-.461l2.183-.019c.674 0 1.257.449 1.423 1.092l.461 1.824c.144.553-.063 1.147-.528 1.507l-1.909 1.698c.844 1.273 1.965 2.33 3.272 3.076.359.206.484.664.279 1.023-.139.242-.392.378-.653.378zm-2.376-9.135-2.145.057c.118 1.121.406 2.218.878 3.255l1.696-1.506z" />
    </svg>
  );
}
