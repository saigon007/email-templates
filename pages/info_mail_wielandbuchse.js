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
          wir haben tolle <strong>euigkeiten für Dich:</strong> Die zweite
          Teillieferung zu Deiner Bestellung wird gerade verpackt und demnächst
          an unseren Versanddienstleister übergeben.
        </p>
        <p>
          Das heißt:{" "}
          <strong>
            Die Lieferung mit der Wieland-Buchse Deines Balkonkraftwerks
            erreicht Dich innerhalb der nächsten Tage.
          </strong>
        </p>
        <p>
          Sobald Deine Ware an unseren Versanddienstleister übergeben wurde,
          erhältst Du per E-Mail genauere Informationen zum Liefertermin und
          einen Link zur Nachverfolgung Deiner Bestellung.
        </p>
        <p>
          In der Zwischenzeit kannst Du gerne in unsere{" "}
          <a href="https://priwatt.de/service/erklaer-videos/">Erklärvideos</a>,{" "}
          <a href="https://priwatt.de/service/faq/">FAQ</a> oder unseren
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
