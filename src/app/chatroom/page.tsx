import Head from 'next/head';
import Chat from '@/components/ChatRoom/ChatRoom.main';

export default function page() {
  return (
    <div>
      <Head>
        <title>1:1 Chat</title>
        <meta name="description" content="1:1 Chat Application" />
      </Head>
      <main>
        <h1>1:1 Chat</h1>
        <Chat />
      </main>
    </div>
  );
}
