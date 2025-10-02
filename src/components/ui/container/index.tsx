import { useMemo } from "react";
import { propsToDataAttrs } from "@/lib/utilities";
import "@/components/container/container.css";

interface LkContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: LkContainerWidth;
}

export default function Container(props: LkContainerProps) {
  const { maxWidth = "md", children, ...restProps } = props;
  
  const dataAttrs = useMemo(
    () => propsToDataAttrs({ maxWidth }, "container"),
    [maxWidth],
  );

  return (
    <div {...dataAttrs} {...restProps}>
      {children}
    </div>
  );
}
