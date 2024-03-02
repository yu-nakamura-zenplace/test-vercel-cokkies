export default function Layout({children}: {children: React.ReactNode;}) {
  return (
    <section style={{ padding: 16 }}>
      {children}
    </section>
  );
}