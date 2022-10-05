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
        <p>Deine Bestellung von priwatt #123;#123; orderNumber #125;#125; wird Dich in Kürze erreichen.
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
        Klicke dafür ganz einfach auf diesen #123;%- endif -%#125;</p> 

        <p>
        Nutze die Zeit, bis Dein Paket da ist, gern, um auf unserem <a href="https://priwatt.de/blog/">Blog</a>, 
          <a href="https://www.youtube.com/channel/UCLBefFTN5Dl3hz7OnSUUhOg">
            YouTube-Kanal
          </a> 
          oder in unseren <a href="https://priwatt.de/service/faq">FAQ</a> 
          mehr über Deinen neuen Energielieferanten zu lernen.
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
