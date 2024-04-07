import { ReactNode } from "react";

type SectionHeaderProps = {
  children: ReactNode;
};
const SectionHeader = ({ children }: SectionHeaderProps) => {
  return (
    <h3 className="font-headFamily text-3xl uppercase tracking-widest text-primary-700 my-4 underline underline-offset-[8px] decoration-wavy decoration-primary-900 mb-8">
      {children}
    </h3>
  );
};

export default SectionHeader;
