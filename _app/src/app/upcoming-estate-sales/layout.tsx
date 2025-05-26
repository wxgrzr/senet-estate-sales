import Container from '@/app/_components/container';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main id='content'>
      <Container>
        <div className='relative flex flex-col py-12 md:py-8'>{children}</div>
      </Container>
    </main>
  );
}
