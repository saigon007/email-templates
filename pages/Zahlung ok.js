import Layout from "../components/Layout";
import ContainerOrderNr from "../components/ContainerOrderNr";
import Banner from "../components/Banner";
import BottomContainer from "../components/BottomContainer";
import Footer from "../components/Footer";

export default function Unterseite() {
  return (
    <Layout>
      <ContainerOrderNr>
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2022/05/zahlung.png" />
        
        <p></p>
        <p>Hallo &#123;NAME&#125;,</p>

        <p>
          die Zahlung zu Deiner Bestellung &#123;INTERNET&#125; vom &#123;DATUM&#125; ist bei uns
          eingegangen. Wir werden Dich benachrichtigen, sobald Dein Paket
          versandt wurde. Sofern wir Dich nicht anderweitig per E-Mail bereits
          kontaktiert haben, findest Du das <strong>Lieferdatum in der vorangegangenen
          Auftragsbest&auml;tigung</strong>.
        </p>

        <p>
          <strong>Wichtig</strong>: Eventuell wird Deine Lieferung in 
          <strong>
            zwei Teilsendungen innerhalb der oben genannten Lieferfrist
          </strong>
           versendet. Solltest Du also R&uuml;ckfragen zur Zustellung der
          Sendungen haben, warte mit Deiner Anfrage daher bitte das oben
          angegebene Datum ab.
        </p>

        <p>
          Eine <strong>Rechnung</strong> erhälst Du automatisch, sobald Deine Bestellung
          versendet wird!
        </p>

        <p>
          Kurz vor der <strong>Zustellung wird Dich die Spedition per E-Mail
          kontaktieren</strong>, um einen Zustelltermin mit Dir zu koordinieren. 
          </p>
          
         <p> Aufgrund der derzeit hohen Nachfrage kann es vereinzelt zu verl&auml;ngerten
          Lieferzeiten kommen. Nat&uuml;rlich wirst Du sofort informiert, sollte
          sich etwas &auml;ndern.
        </p>

        <p>
          Hast Du noch Fragen? Dann schaue auch gern auf unserem{" "}
          <a href="https://priwatt.de/blog/">Blog</a>,
          <a href="https://www.youtube.com/channel/UCLBefFTN5Dl3hz7OnSUUhOg">
            YouTube-Kanal
          </a>
          oder in unseren <a href="https://priwatt.de/service/faq">FAQ</a>
          vorbei.
        </p>
        <p>Vielen Dank für Deinen Beitrag zur Energiewende!</p>

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
      </ContainerOrderNr>
      <Footer />
    </Layout>
  );
}
