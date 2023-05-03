
// API
import { getClient } from "@/lib/apolloClient";
import { NAV_MENU } from "@/queries/HeaderQuery";
import Header from '../Header';
import Footer from '../Footer';


async function getHeaderMenu(query: any) {
  const client = getClient();
  const headerReponse = await client.query({ query: NAV_MENU});
  return headerReponse?.data?.getNavigationMenu?.pageBuilder;
};

export default async function PublicLayout({ children }: { children: React.ReactNode }) {
  const navMenu = await getHeaderMenu(NAV_MENU);
  return (
    <>
      <Header headerPosition={'absolute'} navMenu={navMenu}/>
      <main>{children}</main>
      <Footer />
    </>
  );
}