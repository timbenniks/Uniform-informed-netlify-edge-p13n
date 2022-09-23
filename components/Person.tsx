const Person = (props: any) => {
  return (
    <div style={{ padding: "500px 100px" }}>
      <p style={{ fontSize: "50px", fontWeight: "bold" }}>{props.title}</p>
      <img src={props.image} />
    </div>
  );
};

export default Person;
