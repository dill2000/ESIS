const Gas = require("../model/gas.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const sendMail = require("../Mails/sendMail");

const { google } = require("googleapis");
const { OAuth2 } = google.auth;

const { CLIENT_URL } = process.env;

const GasControllers = {

  fetchDataofgas: async (req, res) => {
    try {
      const gas = await Gas.findOne({ customer_id: req.params.id }).sort({createdAt : -1});

      
      return res.status(200).json({
        code: 200,
        success: true,
        status: "OK",
        gasDetails: gas,
        message: "gas details recieved",
      });
    } catch (error) {
      return res.status(500).json({
        code: 500,
        success: false,
        status: "Internal Server Error" + gas + "",
        message: error.message,
      });
    }
  },

  addGasToCustomer: async (req, res) => {
    try {
      const { cus_id, gas_size } = req.body;

      var date=new Date();  
      var day=date.getDate();  
      var month=date.getMonth()+1;  
      var year=date.getFullYear();  

      const datelatest = +day+"-"+month+"-"+year;

      const customer_purchased_date = datelatest;

      const randomID = Math.floor(Math.random() * 999999999999999);

      const gas = new Gas({ gas_id: randomID, customer_id: cus_id, gas_sized: gas_size, customer_purchased_date: customer_purchased_date, });
      gas.save();
      
      return res.status(200).json({
        code: 200,
        success: true,
        status: "OK",
        gasDetails: gas,
        message: "Gas Gave to the customer ["+ cus_id + "] .",
      });
    } catch (error) {
      return res.status(500).json({
        code: 500,
        success: false,
        status: "Internal Server Error",
        message: error.message,
      });
    }
  },

  
};



module.exports = GasControllers;
