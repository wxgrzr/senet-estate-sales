type Props = {
  children?: React.ReactNode;
  color?: string;
};

const ContainerColored = ({ children }: Props) => {
  return (
    <div className='bg-gradient-to-tr from-5% from-background via-65% via-blue-500/50 to-98% to-background mx-auto'>
      {/* // <div className='bg-gradient-to-tr from-background via-foreground/5 to-background mx-auto'> */}
      <div className='mx-auto px-5 max-w-7xl container'>{children}</div>
    </div>
  );
};

export default ContainerColored;
