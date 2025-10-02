import { useMemo } from "react";
import { propsToDataAttrs } from "@/lib/utilities";
import Text from "@/components/text";
import "@/components/tab-link/tab-link.css";

interface LkTabLinkProps extends React.HTMLAttributes<HTMLDivElement> {
  selected?: boolean;
  fontClass?: LkFontClass;
  indicatorClass?: string;
  children?: React.ReactElement<HTMLDivElement>;
}

export default function TabLink(props: LkTabLinkProps) {


  const {
    selected = false,
    fontClass = "body",
    indicatorClass = "lk-indicator",
    children,
    ...restProps
  } = props;


  const dataAttrs = useMemo(
    () => propsToDataAttrs({ selected, fontClass, indicatorClass }, "tab-link"),
    [selected],
  );



  return (
    <div data-lk-component="tab-link" {...dataAttrs} {...restProps}>
      <div data-lk-slot="child">
        <Text fontClass={fontClass} style={selected ? { fontWeight: 700 } : {}}>
          {children}
        </Text>
      </div>
      <div className={indicatorClass}></div>
    </div>
  );
}
