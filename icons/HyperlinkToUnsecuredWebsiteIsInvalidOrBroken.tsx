export function HyperlinkToUnsecuredWebsiteIsInvalidOrBroken({
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
      <path d="m16.139 16.889c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.061l4.393-4.393c.967-.958 1.499-2.238 1.499-3.608 0-2.816-2.291-5.107-5.107-5.107-1.37 0-2.65.531-3.606 1.496l-4.4 4.399c-.293.293-.768.293-1.061 0s-.293-.768 0-1.061l4.396-4.396c1.238-1.25 2.898-1.938 4.67-1.938 3.643 0 6.607 2.964 6.607 6.607 0 1.773-.689 3.433-1.94 4.672l-4.39 4.39c-.147.146-.339.22-.531.22z" />
      <path d="m7.607 23c-3.643 0-6.607-2.964-6.607-6.607 0-1.773.689-3.433 1.94-4.672l2.663-2.662c.293-.293.768-.293 1.061 0s.293.768 0 1.061l-2.665 2.665c-.968.957-1.499 2.237-1.499 3.608 0 2.816 2.291 5.107 5.107 5.107 1.37 0 2.65-.531 3.606-1.496l2.667-2.667c.293-.293.768-.293 1.061 0s.293.768 0 1.061l-2.665 2.665c-1.237 1.249-2.897 1.937-4.669 1.937z" />
      <path d="m12 12.75c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.061l4-4c.293-.293.768-.293 1.061 0s.293.768 0 1.061l-4 4c-.147.147-.339.22-.531.22z" />
      <path d="m8 16.75c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.061l2.23-2.23c.293-.293.768-.293 1.061 0s.293.768 0 1.061l-2.23 2.23c-.147.147-.339.22-.531.22z" />
      <path d="m22.25 23c-.192 0-.384-.073-.53-.22l-20.5-20.5c-.293-.293-.293-.768 0-1.061s.768-.293 1.061 0l20.5 20.5c.293.293.293.768 0 1.061-.147.147-.339.22-.531.22z" />
    </svg>
  );
}
