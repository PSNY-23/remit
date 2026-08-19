import { Layout, Navbar, Footer } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: 'Remit',
  description: 'Remit documentation',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head />

      <body suppressHydrationWarning>
        <Layout
          navbar={<Navbar logo={<b>Remit</b>} />}
          pageMap={await getPageMap()}
          footer={<Footer>Remit</Footer>}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}