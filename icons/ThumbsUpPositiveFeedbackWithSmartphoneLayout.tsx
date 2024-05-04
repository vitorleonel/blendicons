export function ThumbsUpPositiveFeedbackWithSmartphoneLayout({
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
      <path d="m14.173 12h-.423c-.965 0-1.75-.785-1.75-1.75v-5.305c0-.965.785-1.75 1.75-1.75h.423c.965 0 1.75.785 1.75 1.75v5.305c0 .965-.785 1.75-1.75 1.75zm-.423-7.305c-.138 0-.25.112-.25.25v5.305c0 .138.112.25.25.25h.423c.136 0 .25-.114.25-.25v-5.305c0-.138-.112-.25-.25-.25z" />
      <path d="m20.891 12h-.836c-3.641 0-5.276-1.248-5.344-1.301-.326-.256-.383-.728-.128-1.054.255-.325.727-.383 1.053-.128.006.005 1.351.982 4.419.982h.836c.528 0 .975-.378 1.062-.899l.533-3.195c.052-.312-.036-.631-.24-.872-.205-.242-.504-.381-.821-.381h-2.739c-.277 0-.531-.152-.661-.396-.131-.243-.116-.539.037-.77s.331-.536.331-1.41c0-.632-.173-.913-.294-1.021-.017.112-.031.29-.031.563 0 1.991-2.28 3.263-2.54 3.401-.367.192-.818.056-1.013-.309-.195-.364-.058-.818.307-1.015.453-.244 1.747-1.149 1.747-2.078-.004-.632-.004-2.117 1.431-2.117.911 0 1.891.807 1.891 2.576 0 .409-.049.77-.12 1.076h1.652c.759 0 1.476.332 1.966.911.49.578.7 1.34.575 2.088l-.533 3.195c-.207 1.249-1.275 2.154-2.54 2.154z" />
      <path d="m11.25 24h-7.5c-1.517 0-2.75-1.233-2.75-2.75v-15.5c0-1.517 1.233-2.75 2.75-2.75h6.18c.414 0 .75.336.75.75s-.336.75-.75.75h-6.18c-.689 0-1.25.561-1.25 1.25v15.5c0 .689.561 1.25 1.25 1.25h7.5c.689 0 1.25-.561 1.25-1.25v-7.03c0-.414.336-.75.75-.75s.75.336.75.75v7.03c0 1.517-1.233 2.75-2.75 2.75z" />
      <path d="m8.75 6.5h-2.5c-.965 0-1.75-.785-1.75-1.75 0-.136-.114-.25-.25-.25h-.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h.5c.965 0 1.75.785 1.75 1.75 0 .136.114.25.25.25h2.5c.136 0 .25-.114.25-.25 0-.11.012-.205.028-.301.053-.363.365-.649.742-.649.414 0 .75.326.75.74 0 .042-.003.104-.011.145-.009 1.03-.794 1.815-1.759 1.815z" />
    </svg>
  );
}
