import React from "react";
export const metadata = {
  titie: "next",
  description: "majed",
};
interface prop {
  children: React.ReactNode;
}
const RootLayout: React.FC<prop> = ({ children }) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
