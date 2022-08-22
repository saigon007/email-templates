export default function Banner({ src }) {
  return (
    <>
      <div>
        <img
          src={src}
          alt="Priwatt Banner"
          width="100%"
          height="auto"
        />
      </div>
      <style jsx>{`
        .div {
        }
      `}</style>
    </>
  );
}
