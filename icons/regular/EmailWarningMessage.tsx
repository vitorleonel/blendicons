/**
 * Original name: email warning message Icon Free Download
 */
export function EmailWarningMessage({
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
      <path d="m22.289 24h-10.578c-.943 0-1.711-.765-1.711-1.705 0-.333.094-.649.271-.914l5.273-8.566c.294-.498.855-.815 1.456-.815s1.162.317 1.463.827l5.282 8.579c.162.24.255.556.255.89 0 .939-.768 1.704-1.711 1.704zm-5.289-10.5c-.087 0-.146.046-.172.089l-5.328 8.706c0 .111.097.205.211.205h10.577c.115 0 .211-.094.211-.205 0-.034-.006-.063-.017-.079l-5.304-8.615c-.032-.055-.091-.101-.178-.101z" />
      <path d="m17 19.5c-.414 0-.75-.336-.75-.75v-2c0-.414.336-.75.75-.75s.75.336.75.75v2c0 .414-.336.75-.75.75z" />
      <circle cx="17" cy="21.25" r=".75" />
      <path d="m12.25 15h-10c-1.241 0-2.25-1.009-2.25-2.25v-9.5c0-1.241 1.009-2.25 2.25-2.25h17.5c1.241 0 2.25 1.009 2.25 2.25v9c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-9c0-.414-.336-.75-.75-.75h-17.5c-.414 0-.75.336-.75.75v9.5c0 .414.336.75.75.75h10c.414 0 .75.336.75.75s-.336.75-.75.75z" />
      <path d="m11.001 9.827c-.404 0-.808-.092-1.176-.276l-9.408-4.659c-.371-.184-.523-.633-.339-1.005.184-.371.633-.522 1.005-.339l9.41 4.66c.313.157.7.157 1.011.001l9.413-4.661c.37-.184.821-.032 1.005.339.184.372.032.821-.339 1.005l-9.41 4.66c-.366.183-.769.275-1.172.275z" />
    </svg>
  );
}