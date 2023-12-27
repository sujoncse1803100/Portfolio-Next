import "./style.css";

const page = () => {
  return (
    <div className="text-center skill-container">
      <div className="">
        <h3 className="title">Markup Language </h3>
        <ol className="ul">
          <li className="li">HTML</li>
          <li className="li">HTML5</li>
        </ol>
        <h3 className="title">Style Language </h3>
        <ol className="ul">
          <li className="li">
            CSS
            <ol>
              <li>Tailwind CSS</li>
              <li>Bootstrap</li>
            </ol>
          </li>
          <li className="li">CSS3</li>
        </ol>
      </div>
      <div className="">
        <h3 className="title">Programming Language </h3>
        <ol className="ul ps-5">
          <li className="li">C</li>
          <li className="li">C++</li>
          <li className="li">JAVA</li>
          <li className="li">JavaScript( ES6 )</li>
          <li className="li">
            Server Site
            <ol>
              <li>Node.js</li>
              <li>Express.js</li>
            </ol>
          </li>
          <li className="li">
            Database
            <ol>
              <li>
                MongoDB
                <ol>
                  <li>Mongoose</li>
                </ol>
              </li>

              <li>MySQL(running)</li>
            </ol>
          </li>
        </ol>
      </div>
      <div className=" ">
        <h3 className="title">Additional Skills</h3>
        <ol className="ul">
          <li className="li">
            JavaScript Framework
            <ol>
              <li>
                React.js
                <ol>
                  <li>Next.js</li>
                </ol>
              </li>
            </ol>
          </li>
          <li className="li">
            JavaScript Library
            <ol>
              <li>JQuery</li>
            </ol>
          </li>
          <li className="li">Git, Github</li>
          <li className="li">
            Deployment
            <ol>
              <li>Firebase</li>
              <li>Heroku</li>
              <li>Netlify</li>
            </ol>
          </li>
          <li className="li">Firebase Authentication</li>
          <li className="li">Google Map Integration</li>
          <li className="li">Paypal, Stripe, Sslcommerz integration</li>
        </ol>
      </div>
    </div>
  );
};

export default page;
