import { LinkButton } from '@/app/_components/link-button';
import { NAV_LINKS } from '@/app/constants';

export const NavLinks = () => {
  return (
    <>
      {Object.entries(NAV_LINKS).map(([id, { label, href }]) => (
        <li key={id}>
          <LinkButton variant='text' href={href}>
            {label}
          </LinkButton>
        </li>
      ))}
    </>
  );
};
