const express = require("express");
const router = express.Router();
const HosUser = require("../models/HospitalUser") 
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchhospital = require("../middleware/fetchhospital");

const JWT_SECRET = "Mohitisagood$boy";

//Route1: Create a user using: POST "/api/hosUser/createuser". No login required
router.post(
  "/createuser",
  [
    body("email", "Enter a valid email").isEmail(),
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("password", "Password must conatin at least 5 character").isLength({
      min: 5,
    }),
    body("phone", "Enter a valid phone number"),
    body("regID", "Enter a valid aadhar number")
  ],
  async (req, res) => {
    //if there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //check whether th user with these email exists already
    try {
      let hosUser = await HosUser.findOne({ email: req.body.email });
      if (hosUser) {
        return res
          .status(400)
          .json({ error: "Sorry a user with these email already exists! " });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      //creating a new user
      hosUser = await HosUser.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
        phone: req.body.phone,
        regID: req.body.regID
      });
      const data = {
        hosUser: {
          id: hosUser.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);

      // res.json(user);
      res.json({ authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal error occured!");
    }
  }
);

//Route2: Authenticate a user using: POST "/api/auth/login". No login required
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    //If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    let success = true;
    try {
      let hosUser = await HosUser.findOne({ email });
      if (!hosUser) {
        // success = false;
        return res.status(400).json({ success ,error: "Wrong Credentials!" });
      }
      const passwordCompare = await bcrypt.compare(password, hosUser.password);
      if (!passwordCompare) {
        // success = false;
        return res.status(400).json({ success ,error: "Wrong Credentials!" });
      }
      const payload = {
        hosUser: {
          id: hosUser.id,
        },
      };
      const authToken = jwt.sign(payload, JWT_SECRET);
      res.json({authToken})
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error!");
    }
  }
);

//Route3: Get logged in User Details using: POST: api/auth/getuser. Login required
router.get(
    "/getuser", fetchhospital, async (req, res) => {
      try { 
        const hosUserID = req.hosUser.id
        console.log(hosUserID);
        const hosUser = await HosUser.findById(hosUserID).select("-password");
        console.log(hosUser);
        res.send(hosUser)
      } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server Error");
      }
    }
  );
module.exports = router;