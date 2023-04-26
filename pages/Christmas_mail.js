import Layout from "../components/Layout";
import Container from "../components/Container";
import Banner from "../components/Banner";
import BottomContainer from "../components/BottomContainer";
import Footer from "../components/Footer";

export default function Passwort_vergessen() {
  return (
    <Layout>
      <Container>
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2022/12/christmas_banner.png" />
        <p>Hallo &#123;first + surename&#125;,</p>
        <p>es ist Weihnachten, die Zeit im Jahr, um Danke zu sagen.
       </p>
        <p>
        Wir sind unheimlich dankbar, dass Du mit Deiner Stecker-Solaranlage einen Beitrag zu einer nachhaltigeren Zukunft leistest. Nur gemeinsam mit Dir können wir unsere Mission verwirklichen, die Energiewende für alle zu ermöglichen.
        </p>
        <p>Wir wünschen Dir ein frohes Weihnachtsfest im Kreise Deiner Liebsten und einen guten Start ins neue Jahr.</p>
        
     
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
