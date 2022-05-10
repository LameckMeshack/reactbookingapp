import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money</h1>
      <span className="mailDesc">
        Sign up and we'll send the best deal to you
      </span>
      <div className="mailInputContainer">
        <input type="text" name="" id="" placeholder="Your Email" />
        <button className="mailButton">subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
