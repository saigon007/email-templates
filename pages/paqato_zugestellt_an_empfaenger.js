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
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2023/06/Zustellung-erfolgt.png" />
    
        <p>Hallo #123;#123; recipient.name #125;#125;</p>
        
        <p>
          Dein Paket von priwatt mit der Sendungsnummer #123;#123; trackingCode
          #125;#125 wurde heute erfolgreich an die von Dir angegebene Adresse
          zugestellt.
        </p>
        <p>#123;#123; recipient #125;#125</p>

        <p>
        Um schnell und einfach in Deine private Energiewende zu starten, findest Du hier die Montageanleitung für Dein Balkonkraftwerk.
        </p>
        <Button href="https://priwatt.de/wordpress/wp-content/uploads/2023/05/L_19_523_priwatt_Montageanleitungen-web.pdf">
          Hier geht`s zur Montageanleitung
        </Button>

        <p>
          Du hast noch Fragen? Dann schaue gerne in unseren{" "}
          <a href="https://priwatt.de/service/erklaer-videos/">Erklär-videos</a>,{" "}
          <a href="https://priwatt.de/service/faq/">FAQ</a> oder auf unserem{" "}
          <a href="https://priwatt.de/blog/">Blog</a> vorbei.
        </p>

        <p>
        Vielen Dank für Deine Bestellung und Deinen Beitrag! Wir wünschen Dir viel Spaß bei der Produktion Deines eigenen Solarstroms.
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
