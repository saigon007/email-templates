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
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2023/03/zukunft.png" />
        <p>Liebe Kundin, lieber Kunde,</p>
        <br />
        <p>
          wir haben sensationelle Neuigkeiten für Dich: Die Stecker-Solaranlage
          der Zukunft ist da!{" "}
          <strong>
            Dein Balkonkraftwerk von priwatt erhältst Du ab jetzt im
            deutschlandweit ersten 800-Watt-updatefähigen Duo-Stecker-Solarset!
          </strong>
        </p>
        <p>
          <strong>
            Das macht die neue Stecker-Solar-Generation so innovativ:
          </strong>{" "}
          In der Politik wird aktuell diskutiert, die maximale Einspeiseleistung
          der Balkonkraftwerke von 600 auf 800 Watt zu erhöhen. Mit Deinem
          Duo-Set der neuen Generation kannst Du nach gesetzlich eingeführter
          Bagatellgrenze Deine maximale Einspeiseleistung bequem online von 600
          auf 800 Watt erhöhen.
        </p>
        <p>
          <strong>Das heißt für Dich:</strong> Sobald die Erhöhung in Kraft
          tritt, kannst Du direkt 800 Watt Peak einspeisen, ohne ein neues Gerät
          zu kaufen – klasse, oder?
        </p>

        <p>
          Ein weiterer Vorteil: Dank WLAN-Funktion und kostenfreier App lässt
          sich die Energieerzeugung Deiner Anlage jederzeit einsehen, ganz
          einfach über Dein Smartphone.
        </p>
        <p>
          <strong>
            Bestelle jetzt und sichere Dir schon heute Deine Stecker-Solaranlage
            der Zukunft!
          </strong>{" "}
        
        </p>
        <p>
        <Button href="https://priwatt.de/stecker-solaranlagen/">
        Hier geht’s zu den Stecker-Solarsets
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
