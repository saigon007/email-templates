export default function BottomContainer() {
  return (
    <>
      <p className="footer-words">
        Sonnige Grüße <br /> Dein Team von priwatt
      </p>
      <div className="line"></div>
      <p className="footer-text">
        Du hast Fragen? Dann kontaktiere uns über unser{" "}
        <a href="https://priwatt.de/kontakt/email/">Kontaktformular</a>
      </p>
      <style jsx>{`
        a {
          color: #3bdfac;
        }

        .footer-words {
          color: #0c215a;
          width: 200px;
          font-weight: 600;
          line-height: 27px;
          padding-bottom: 20px;
        }
        .line {
          border-bottom: 1px solid #e7e9ef;
          margin-bottom: 30px;
        }
        .footer-text {
          font-size: 13px;
          text-align: center;
          font-weight: 400;
          line-height: 17px;
          width: 90%;
          display: block;
          margin: auto;
        }
      `}</style>
    </>
  );
}
