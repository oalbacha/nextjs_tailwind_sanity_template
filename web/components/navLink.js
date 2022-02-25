import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';

export { NavLink };

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  exact: PropTypes.bool
};

NavLink.defaultProps = {
  exact: false
};

function NavLink({ href, exact, children, ...props }) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    props.className=`
      active
      block
      rounded
      underline
      font-bold
      md:bg-ghostwhite
      md:mr-6`
    return (
      <span {...props}>{children}</span>
    )
  }

  return (
    <Link
      className='
        block
        sm:font-bold
        rounded
        hover:underline'
      href={href}
    >
      <a className='
        text-md
        font-bold
        md:bg-ghostwhite
        md:mr-6
        hover:underline' {...props}
      >
        {children}
      </a>
    </Link>
  );
}
