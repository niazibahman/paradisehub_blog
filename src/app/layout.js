import Layout from '@/component/layout/layout'
import StyledJsxRegistry from './register'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <StyledJsxRegistry>
          <Layout>{children}</Layout>
        </StyledJsxRegistry>
      </body>
    </html>
  )
}