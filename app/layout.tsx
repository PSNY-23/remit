import { Layout, Navbar, Footer } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getEnrichedPageMap } from '@/lib/pageMap'
import 'nextra-theme-docs/style.css'
import './globals.css'

export const metadata = {
  title: 'Remit',
  description: 'Remit documentation',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  try {
    const pageMap = await getEnrichedPageMap()
    return (
      <html lang="en" suppressHydrationWarning>
        <Head />

        <body suppressHydrationWarning>
          <Layout
            navbar={<Navbar logo={<b>Remit</b>} />}
            pageMap={pageMap}
            footer={<Footer>Remit</Footer>}
          >
            {children}
          </Layout>
        </body>
      </html>
    )
  } catch (err: any) {
    console.error('ROOT_LAYOUT_ERROR:', err)
    throw err
  }
}