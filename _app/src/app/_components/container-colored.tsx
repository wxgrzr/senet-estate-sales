type Props = {
  children?: React.ReactNode;
  color?: string;
};

const ContainerColored = ({ children }: Props) => {
  return (
    <div className='bg-white dark:bg-blue-800'>
      <div className='mx-auto px-5 max-w-7xl container'>{children}</div>
    </div>
  );
};

export default ContainerColored;
