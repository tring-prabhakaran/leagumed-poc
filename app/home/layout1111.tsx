// API
import { getClient } from "@/lib/apolloClient";
import { NAV_MENU } from "@/queries/HeaderQuery";
// Component
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

async function getHeaderMenu(query: any) {
  const client = getClient();
  const headerReponse = await client.query({ query });
  return headerReponse?.data?.getNavigationMenu?.pageBuilder;
};


export default async function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode,
}) {
  const navMenu = await getHeaderMenu(NAV_MENU);
  console.log('home page', navMenu)
  return (
      <>
        <Header headerPosition='absolute' navMenu={navMenu}/>
        {children}
        <Footer />
      </>
  );
}