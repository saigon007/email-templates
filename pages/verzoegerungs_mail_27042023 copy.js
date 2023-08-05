import Layout from "../components/Layout";
import Container from "../components/Container";
import Banner from "../components/Banner";
import BottomContainer from "../components/BottomContainer";
import Footer from "../components/Footer";

export default function Unterseite() {
  return (
    <Layout>
      <Container>
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2023/04/Head-banner-11.png" />

        <p>Liebe Kundin, lieber Kunde,</p>
        <p>
          wir haben <strong>Neuigkeiten zu Deiner Bestellung:</strong> Deine
          Ware wird am Montag verpackt und kurz darauf an unseren
          Versanddienstleister übergeben. Das heißt:{" "}
          <strong>
            Deine Bestellung erreicht Dich voraussichtlich Ende nächste Woche.
          </strong>
        </p>
        <p>
          Damit erfolgt die Lieferung etwas später als ursprünglich angekündigt,
          wir bitten Dich dafür um Entschuldigung.
        </p>
        <p>
          Sobald Deine Ware an unseren Versanddienstleister übergeben wurde,
          erhältst Du per E-Mail genauere Informationen zum Liefertermin und
          einen Link zur Nachverfolgung Deiner Bestellung.
        </p>

        <p>
          In der Zwischenzeit kannst Du gerne einen Blick in unsere{" "}
          <a href="https://priwatt.de/service/erklaer-videos/">Erklärvideos</a>,{" "}
          <a href="https://priwatt.de/service/faq/">FAQ</a> oder auf unseren{" "}
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
