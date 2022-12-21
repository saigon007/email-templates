import Layout from "../components/Layout";
import Container from "../components/Container";
import Banner from "../components/Banner";
import BottomContainer from "../components/BottomContainer";
import Footer from "../components/Footer";

export default function Unterseite() {
  return (
    <Layout>
      <Container>
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2022/12/mwstbanner.png" />
        <p>Liebe Kundin, lieber Kunde,</p>
        <p>
          wir haben super Neuigkeiten für Dich:{" "}
          <strong>
            Du sparst ab jetzt die 19 % Mehrwertsteuer beim Kauf unserer
            Stecker-Solaranlagen!
          </strong>
        </p>
        <p>
          Ab Januar wird die Mehrwertsteuer für Photovoltaik-Anlagen und deren
          Betrieb auf 0 % herabgesetzt. Wir geben die 19 % MwSt schon jetzt an
          Dich weiter!*
        </p>
        <p>
          So umgehst Du den großen Stecker-Solar-Ansturm im Januar, startest
          nachhaltig ins neue Jahr, sparst bares Geld und produzierst
          langfristig, schnell und einfach Deinen eigenen grünen Solarstrom.
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
            padding-bottom: 30px;
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
