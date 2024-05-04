export function PhoneCallingFeatureForSpecificLocationLayout({
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
      <path d="m12 24c-.148 0-.297-.044-.425-.132-.39-.269-9.575-6.665-9.575-13.825 0-4.937 3.74-10.043 10-10.043s10 5.106 10 10.043c0 7.16-9.185 13.556-9.575 13.825-.128.088-.277.132-.425.132zm0-22.5c-5.521 0-8.5 4.402-8.5 8.543 0 5.557 6.725 10.952 8.5 12.279 1.775-1.327 8.5-6.722 8.5-12.279 0-4.141-2.979-8.543-8.5-8.543z" />
      <path d="m16.523 16c-.035 0-.071-.001-.106-.004-1.723-.137-3.34-.642-4.813-1.5-.194-.113-.328-.309-.363-.531s.032-.449.183-.617l2.169-2.419c.308-.422.909-.63 1.478-.485l1.828.447c.652.168 1.101.746 1.101 1.407v2.25c0 .405-.163.78-.458 1.055-.274.255-.64.397-1.019.397zm-3.346-2.373c1.051.486 2.175.779 3.353.874l-.028-2.164-1.798-.439zm3.323-1.329v.001z" />
      <path d="m11.98 14.598c-.126 0-.254-.032-.371-.099-1.71-.977-3.144-2.409-4.146-4.143-.001-.002-.003-.004-.004-.006-.826-1.448-1.33-3.092-1.455-4.754-.03-.411.111-.817.389-1.115.276-.297.652-.461 1.059-.461l2.183-.02c.674 0 1.257.449 1.423 1.092l.461 1.824c.144.553-.063 1.147-.528 1.507l-1.909 1.698c.844 1.273 1.965 2.33 3.272 3.076.359.206.484.664.279 1.023-.139.242-.392.378-.653.378zm-2.376-9.135-2.145.057c.118 1.121.406 2.218.878 3.255l1.696-1.506z" />
    </svg>
  );
}
