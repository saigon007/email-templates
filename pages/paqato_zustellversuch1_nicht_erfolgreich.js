import Layout from "../components/Layout";
import Container from "../components/Container";
import Banner from "../components/Banner";
import BottomContainer from "../components/BottomContainer";
import Footer from "../components/Footer";

export default function Unterseite() {
  return (
    <Layout>
      <Container>
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2023/06/Zustellversuch.png" />
  
        <p>Hallo #123;#123; recipient.name #125;#125;</p>
        <p>
          leider konnte Dein Paket von priwatt mit der Sendungsnummer #123;#123;
          trackingCode #125;#125; nicht zugestellt werden.
        </p>
        <p>
        Ein zweiter Zustellversuch erfolgt am kommenden Werktag.
        </p>

        <p>
          <strong>
            Du möchtest einen Wunschtermin, eine Adressänderung, eine
            Nachbarschaftszustellung oder eine Abstellgenehmigung beantragen?
          </strong>
          Nutze dafür ganz einfach diesen <a href="https://priwatt.de/sendungsverfolgung/">Paketlink</a>. #123;%- endif -%#125;
        </p>
        <p>
          Weitere Details und Informationen zum Sendungsverlauf findest Du in
          Deiner Sendungsverfolgung.
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
