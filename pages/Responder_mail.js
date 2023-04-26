import Layout from "../components/Layout";
import Container from "../components/Container";
import Banner from "../components/Banner";
import BottomContainer from "../components/BottomContainer";
import Footer from "../components/Footer";
import Button from "../components/Button";

export default function Unterseite() {
  return (
    <Layout>
      <Container>
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2022/07/wunschprodukt.png" />
        <p>Hallo &#123;first + surename&#125;,</p>
        <p>
        vielen Dank für Deine Kontaktanfrage. Unsere priwatt ExpertInnen werden sich innerhalb der nächsten 14 Tage bei Dir zurückmelden. 
        </p>
        <p>
        Bitte beachte: Aufgrund der hohen Nachfrage können wir NeukundInnen-Anfragen zum aktuellen Zeitpunkt nicht annehmen. Wir bitten Dich, dies zu entschuldigen.
        </p>
        <p>
          <strong>Achtung:</strong> Erfahrungsgemäß ist das Produkt binnen 9 bis
          24 Stunden ausverkauft. Ein weiterer Nachschub ist schon in 2 Wochen
          geplant. Solltest Du kein Produkt mehr bekommen, bleibt die
          Produktbenachrichtigung für Deine E-Mail-Adresse aktiviert und wir
          informieren Dich direkt, wenn das Produkt wieder bestellbar ist.
        </p>

        <p>
          Du hast noch Fragen zu Deiner Stecker-Solaranlage? Dann schaue auch
          gern auf unserem <a href="https://priwatt.de/blog/">Blog</a>,
          <a href="https://www.youtube.com/channel/UCLBefFTN5Dl3hz7OnSUUhOg">
            YouTube-Kanal
          </a>
          oder in unseren <a href="https://priwatt.de/service/faq">FAQ</a>
          vorbei.
        </p>
        <Button href="https://priwatt.de/stecker-solaranlagen/balkon/pribalcony-450/SW10047.106">
          Hier geht`s zum priBalcony 45°!
        </Button>
        <p>
          Du hast bereits ein Produkt gekauft oder möchtest nicht mehr
          benachrichtigt werden? Ganz unten in dieser E-Mail kannst Du Dich für
          die Produktbenachrichtigung abmelden.
        </p>

        <p>Toll, dass Du gemeinsam mit uns die Energiewende vorantreibst!</p>
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
