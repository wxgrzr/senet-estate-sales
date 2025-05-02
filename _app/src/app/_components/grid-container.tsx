type Props = {
  children?: React.ReactNode;
};

const GridContainer = ({ children }: Props) => {
  return (
    // <div className='mb-8 grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-6 md:gap-x-10 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-24'>
    <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>{children}</div>
  );
};
export default GridContainer;
