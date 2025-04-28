import classNames from 'classnames';
import { ReactNode, HTMLAttributes } from 'react';
const cn = classNames;

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

const Section = ({ children, ...props }: SectionProps) => {
  return (
    <section {...props} className={props.className ? props.className : 'py-14'}>
      {children}
    </section>
  );
};
export default Section;
