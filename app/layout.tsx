import { Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import SidebarTopBrand from '@/components/SidebarTopBrand'
import SidebarToggleButton from '@/components/SidebarToggleButton'
import ThemeToggleButton from '@/components/ThemeToggleButton'
import 'nextra-theme-docs/style.css'
import './globals.css'

export const metadata = {
  title: 'Remit — Engineering Second Brain',
  description: 'Master knowledge base for Data Structures, Distributed Systems & Engineering Interviews',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  try {
    const pageMap = await getPageMap()
    return (
      <html lang="en" suppressHydrationWarning>
        <Head faviconGlyph="🧠" />

        <body suppressHydrationWarning>
          <SidebarTopBrand />
          <SidebarToggleButton />
          <Layout
            navbar={
              <Navbar logo={<div />}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ThemeToggleButton />
                </div>
              </Navbar>
            }
            pageMap={pageMap}
            footer={null}
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