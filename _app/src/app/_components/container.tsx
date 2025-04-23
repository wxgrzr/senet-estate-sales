type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className='mx-auto px-5 max-w-7xl container'>{children}</div>;
};

export default Container;
