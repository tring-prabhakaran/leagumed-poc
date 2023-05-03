import Header from '@/components/Header/Header';
// API
import { getClient } from "@/lib/apolloClient";
import { NAV_MENU } from "../../queries/HeaderQuery";
// Styles
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.scss';

async function getHeaderMenu(query: any) {
  const client = getClient();
  const headerReponse = await client.query({ query: NAV_MENU});
  return headerReponse?.data?.getNavigationMenu?.pageBuilder;
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const navMenu = await getHeaderMenu(NAV_MENU);
  return (
    <html lang="en">
      <body>
        <Header headerPosition={'relative'} navMenu={navMenu}/>
        <main>{children}</main>
      </body>
    </html>
  )
}
