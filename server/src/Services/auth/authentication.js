import { setToken } from '../../Middleware/auth.js';
import firebaseAdmin from '../../Config/firebase.js';
import {
  saveUsertoDB,
  getUser,
  updateUsernameModel,
  updateEmailModel
} from '../../Model/sql/auth/authentication.js';

export const SignUp = async (req, res) => {
  let token = req.body.token;
  let username = req.body.username;
  let email = req.body.email;

  //First Check if User exists
  let userExists = await getUser(email);

  //If user exists send error message, otherwise continue code
  if (userExists) {
    res.status(400).send({ type: 'Failed Sign Up', message: 'User Already Exists' });
    return;
  }

  //decode the firebase token recieved from frontend and save firebase uuid
  let decodedToken = await firebaseAdmin.auth().verifyIdToken(token);
  let firebaseId = decodedToken.user_id;

  //save user firebase info to our own db, and get unique user database id
  let result = await saveUsertoDB(email, username, firebaseId);
  let user_id = result.id;

  res.send({ token: setToken(user_id) });
};

export const Login = async (req, res) => {
  let token = req.body.token;
  let email = req.body.email;

  //decode the firebase token recieved from frontend
  let decodedToken = await firebaseAdmin.auth().verifyIdToken(token);
  let firebaseId = decodedToken.user_id;

  //Check if User exists
  let user = await getUser(email);

  //If user not found send error message
  if (!user) {
    //delete user from firebase
    await firebaseAdmin.auth().deleteUser(firebaseId);
    res.status(400).send({ type: 'Failed Login', message: 'User Does Not Exists' });
    return;
  }

  let user_id = user.id;

  res.send({ token: setToken(user_id) });
};

export const updateUsername = async (req, res) => {
  let id = req.body.id;
  let username = req.body.username;
  let email = req.body.curEmail;

  let user = await getUser(email);
  let uid = user.firebase_user_id;

  await firebaseAdmin.auth().updateUser(uid, {
    displayName: username
  });

  await updateUsernameModel(username, id);

  res.status(200).send('Update Successful');
};

export const updateEmail = async (req, res) => {
  let id = req.body.id;
  let email = req.body.email;
  let oldEmail = req.body.oldEmail;

  let user = await getUser(oldEmail);
  let uid = user.firebase_user_id;

  await firebaseAdmin.auth().updateUser(uid, {
    email
  });

  await updateEmailModel(email, id);

  res.status(200).send('Update Successful');
};
