import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <p>hallo</p>
        
        <style jsx>{`
          .container {
            margin: 50px;
          }
          p {
            color: blue;
          }
        `}</style>
      </Layout>
    </>
  );
}
