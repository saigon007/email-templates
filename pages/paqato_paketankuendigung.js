import Layout from "../components/Layout";
import Container from "../components/Container";
import Banner from "../components/Banner";
import BottomContainer from "../components/BottomContainer";
import Footer from "../components/Footer";

export default function Unterseite() {
  return (
    <Layout>
      <Container>
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2022/07/wunschprodukt.png" />
        <p></p>
        <p>
          <strong>
            Dein Paket von priwatt zur Bestellung #123;#123; orderNumber
            #125;#125; wird bald zugestellt
          </strong>
        </p>
        
        <p>Hallo #123;#123; recipient.name #125;#125;</p>
        <p>Deine Bestellung von priwatt #123;#123; orderNumber #125;#125; ist auf dem Weg zu Dir und wird Dich bald erreichen.
</p>
        
        <p>
          Mit Deiner Sendungsnummer kannst Du Dein Paket ganz einfach verfolgen:
          #123;#123; trackingCode #125;#125 #123;%- if carrierPortalLink is not
          empty -%#125;
        </p>
       <p><strong>
          Du möchtest einen Wunschtermin, eine Adressänderung, eine
          Nachbarschaftszustellung oder eine Abstellgenehmigung beantragen?
        </strong>
        Klicke dafür ganz einfach auf diesen <a href="https://priwatt.de/sendungsverfolgung/">Paketlink</a> #123;%- endif -%#125;</p> 

        <p>
        Unser Tipp für Dich: Nutze die Zeit bis zur Zustellung Deines Pakets, um in unseren{" "}
          <a href="https://priwatt.de/service/erklaer-videos/">Erklär-videos</a>,{" "}
          <a href="https://priwatt.de/service/faq/">FAQ</a> oder auf unserem{" "}
          <a href="https://priwatt.de/blog/">Blog</a> mehr über Dein Balkonkraftwerk zu erfahren.

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
