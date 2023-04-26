import Layout from "../components/Layout";
import Banner from "../components/Banner";
import BottomContainer from "../components/BottomContainer";
import Footer from "../components/Footer";
import Container from "../components/Container";


export default function Unterseite() {
  return (
    <Layout>
      <Container>
        <br />
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2023/01/Img-16.png" />
        <br />
        <p>Liebe Kundin, lieber Kunde,</p>
        <p>
          letztes Jahr hast Du uns kontaktiert und Dein Interesse an einer unserer Stecker-Solaranlage bekundet. Mit Deiner eigenen Anlage kannst Du{" "}
          <strong>selbst Solarstrom erzeugen</strong>, Stromkosten sowie wertvolle natürliche Ressourcen einsparen. Dank der Mehrwertsteuer-Senkung jetzt sogar <strong>zur MwSt. von 0 %!</strong>
        </p>
        <p>
          Aufgrund der hohen Nachfrage haben wir im letzten Jahr vorübergehend unsere NeukundInnenanfragen deaktiviert, wovon auch Deine Nachricht betroffen war.{" "}
          <strong>Jetzt sind wir wieder voll und ganz für Dich da!</strong>
        </p>

        <p>
          Du möchtest weiterhin mit Deiner eigenen Stecker-Solaranlage in die private Energiewende starten? Super! Dann schau jetzt bei unseren Produkt-Sets vorbei. Hier findest Du die perfekte Anlage für Dich!
        </p>
        <p>
         Du möchtest gern persönlich beraten werden? Buche einfach Deinen kostenlosen  <a href="https://priwatt.de/kontakt//">
            Beratunsgtermin
          </a> bei unseren{" "}
          <strong>Stecker-Solar-ExpertInnen</strong> oder schreibe uns über
          unser  <a href="https://priwatt.de/kontakt/email/">
            Kontaktformular
          </a>. 
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
