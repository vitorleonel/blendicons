export function HideFeatureWithEyeCrossedShapeButton({
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
      <path d="m12 21c-5.191 0-9.805-3.039-11.753-7.743-.323-.801-.323-1.713-.003-2.508.634-1.548 1.615-2.982 2.838-4.151.299-.286.775-.275 1.06.024.286.299.276.774-.024 1.06-1.072 1.025-1.931 2.281-2.484 3.632-.175.435-.175.938.002 1.376 1.712 4.134 5.781 6.81 10.364 6.81 1.289 0 2.558-.218 3.77-.647.393-.137.819.066.958.457.138.391-.066.819-.457.958-1.374.485-2.811.732-4.271.732z" />
      <path d="m11.691 15.98c-.023 0-.046-.001-.069-.003-1.912-.174-3.425-1.688-3.599-3.599-.038-.413.267-.777.679-.815.406-.041.777.266.815.679.106 1.171 1.07 2.134 2.241 2.241.413.038.717.402.679.815-.036.39-.363.682-.746.682z" />
      <path d="m22.25 23c-.192 0-.384-.073-.53-.22l-20.5-20.5c-.293-.293-.293-.768 0-1.061s.768-.293 1.061 0l20.5 20.5c.293.293.293.768 0 1.061-.147.147-.339.22-.531.22z" />
      <path d="m18.411 19.16c-.251 0-.497-.126-.639-.356-.217-.353-.107-.814.245-1.032 1.963-1.21 3.468-2.97 4.351-5.09.173-.43.173-.933-.003-1.372-1.713-4.134-5.782-6.81-10.365-6.81-2.153 0-4.23.596-6.008 1.723-.351.221-.813.119-1.035-.231s-.118-.813.231-1.035c2.019-1.28 4.374-1.957 6.812-1.957 5.191 0 9.805 3.039 11.753 7.743.323.801.323 1.713.003 2.508-1.009 2.42-2.72 4.422-4.952 5.798-.123.075-.259.111-.393.111z" />
      <path d="m14.3 15.05c-.19 0-.38-.072-.526-.215-.295-.291-.299-.765-.009-1.061.474-.482.735-1.112.735-1.774 0-1.378-1.122-2.5-2.5-2.5-.662 0-1.292.261-1.774.735-.294.291-.769.288-1.061-.009-.291-.295-.287-.77.009-1.061.764-.751 1.768-1.165 2.826-1.165 2.206 0 4 1.794 4 4 0 1.058-.414 2.062-1.166 2.826-.146.149-.34.224-.534.224z" />
    </svg>
  );
}
