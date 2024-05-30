import Navbar from './navbar/navbar'
import Footer from './footer/footer'
import { Grid } from '@mui/material'

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <Grid sx={{mb:10}}/>
      <main>{children}</main>
      <Footer />
    </>
  )
}