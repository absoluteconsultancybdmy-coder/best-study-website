import type { ComponentPropsWithoutRef } from "react";

type ContainerProps = ComponentPropsWithoutRef<"div">;

export function Container({ className = "", ...props }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[1120px] px-4 sm:px-6 lg:px-8 ${className}`.trim()}
      {...props}
    />
  );
}
