import Card from "../../components/Card/Card";

const Portfolio = () => {
  return (
    <>
      <h2 className="text-capitalize px-4 mb-4">Portfolio</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="mb-4">
              <Card title="web design" value="grey"  />
            </div>
          </div>
          <div className="col-md-4">
            <div className="mb-4">
              <Card title="mobile design" value="blue"  />
            </div>
          </div>
          <div className="col-md-4">
            <div className="mb-4 ">
              <Card title="logo design"   value="red" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="mt-4">
              <Card title="web application development" value="yellow" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="mt-4">
              <Card title="mobile application development" value="pink"  />
            </div>
          </div>
          <div className="col-md-4">
            <div className="mt-4">
              <Card title="pwa development"  value="orange"  />
            </div>
          </div>
        </div>
      </div>
    </>);
}

export default Portfolio;