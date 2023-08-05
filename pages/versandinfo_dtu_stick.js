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
          tolle Neuigkeiten! Die Teillieferung mit dem DTU-Stick für die
          Energiemessung und Drosselung Deines Wechselrichters wird gerade
          verpackt und im Anschluss an Dich versendet.
        </p>
        <p>
          Das heißt:{" "}
          <strong>
            Deine Bestellung erreicht Dich voraussichtlich Anfang nächster
            Woche.
          </strong>
        </p>

        <p>
          Sobald Deine Ware an unseren Versanddienstleister übergeben wurde,
          erhältst Du per E-Mail genauere Informationen zum Liefertermin und
          einen Link zur Nachverfolgung Deiner Teillieferung.
        </p>
        <p>
        Um Dich noch umfassender zum Thema Photovoltaik zu informieren, wirf in der Zwischenzeit gerne einen Blick in unsere{" "}
          <a href="https://priwatt.de/service/erklaer-videos/">Erklär-videos</a>
          , <a href="https://priwatt.de/service/faq/">FAQ</a> oder auf unserem{" "}
          <a href="https://priwatt.de/blog/">Blog</a>.
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
