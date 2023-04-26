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
        <br />
        <p>
        vor einigen Tagen haben wir Dir 
          <strong>neue Halterungsschienen für Dein Balkonkraftwerk</strong> zukommen lassen, mit der Bitte, Deine Schienen zu prüfen und gegebenenfalls
auszutauschen. Wir hoffen, dass die Lieferung gut bei Dir angekommen ist.
        </p>
        <p>
        Einige der in unseren Stecker-Solarsets enthaltenen Montageschienen wurden mit
einem zu kurzen Gewindeabstand zum Profilrand produziert und versendet. Sollte
Deine Anlage betroffen sein, müssen Deine Montageschienen vorsorglich als
Sicherheitsmaßnahme ausgetauscht werden, denn: Deine Sicherheit und die
Zuverlässigkeit unserer Produkte haben für uns oberste Priorität.
        </p>

        <p>
          
          <strong>Hast Du Deine Stecker-Solaranlage bereits überprüft und die richtigen
Halterungsschienen verbaut?</strong>
        </p>
        <p>
        Super! Dann schicke uns den vorgefertigten Antwortbrief aus Deinem Paket bitte
unterschrieben für unsere Unterlagen zurück. Falls nicht, bitten wir Dich, dies zeitnah
zu tun.
        </p>
        <p>
        Sobald Dein Brief bei uns eingegangen ist, erhältst Du von uns Deinen 50 €
Gutscheincode für unseren Online-Shop, den Du nach Belieben selbst einlösen oder
verschenken kannst.

        </p>
        <p>
        Du hast Rückfragen oder hast noch keine neuen Halterungsschienen erhalten? Dann
kontaktiere uns ganz einfach per E-Mail über produktaustausch@priwatt.de oder
telefonisch unter +49 34122179610.

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
