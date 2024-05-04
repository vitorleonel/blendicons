export function ReturningOfAnUndeliveredItemToOwnersShippingAddress({
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
      <path d="m23.25 24c-.414 0-.75-.336-.75-.75v-1.909c0-2.744-2.187-4.978-4.875-4.978h-1.875c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.875c3.516 0 6.375 2.906 6.375 6.478v1.909c0 .414-.336.75-.75.75z" />
      <path d="m19.031 19.228c-.175 0-.351-.061-.493-.185l-3.281-2.864c-.163-.143-.257-.349-.257-.566s.094-.423.257-.565l3.281-2.863c.313-.272.786-.241 1.059.072.272.312.24.786-.072 1.059l-2.634 2.298 2.634 2.299c.312.272.345.747.072 1.059-.149.169-.357.256-.566.256z" />
      <path d="m19.25 11c-.414 0-.75-.336-.75-.75v-3.801l-8.166 3.975c-.375.182-.822.026-1.003-.346s-.026-.821.347-1.002l9.244-4.5c.231-.113.507-.099.726.039.219.136.352.377.352.635v5c0 .414-.336.75-.75.75z" />
      <path d="m10.006 20c-.117 0-.234-.027-.343-.083l-9.256-4.75c-.25-.128-.407-.386-.407-.667v-9.25c0-.258.133-.499.353-.636.219-.138.495-.151.726-.039l9.244 4.5c.258.125.422.387.422.673l.012 9.5c0 .262-.136.504-.358.641-.122.074-.257.111-.393.111zm-8.506-5.958 7.754 3.979-.009-7.802-7.745-3.77z" />
      <path d="m19.249 6c-.109 0-.222-.024-.327-.076l-8.928-4.34-8.916 4.34c-.373.182-.822.026-1.003-.346s-.026-.821.347-1.002l9.244-4.5c.207-.101.449-.101.656 0l9.256 4.5c.372.181.527.63.347 1.002-.13.267-.398.422-.676.422z" />
      <path d="m5.25 11.99c-.414 0-.75-.336-.75-.75v-3.8c0-.283.159-.542.412-.67l9.09-4.581c.372-.186.822-.037 1.008.333.187.37.037.821-.332 1.007l-8.678 4.373v3.338c0 .414-.336.75-.75.75z" />
      <path d="m10.007 20c-.271 0-.532-.146-.666-.403-.191-.368-.049-.82.318-1.012l3.285-1.71c.371-.192.82-.048 1.012.318.191.368.049.82-.318 1.012l-3.285 1.71c-.112.058-.23.085-.346.085z" />
    </svg>
  );
}
