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
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2023/07/A_01_priwatt_Montageanleitungen-DTUWLITE_Web.pdf" />
        <p>Liebe Kundin, lieber Kunde,</p>
        <p>
          bald erreicht Dich der DTU-Stick für die Energiemessung und Drosselung
          Deines Wechselrichters. Damit Du schnell und einfach in Deine
          Energiewende starten kannst, haben wir Dir eine{" "}
          <strong>
            Anleitung zur Drosselung der Wirkleistung Deines Wechselrichters
            mittels DTU-Stick
          </strong>
          erstellt.
        </p>
        <p>
          <strong>Darum muss Dein Wechselrichter gedrosselt werden:</strong>
          Dein Wechselrichter kommt mit einer maximalen Einspeiseleistung von
          800 Watt zu Dir nach Hause.{" "}
          <strong>
            Für den normkonformen Betrieb und die Anmeldung Deiner Anlage beim
            Netzbetreiber ist die Drosselung auf 600 Watt Einspeiseleistung
            essenziell.
          </strong>{" "}
          Sobald die Bagatellgrenze auf 800 Watt angehoben wird, kannst Du
          Deinen Wechselrichter wieder bequem online upgraden.
        </p>

        <p>
          Die Anleitung findest Du unter dem folgenden Link und im Anhang Deiner
          E-Mail.
        </p>

        <p>
          <Button href="https://priwatt.de/wordpress/wp-content/uploads/2023/07/A_01_priwatt_Montageanleitungen-DTUWLITE_Web.pdf">
            Hier geht&apos;s zur Anleitung
          </Button>
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
