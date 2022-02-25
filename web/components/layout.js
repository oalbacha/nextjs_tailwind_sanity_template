import Alert from '../components/alert'
import Header from '../components/header'
import Footer from '../components/footer'
import Meta from '../components/meta'

export default function Layout({ preview, children }) {
  return (
    <div className='font-atmo bg-ghostwhite text-gray-500'>
      <div className='h-14 bg-gradient-to-r from-cyan-500 to-blue-500'></div>
      <Meta />
      <Header />
      <div className="min-h-screen mx-auto font-atmo">
        <main>{children}</main>
      </div>
      {/* <Footer /> */}
    </div>
  )
}


// style=
//   {{
//     backgroundImage:`url("https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9jdXN8ZW58MHx8MHx8&w=1000&q=80")`,
//     backgroundRepeat: 'no-repeat',
//     height: '100%',
//     backgroundPosition: 'center',
//     backgroundSize: 'cover',
//     margin: 0
//   }}