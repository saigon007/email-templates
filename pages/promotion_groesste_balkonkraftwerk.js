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
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2023/05/Head-banner-13.png" />
        <p>Liebe Kundin, lieber Kunde,</p>
        <p>
          wir haben aufregende Neuigkeiten für Dich:
          <strong>
            Ab sofort erhältst Du bei uns das stärkste Balkonkraftwerk
            Deutschlands!
          </strong>
        </p>
        <p>
          <strong>
            Du möchtest noch mehr grünen Strom erzeugen und gleichzeitig eine
            Menge Stromkosten einsparen? Dann sind die neuen Sets perfekt für
            Dich!
          </strong>
        </p>
        <p>
          <strong>Das macht die Duo XL Sets so einzigartig:</strong>
          Mit den leistungsstarken Solarmodule kannst Du Solarstrom mit einer
          Gesamtleistung von bis zu 1080 Watt produzieren. Stell Dir vor, wie
          viel grüne Energie Du damit gewinnen kannst!
        </p>
        <p>
          Bei idealer Modulausrichtung und einer hohen Eigenverbrauchsquote
          sparst Du so bis zu 540 € Energiekosten pro Jahr. Das bedeutet, dass
          sich Deine Duo XL Anlage bereits nach ab 2-3 Jahren amortisiert!
        </p>
        <p></p>
        Ein weiteres Highlight: Alle Duo XL Sets sind Teil der neuen
        Balkonkraftwerk-Generation von priwatt und updatefähig auf 800 Watt.
        Damit bist Du optimal auf die geplante Einführung der
        800-Watt-Bagatellgrenze durch die Bundesregierung vorbereitet.
        <p>
          <strong>
            Worauf wartest Du noch? Bestelle jetzt und starte in Deine private
            Energiewende!
          </strong>
          <Button href="https://priwatt.de/stecker-solaranlagen/garten/priflat-duo-xl/SW10385.1">
            Hier gehs zu den XL Balkonkraftwerken
          </Button>
        </p>
        <p>Viel Spaß beim Produzieren Deines eigenen Solarstroms!</p>
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
