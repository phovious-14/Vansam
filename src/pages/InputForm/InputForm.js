import React, { useContext, useState } from "react";
import "./inputStyle.css";
import Auth from "../../context/Auth";

const InputForm = () => {

  const { contract } = useContext(Auth);
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [fename, setFename] = useState("");
  const [dob, setDob] = useState("");
  const [recordDate, setRecordDate] = useState("");
  const [wealth, setWealth] = useState("");
  const [genNo, setGenNo] = useState("");

  const addData = async (e) => {
    e.preventDefault();
    // const data = await contract.createPerson(mname, fename, genNo, dob, wealth, fname);
    // await data.wait()

    console.log(await contract.getData());
  };

  return (
    <div className="container">
      <div className="row">
        <div className="signin-form">
          <div className="logo-container"></div>
          <div className="form-group ">
            <input
              type="text"
              className="form-control"
              placeholder="Father name "
              id="fname"
              onChange={(e)=> setFname(e.target.value)}
              required
            />
            <i className="fa fa-user"></i>
          </div>
          <div className="form-group ">
            <input
              type="text"
              className="form-control"
              placeholder="Male name "
              id="mname"
              onChange={(e)=> setMname(e.target.value)}
              required
            />
            <i className="fa fa-user"></i>
          </div>
          <div className="form-group ">
            <input
              type="text"
              className="form-control"
              placeholder="Female Name "
              id="fename"
              onChange={(e)=> setFename(e.target.value)}
              required
            />
            <i className="fa fa-envelope"></i>
          </div>
          <div className="form-group ">
            <input
              type="date"
              className="form-control"
              placeholder="Date Of Birth "
              id="dob"
              onChange={(e)=> setDob(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              className="form-control"
              placeholder="Record Date"
              id="record_date"
              onChange={(e)=> setRecordDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="Total Wealth"
              id="wealth"
              onChange={(e)=> setWealth(e.target.value)}
              required
            />
            <i className="fa fa-lock"></i>
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="Generation Number"
              id="gen_no"
              onChange={(e)=> setGenNo(e.target.value)}
              required
            />
            <i className="fa fa-lock"></i>
          </div>
          <button type="button" onClick={addData} className="signup-btn">
            Submit Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputForm;
