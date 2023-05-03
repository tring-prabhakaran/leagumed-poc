import { Providers } from "./providers";
// Styles
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.scss';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
            {children}
        </Providers>
      </body>
    </html>
  )
}
