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
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2022/12/mwstbanner.png" />
        <p>Liebe Kundin, lieber Kunde,</p>
        <p>
          wir haben tolle Neuigkeiten für Dich: Dein Wunschprodukt
          <strong>
            priBalcony 45° Duo
          </strong> ist ab sofort mit 0% Mehrwertsteuer (statt 19%) verfügbar! 
        </p>
        <p>
          Warum? Weil Ab Januar die Mehrwertsteuer für Photovoltaik-Anlagen und deren
          Betrieb auf 0 % herabgesetzt wird. 
          <strong>Wir geben die 19 % MwSt schon jetzt an
          Dich weiter!*</strong>
        </p>
        <p>
          So umgehst Du den großen Stecker-Solar-Ansturm im Januar, startest
          nachhaltig ins neue Jahr, sparst bares Geld und produzierst
          langfristig, schnell und einfach Deinen eigenen grünen Solarstrom.
        </p>
        <p>
          <strong>Um zu Deinem Wunschprodukt zu gelangen, klicke bitte auf den nachfolgenden Link:</strong>
        </p>
        <Button href="https://priwatt.de/stecker-solaranlagen/balkon/pribalcony-duo-450/SW10172.1">
          Hier geht`s zum priBalcony Duo 45°!
        </Button>
        <p>
          <strong>Sollte dieser Button nicht angezeigt werden, klicke bitte</strong>{" "}
          <a href="https://priwatt.de/stecker-solaranlagen/balkon/pribalcony-duo-450/SW10172.1">
            hier
          </a>.
        </p>
        <p>
          <strong>Und so geht’s:</strong> Kaufe jetzt Deine eigene
          Stecker-Solaranlage und wir senden sie Dir im Januar zu.
        </p>
        <p>
          Um die 0 % MwSt. in Anspruch nehmen zu können, gilt es folgende
          Voraussetzung zu erfüllen:
        </p>
        <p>
          - Die Rechnungsadresse der Bestellung muss mit der des
          Anlagenbetreibers/der Anlagenbetreiberin übereinstimmen! Du kaufst Die
          Anlage also für Dich selbst.
        </p>
        <p>
          Du erfüllst die Voraussetzung? Super, dann ist Deine privaten
          Energiewende in greifbarer Nähe!
        </p>

        <p>
          Nutze zudem gern unseren{" "}
          <a href="https://priwatt.de/service/anmeldeservice/">
            gratis Anmeldeservice
          </a>
          inkl. Anmeldegarantie. So wird nach dem Kauf auch die Registrierung
          Deiner Anlage zum Kinderspiel!
        </p>

        <p>
          Vielen Dank, dass Du gemeinsam mit uns die Energiewende vorantreibst!
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
