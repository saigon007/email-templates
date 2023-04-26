import Head from "next/head";

export default function Layout({ children, padding = true }) {
  return (
    <>
  <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main>
        {children}
        <style jsx>{`
          main {
            padding: ${padding ? "20px" : "0px"};
            background-color: #f6f8fe;
            margin: 0;
          }
        `}</style>
        <style jsx global>{`
          body {
            margin: 0;
            font-family: Inter, Arial, sans-serif;
            color: #7784a5;
          }
          * {
            box-sizing: border-box;
          }
        `}</style>
      </main>
    </>
  );
}
