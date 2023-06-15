import Nav from "@/components/Nav";
import "../styles/globals.css";
// meta data for this page layout
export const metadata = {
  titie: "promtopia",
  description: "discover share api",
};
interface prop {
  children: React.ReactNode;
}
/**
 *# why we import nav and proidrer ?
 * cuz layout meen in this page we need this UI in different page
 */
const RootLayout: React.FC<prop> = ({ children }) => {
  return (
    <html lang="end">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
