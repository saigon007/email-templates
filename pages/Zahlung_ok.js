import Layout from "../components/Layout";
import Banner from "../components/Banner";
import BottomContainer from "../components/BottomContainer";
import Footer from "../components/Footer";
import ContainerOrderNr from "../components/ContainerOrderNr";

export default function Unterseite() {
  return (
    <Layout>
      <ContainerOrderNr>
        <br />
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2023/01/Img-12.png" />
        <br />
        <p>&#123;ANSCHREIBEN&#125;,</p>
        <p>
          tolle Neuigkeiten:{" "}
          <strong>
            die Zahlung zu Deiner Bestellung &#123;INTERNET&#125; vom
            &#123DATUM&#125; ist bei uns eingegangen.
          </strong>{" "}
          Vielen Dank! Im nächsten Schritt werden Deine Produkte sorgfältig von
          unserem Team verpackt und an unseren Versand-Partner übergeben.
        </p>
        <p>
          Sobald das geschehen ist, erhältst Du von uns eine Benachrichtigung
          und die Tracking-Nummern, mit denen Du Deine Sendungen verfolgen
          kannst.
        </p>

        <p>
          Das voraussichtliche Lieferdatum findest Du in Deiner vorangegangenen
          Auftragsbestätigung.
        </p>
        <p>
          <strong>Wichtig:</strong> Eventuell wird Dich Deine Lieferung in{" "}
          <strong>
            zwei Teilsendungen innerhalb des oben genannten Lieferzeitraums
          </strong>{" "}
          erreichen. Bitte warte mit Rückfragen zur Zustellung also bis zum
          angegebenen Lieferzeitpunkt.
        </p>
        <p>
          Du hast noch Fragen? Dann schaue gerne in unserem <a href="https://priwatt.de/blog/">Blog</a>, unseren <a href="https://priwatt.de/service/faq">FAQ</a> oder 
          <a href="https://www.youtube.com/channel/UCLBefFTN5Dl3hz7OnSUUhOg">
            Erklär-Videos
          </a> vorbei.
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
      </ContainerOrderNr>
      <Footer />
    </Layout>
  );
}
