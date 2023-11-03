const Notice = require("../model/notice.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const sendMail = require("../Mails/sendMail");

const { google } = require("googleapis");
const { OAuth2 } = google.auth;

const { CLIENT_URL } = process.env;

const NoticeController = {

  addNotice: async (req, res) => {
    try {
      const { notice_time, notice_date, notice_venue } = req.body;

      const result = new Notice({ time: notice_time, date: notice_date, venue: notice_venue, });
      result.save();
      
      return res.status(200).json({
        code: 200,
        success: true,
        status: "OK",
        gasDetails: result,
        message: "Notice Added.",
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

  getNotices: async (req, res) => {
    try {
      const result = await Notice.find({}).sort({createdAt : -1});

      
      res.send(result);
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



module.exports = NoticeController;
