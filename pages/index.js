import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* <Head>
        <title>MecBonjourno</title>
        <meta name="description" content="Superior The Watcher" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <div className="art">
        <div className="art-content">
          <h2 className="art-title">PAZ</h2>
          <p className="art-body">lorem ipsum dolor sit amet, consectetur adipiscing</p>
          <a href="#" className="art-button">
            Thats a bigger
          </a>
        </div>
      </div>
    </div>
  );
}
