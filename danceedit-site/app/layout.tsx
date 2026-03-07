export const metadata = {
  title: "DanceEdit Studio",
  description: "Dance music editing by Eddy Beneteau",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, fontFamily: 'Inter, Arial, sans-serif', background: '#05050B' }}>{children}</body>
    </html>
  );
}
