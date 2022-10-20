import Header from './header'
import Footer from './footer'
import BreadcrumbHeader from './header-breadcrumb'

export default function Layout({children}) {
  return (
    <>
    <Header/>
    <BreadcrumbHeader/>
    {children}
    <Footer/>
    </>
  )
}