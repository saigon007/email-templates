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
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2023/06/Zustellung-NachbarInnen.png" />
   

        <p>Hallo #123;#123; recipient.name #125;#125;</p>
        <p>Deine Bestellung von priwatt ist auf dem Weg zu Dir!</p>
        <p>
          Dein Paket von priwatt mit der Sendungsnummer #123;#123; trackingCode #125;#125;
          wurde heute erfolgreich zugestellt! Dein Nachbar / Deine Nachbarin hat Deine Bestellung für Dich entgegengenommen. #123;% if hasSubRecipient %#125;

        </p>
         <p>
         #123;#123; subRecipient #125;#125;
         123;% else %#125;Genauere Informationen findest Du auf der Benachrichtigungskarte in Deinem Briefkasten.


         </p>
         <p>Um schnell und einfach in Deine private Energiewende zu starten, findest Du hier außerdem die Montageanleitung für Dein Balkonkraftwerk.</p>
         
        
         <p>
        Um schnell und einfach in Deine private Energiewende zu starten, findest Du hier die Montageanleitung zu Deiner Stecker-Solaranlage.
        </p>
        <Button href="https://priwatt.de/wordpress/wp-content/uploads/2023/05/L_19_523_priwatt_Montageanleitungen-web.pdf">
          Hier geht`s zur Montageanleitung
        </Button>
        <p>
        #123;% endif %#125; Weitere Details und Informationen zum Sendungsverlauf findest Du in der Sendungsverfolgung.

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
