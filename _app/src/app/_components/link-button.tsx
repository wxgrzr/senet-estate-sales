import Link from 'next/link';

const LinkButton = ({
  href,
  children,
  variant = 'button', // 'button' or 'text'
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: 'button' | 'text';
  className?: string | undefined;
}) => {
  const baseStyles = 'hover:cursor-pointer transition font-medium';
  const textStyles =
    'focus:outline-hidden text-gray-600 hover:text-gray-400 focus:text-gray-400';

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variant === 'button' ? 'btn' : textStyles} ${className ? className : ''}`}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
