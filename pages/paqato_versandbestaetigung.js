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
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2022/07/wunschprodukt.png" />
        <p>
          <strong>
            Dein Paket von priwatt zur Bestellung #123;#123; orderNumber
            #125;#125; wurde versandt
          </strong>
        </p>
        <p>Hallo #123;#123; recipient.name #125;#125;</p>
        <p>Deine Bestellung von priwatt ist auf dem Weg zu Dir!</p>
        <p>
          Deine Sendung mit der Auftragsnummer #123;#123; orderNumber #125;#125;
          wurde soeben mit #123;#123; carrier #125;#125; an Deine angegebene
          Adresse versendet.
        </p>
         <p>
         #123;#123; recipient #125;#125;

         </p>
        <p>
          Mit Deiner Sendungsnummer kannst Du Dein Paket ganz einfach verfolgen:
          #123;#123; trackingCode #125;#125 #123;%- if carrierPortalLink is not
          empty -%#125;
        </p>
        <p>
          <strong>
            Du möchtest einen Wunschtermin, eine Adressänderung, eine
            Nachbarschaftszustellung oder eine Abstellgenehmigung beantragen?
          </strong>
          Nutze dafür ganz einfach diesen Paketlink. #123;%- endif -%#125;
        </p>

        <p>
        Um schnell und einfach in Deine private Energiewende zu starten, findest Du hier die Montageanleitung zu Deiner Stecker-Solaranlage.
        </p>
        <Button href="https://priwatt.de/wordpress/wp-content/uploads/2022/09/Montageanleitung-09-2022-2.pdf">
          Hier geht`s zur Montageanleitung
        </Button>

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
