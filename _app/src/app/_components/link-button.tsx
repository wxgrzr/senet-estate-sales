import Link from 'next/link';

const LinkButton = ({
  href,
  children,
  variant = 'button', // 'button' or 'text'
}: {
  href: string;
  children: React.ReactNode;
  variant?: 'button' | 'text';
}) => {
  const baseStyles = 'transition font-medium';
  const buttonStyles =
    'bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg text-white';
  const textStyles = 'hover:underline text-blue-600';

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variant === 'button' ? buttonStyles : textStyles}`}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
