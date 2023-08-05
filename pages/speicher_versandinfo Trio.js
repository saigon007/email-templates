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
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2023/07/Head-banner-26.png" />
        <p>Liebe Kundin, lieber Kunde,</p>
        <p>
          wir haben tolle Neuigkeiten für Dich: Ab sofort erhältst Du bei uns
          einen leistungsstarken
          <strong>
            Balkonkraftwerk-Speicher als perfekte Ergänzung für Dein
            Balkonkraftwerk - jetzt noch günstiger!
          </strong>
        </p>
        <p>
          <Button href="https://priwatt.de/balkonkraftwerk-speicher/">
            Balkonkraftwerk-Speicher!
          </Button>
        </p>

        <p>
          <strong>
            Darum passt die Speicherlösung perfekt zu Deiner Anlage:
          </strong>
          Deine Anlage produziert und speichert Strom, auch wenn Du gerade nicht
          zu Hause bist und diesen verbrauchst. Mit dem Speicher kannst Du
          Deinen Strom jederzeit flexibel einspeisen oder direkt verbrauchen. So
          nutzt Du das volle Potenzial Deines Balkonkraftwerks und sparst jede
          Menge Stromkosten.
        </p>

        <p>
          Erhältlich ist die Speicherlösung mit 1 kWh oder 2 kWh Kapazität und
          lässt sich kinderleicht mit Deinem Balkonkraftwerk kombinieren.
        </p>
        <p>
          <strong>Und so einfach geht`&apos;s:</strong>
          An den Hub Deines Speichers kannst Du bis zu zwei Solarmodule
          gleichzeitig anschließen. Der Hub wird dann einfach zwischen Deinen
          Modulen und einem der Wechselrichter montiert. Je nachdem, ob Du mehr
          Strom einspeisen oder speichern möchtest, verbindest Du mehr Module
          mit dem Speicher oder Deinem Haushaltsstromnetz.
        </p>

        <p>
          Mittels App kannst Du die Erzeugungsleistung über Bluetooth oder WLAN
          in Echtzeit verfolgen und ganz bequem individuelle Zeitintervalle für
          die Ausspeicherung einstellen.
        </p>
        <p>
          <strong>
            <a href="https://priwatt.de/balkonkraftwerk-speicher/">
              Bestelle jetzt
            </a>{" "}
            und nutze Deinen Solarstrom noch effizienter!
          </strong>
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
