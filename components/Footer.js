export default function Footer() {
  return (
    <>
      <div className="footer-icons">
        <a href="https://www.facebook.com/priwatt.energy" className="icon">
          <img
            src="https://priwatt.de/wordpress/wp-content/uploads/2021/11/facebook.png"
            alt="Priwatt Facebook"
            width="100%"
            height="auto"
          />
        </a>
        <a href="https://www.linkedin.com/company/priwatt" className="icon">
          <img
            src="https://priwatt.de/wordpress/wp-content/uploads/2021/11/linkedin.png"
            alt="Priwatt LinkedIn"
            width="100%"
            height="auto"
          />
        </a>
        <a href="https://www.instagram.com/priwatt_energy" className="icon">
          <img
            src="https://priwatt.de/wordpress/wp-content/uploads/2021/11/instagram.png"
            alt="Priwatt Instagram"
            width="100%"
            height="auto"
          />
        </a>
      </div>
      <div className="footer-text">
        <p>© 2022 Priwatt GmbH</p>
        <p> Pfaffendorfer Straße 26, 04105 Leipzig, Deutschland</p>
        <p>
          Dies ist eine automatisch versendete Nachricht. Du hast Fragen? Dann
          antworte uns gern direkt auf diese E-Mail.
        </p>
      </div>
      <style jsx>{`
        .footer-icons {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .icon {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 10px;
        }
        .icon:last-child {
            margin-right: 0;
        }
        .footer-text {
          text-align: center;
          font-size: 12px;
          line-height: 12px;
          max-width: 500px;
          margin: 30px auto;
        }
      `}</style>
    </>
  );
}
