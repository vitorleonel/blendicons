export function SmartphoneAndStylusWithHandwritingInputFeature({
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
      <path d="m12.527 12.326c-.197 0-.389-.078-.53-.22-.173-.173-.251-.419-.208-.661l.53-3.005c.026-.151.1-.291.208-.4l7.425-7.424c.912-.914 1.808-.667 2.298-.177l1.237 1.237c.683.682.683 1.792 0 2.475l-7.425 7.425c-.108.109-.248.182-.4.208l-3.005.53c-.043.008-.087.012-.13.012zm3.005-1.281h.01zm-1.777-2.111-.303 1.717 1.717-.303 7.258-7.258c.098-.098.098-.256 0-.354l-1.228-1.228c-.01.019-.086.067-.187.167z" />
      <path d="m11.25 24h-7.5c-1.517 0-2.75-1.233-2.75-2.75v-15.5c0-1.517 1.233-2.75 2.75-2.75h7.5c.845 0 1.661.404 2.184 1.082.253.328.192.799-.136 1.052-.329.255-.8.191-1.052-.136-.24-.312-.613-.498-.996-.498h-7.5c-.689 0-1.25.561-1.25 1.25v15.5c0 .689.561 1.25 1.25 1.25h7.5c.689 0 1.25-.561 1.25-1.25v-6.76c0-.414.336-.75.75-.75s.75.336.75.75v6.76c0 1.517-1.233 2.75-2.75 2.75z" />
      <path d="m13.25 21h-11.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h11.5c.414 0 .75.336.75.75s-.336.75-.75.75z" />
    </svg>
  );
}
