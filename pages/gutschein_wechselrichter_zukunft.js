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
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2023/03/gutschein.png" />
        <p>Liebe Kundin, lieber Kunde,</p>
        <br />
        <p>
        Du konntest mit Deiner Stecker-Solaranlage bereits jede Menge Stromkosten sparen? Klasse!
Als Dankeschön für Deinen Beitrag zur Energiewende teilen wir heute{" "}
          <strong>
          einen Gutscheincode für
unseren Onlineshop und sensationelle Neuigkeiten
          </strong> mit Dir: Die Stecker-Solaranlage der
Zukunft ist da!

        </p>
        <p>
          <strong>
          Das Balkonkraftwerk von priwatt ist ab jetzt im deutschlandweit ersten
800-Watt-updatefähigen Duo-Stecker-Solarset erhältlich!
          </strong>
          </p>
          <p>
            <strong>Das macht die Anlagen so besonders und fasziniert mit Sicherheit auch Deine
Energiewende-begeisterten Liebsten:</strong>
In der Politik wird aktuell diskutiert, die maximale Einspeiseleistung der Balkonkraftwerke von
600 auf 800 Watt zu erhöhen. Mit den neuen Duo-Sets lässt sich nach gesetzlich eingeführter
Bagatellgrenze die maximale Einspeiseleistung bequem online von 600 auf 800 Watt erhöhen.
        </p>
        <p>
          <strong>Das heißt:</strong> Sobald die Erhöhung in Kraft tritt, kann die Anlage direkt 800 Watt Peak einspeisen,
ohne neues Gerät – klasse, oder?
        </p>

        <p>
        Ein weiterer Vorteil: Dank WLAN-Funktion und kostenfreier App lässt sich die Energieerzeugung
der Anlage jederzeit einsehen, ganz einfach über das eigene Smartphone.
        </p>
        <p>
          <strong>
          Zur Feier des Tages erhältst Du Deinen persönlichen 50 € Gutschein für unseren
Onlineshop, den Du gern selbst nutzen oder an Deine Liebsten verschenken kannst.
          </strong>{" "}So
unterstützt Du sie auf ihrem Weg in die private Energiewende.
        
        </p>
        <p>
<strong>Dein Gutscheincode: LUGZVRJM50</strong>

        </p>
        <p>
        <Button href="https://priwatt.de/stecker-solaranlagen/">
        Hier geht’s zur neuen Stecker-Solar-Generation
        </Button>
        </p>
        <p>Wir wünschen Dir weiterhin viel Spaß bei der Erzeugung Deines eigenen Solarstroms und
freuen uns über Deine Weiterempfehlung.</p>

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
