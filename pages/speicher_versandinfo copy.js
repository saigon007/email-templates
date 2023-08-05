import Layout from "../components/Layout";
import Container from "../components/Container";
import Banner from "../components/Banner";
import BottomContainer from "../components/BottomContainer";
import Footer from "../components/Footer";

export default function Unterseite() {
  return (
    <Layout>
      <Container>
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2023/07/Head-banner-24.png" />
        <p>Liebe Kundin, lieber Kunde,</p>
        <p>
          wir haben <strong>Neuigkeiten:</strong> Der Balkonkraftwerk-Speicher
          aus Deiner Bestellung ist bald auf dem Weg in unser Lager und wird ab
          dem 31. Juli an unseren Versanddienstleister übergeben.
        </p>
        <p>
          Das heißt:{" "}
          <strong>
            Deine Bestellung erreicht Dich voraussichtlich in der Woche nach dem
            31. Juli.
          </strong>
        </p>

        <p>
          Sobald Deine Ware an unseren Versanddienstleister übergeben wurde,
          erhältst Du per E-Mail genauere Informationen zum Liefertermin und
          einen Link zur Nachverfolgung Deiner Bestellung.
        </p>

        <p>
          Du hast zusätzlich zum Speicher ein Balkokraftwerk-Set gekauft? Dann
          bedenke bitte, dass der Versand in mehreren Paketen und über
          verschiedene Versanddienstleister erfolgen kann.
        </p>
        <p>
          In der Zwischenzeit kannst Du gerne einen Blick in unsere{" "}
          <a href="https://priwatt.de/service/erklaer-videos/">Erklär-videos</a>
          , <a href="https://priwatt.de/service/faq/">FAQ</a> oder auf unserem{" "}
          <a href="https://priwatt.de/blog/">Blog</a> werfen, um mehr über
          Deinen neuen Energielieferanten zu lernen.
        </p>

        <p>
          Vielen Dank, dass Du Dich für priwatt entschieden hast und gemeinsam
          mit uns die Energiewende vorantreibst!
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
        `}</style>
      </Container>
      <Footer />
    </Layout>
  );
}
