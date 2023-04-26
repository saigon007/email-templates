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
          wir haben tolle Neuigkeiten für Dich:
          <strong>
          Ab sofort sparst Du die 19 % Mehrwertsteuer beim
Kauf Deiner Wunsch-Stecker-Solaranlage priBalcony 45° Duo!
          </strong>  
        </p>
        <p>
        Denn: Mit dem Jahreswechsel wurde die Mehrwertsteuer für Photovoltaik-Anlagen und
deren Betrieb auf 0 % herabgesetzt!
        </p>
     
      
        <p>
        Um zu Deinem Wunschprodukt zu gelangen und sofort die 19 % MwSt. zu sparen, klicke
einfach auf den nachfolgenden Button:
        </p>
        <Button href="https://priwatt.de/stecker-solaranlagen/balkon/pribalcony-duo-450/SW10172.1">
          Hier geht`s zum priBalcony Duo 45°!
        </Button>
        <p>
          <strong>Sollte Dir dieser Button nicht angezeigt werden, klicke bitte</strong>{" "}
          <a href="https://priwatt.de/stecker-solaranlagen/balkon/pribalcony-duo-450/SW10172.1">
            hier
          </a>.
        </p>
        <p>
          <strong>Und so geht’s:</strong> Kaufe jetzt Deine eigene
          Stecker-Solaranlage und wir senden sie Dir im Januar zu.
        </p>
        <p>
        Um die 0 % MwSt. in Anspruch nehmen zu können, gibt es eine Voraussetzung:
        </p>
        <p>
          - Die Rechnungsadresse Deiner Bestellung muss mit der Adresse des
Anlagenbetreibers/der Anlagenbetreiberin übereinstimmen!
Kurzgefasst heißt das: Du kaufst die Anlage für Dich selbst.
        </p>
        <p>
          Du erfüllst die Voraussetzung? Super, dann ist Deine privaten
          Energiewende in greifbarer Nähe!
        </p>

        <p>
        Unser Tipp für Dich: Nutze zudem unseren{" "}
          <a href="https://priwatt.de/service/anmeldeservice/">
            gratis Anmeldeservice
          </a>
          inklusive
Anmeldegarantie. So wird nach dem Kauf auch die Registrierung Deiner Anlage zum
Kinderspiel!
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
