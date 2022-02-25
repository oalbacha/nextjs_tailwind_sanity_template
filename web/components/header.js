import Link from 'next/link'
import Nav from './nav'

export default function Header() {
  return (
    <div className='text-center'>
      <h2 className="text-2xl font-extrabold md:text-6xl tracking-normal md:tracking-normal leading-tight">
        <Link href="/">
          <a className="font-extrabold hover:underline">Atmosphere Hire</a>
        </Link>
        {'. '}
      </h2>
      <div className="text-lg md:text-xl font-bold tracking-tight md:tracking-normal leading-tight mb-10 mt-5">Event Couture</div>
      <Nav />
    </div>
  )
}
