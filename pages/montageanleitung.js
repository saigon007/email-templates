import Layout from "../components/Layout";
import Container from "../components/Container";
import Banner from "../components/Banner";
import BottomContainer from "../components/BottomContainer";
import Footer from "../components/Footer";

export default function Unterseite() {
  return (
    <Layout>
      <Container>
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2022/07/montageanleitung.png" />
        <p></p>
        <p>Hallo &#123;&#123;order.orderCustomer.firstName&#125;&#125;,</p>
        <p>
          vielen Dank, dass Du gemeinsam mit uns die Energiewende vorantreibst!
        </p>
        <p>
          Damit Du Deine Stecker-Solaranlage ganz schnell und einfach selbst
          aufbauen kannst, findest Du{" "}
          <a href="https://priwatt.de/wordpress/wp-content/uploads/2022/09/Montageanleitung-09-2022-2.pdf">
            hier
          </a>{" "}
          zum Download die{" "}
          <strong>passende Montageanleitung für Deine Anlage</strong>. Bitte
          verwende bei der Montage bitte ausschließlich die angehängte
          Montageanleitung. Die bei deiner Bestellung zugesendete
          Montageanleitung bezieht sich auf ein anderes System.
        </p>
        <p>Wir wünschen Dir viel Spaß mit Deiner Stecker-Solaranlage!</p>

        <BottomContainer />
        <style jsx>{`
          p {
            font-size: 16px;
            line-height: 24px;
            padding-bottom: 20px;
            margin: 0;
          }
          a {
            color: #3bdfac;
          }
          tr {
            text-align: left;
          }
          tr:nth-child(odd) {
            background: #f6f8fe;
          }
          th,
          td {
            padding: 20px;
            line-height: 24px;
            font-size: 14px;
            width: 50%;
          }
          .first-table {
            margin-bottom: 50px;
          }
          table {
            border-spacing: 0;
            margin-bottom: 30px;
            width: 100%;
          }
          strong {
            display: block;
            margin-bottom: 20px;
          }
        `}</style>
      </Container>
      <Footer />
    </Layout>
  );
}
