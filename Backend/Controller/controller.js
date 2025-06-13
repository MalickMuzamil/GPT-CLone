import OpenAI from "openai";
import dotenv from 'dotenv';
import NewUser from '../models/userModel.js';
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.GPT_APP_OPENAI_KEY
});

const fetchFunction = async (req, res) => {
  const userMessage = req.body;
  console.log(userMessage);

  if (userMessage === null || userMessage === undefined) {
    console.log("Error: User input is null or undefined");
  }

  else {
    console.log("User Input:", userMessage);
  }

  try {

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: userMessage.query },

      ],
      max_tokens: 100
    });

    res.status(200).send(response.choices[0].message.content);
  }

  catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
}

const acceptData = async (req, res) => {
  console.log(req.body)
  res.status(200).send("Data received successfully");
}


const RegisterUser = async (req, res) => {
  try {
    let Email = req.body.Email;
    let Password = req.body.Password;

    console.log(Email)
    console.log(Password)

    const ExistingUser = await NewUser.findOne({ email: Email })

    if (ExistingUser) {
      res.status(400).send("Email already exist")
    }

    else {
      const newUser = new NewUser({
        email: Email,
        password: Password,
      });

      await newUser.save();
      res.status(200).send("User registered successfully");

    }

  }
  catch (error) {
    console.log("Nahi chala")
  }
}

const LoginUser = async (req, res) => {
  try {
    let Email  = req.body.Email

    const ExistingUser = await NewUser.findOne({ email: Email  })

    if (ExistingUser) {
      res.status(200).send("User exists in the database");
    }
    else {
      res.status(404).send("User not found. Please sign up first.");
    }

  }

  catch (error) {
    console.log("User Not Register")
  }
}

export { fetchFunction, acceptData, RegisterUser, LoginUser };
