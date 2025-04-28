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
  const buttonStyles = 'btn';
  const textStyles =
    'focus:outline-hidden text-gray-600 hover:text-gray-400 focus:text-gray-400';

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
