const Person = (props: any) => {
  return (
    <div style={{ padding: "0 100px" }}>
      <p style={{ fontSize: "50px", fontWeight: "bold" }}>{props.title}</p>
      <img src={props.image} />
      <div style={{ height: "1000px" }}>&nbsp;</div>
    </div>
  );
};

export default Person;
