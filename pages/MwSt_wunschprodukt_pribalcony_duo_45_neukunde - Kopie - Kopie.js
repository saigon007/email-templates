import Layout from "../components/Layout";
import Container from "../components/Container";
import Banner from "../components/Banner";
import BottomContainer from "../components/BottomContainer";
import Footer from "../components/Footer";

export default function Unterseite() {
  return (
    <Layout>
      <Container>
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2023/01/Head-banner-3.png" />
        <p>Liebe Kundin, lieber Kunde,</p>
      <br/>
        <p>
        wir haben gute Nachrichten für Dich: <strong>Die Mehrwertsteuer Deiner Bestellung wurde auf 0
% angepasst</strong>.
        </p>
        <p>
        Aufgrund der Anpassung und der damit verbundenen Erneuerung Deiner Rechnung 
<strong> verzögert sich jedoch die Lieferung</strong> Deiner Bestellung. Wir rechnen damit, dass Deine
Anlage voraussichtlich in zwei Wochen an Dich versandt wird.
        </p>
     
      
        <p>
        Die von Dir bereits gezahlten <strong>19 % MwSt. erstatten wir Dir</strong> auf Dein ursprüngliches
Zahlungsmittel.
       
      </p>
       <p>Sobald Deine Bestellung auf dem Weg zu Dir ist, erhältst Du per E-Mail einen Link zur
Nachverfolgung Deiner Lieferung.


       </p>

        <p>
        In der Zwischenzeit kannst Du gerne einen Blick in unsere <a href="https://priwatt.de/service/erklaer-videos/">Erklärvideos</a>,{" "}
          <a href="https://priwatt.de/service/faq/">
            FAQ
          </a>{" "}
          oder in unseren <a href="https://priwatt.de/blog/">Blog</a>{" "}
          werfen, um mehr über Deinen neuen Energielieferanten zu lernen.
        </p>


        <p>
        Vielen Dank, dass Du Dich für priwatt entschieden hast und gemeinsam mit uns die Energiewende vorantreibst!
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
