import Layout from "../components/Layout";
import Container from "../components/Container";
import Banner from "../components/Banner";
import BottomContainer from "../components/BottomContainer";
import Footer from "../components/Footer";

export default function Unterseite() {
  return (
    <Layout>
      <Container>
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2023/08/auftragsbestaetigung.png" />
        <p></p>
        <p>Hallo &#123;NAME&#125;,</p>
        <p>
          gerne bestätigen wir Dir, dass Deine Bestellung &#123;INTERNET&#125;
          vom &#123;DATUM&#125; für Dein Balkonkraftwerk von priwatt bei uns
          eingegangen ist. Damit ist der erste Schritt in Deine private
          Energiewende geschafft!
        </p>

        <p>
          <strong>8 bis 10 Werktage</strong> nach Zahlungseingang senden wir
          Dein Balkonkraftwerk zu Dir nach Hause. Bitte beachte: Aufgrund der
          derzeit hohen Nachfrage kann es vereinzelt zu verlängerten
          Lieferzeiten kommen.
        </p>

        <p>
          Vielen Dank für Deinen Beitrag und viel Spaß beim Produzieren Deines
          eigenen Solarstroms!
        </p>
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
