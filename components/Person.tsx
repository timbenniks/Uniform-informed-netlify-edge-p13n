const Person = (props: any) => {
  return (
    <div style={{ position: "relative", top: "1000px", padding: "0 100px" }}>
      <p style={{ fontSize: "50px", fontWeight: "bold" }}>{props.title}</p>
      <img src={props.image} />
    </div>
  );
};

export default Person;
