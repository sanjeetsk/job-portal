import express from 'express';
import path from 'path';
import ejsLayouts from 'express-ejs-layouts';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import { setLastVisit } from './src/middlewares/last-visit.middleware.js';

import UserController from './src/controllers/user.controller.js';
import JobController from './src/controllers/jobs.controller.js';

const server = express();

//parse form data
server.use(express.urlencoded({ extended: true }));

server.use(cookieParser());
// server.use(setLastVisit);          //it will set cookie for every request

server.use(session({
    secret: 'SecretKey',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
}));

// setup view engine setting
server.set('view engine', 'ejs');
server.set('views', path.join(path.resolve(), 'src', 'views'));

server.use(ejsLayouts);

//create an instance of ProductController
// const productController = new ProductController();
const userController = new UserController();

const jobController = new JobController();

server.get('/', (req, res) => {
    res.render('landingPage');
})
server.get('/register', userController.getRegister);
server.get('/login', userController.getLogin);
server.post('/register', userController.postRegister);
server.post('/login', userController.postLogin);

server.get('/logout', userController.logout);

server.get('/jobs', jobController.getAll);
server.post('/jobs', jobController.postJob);
server.get('/jobs/:id', jobController.getJobById);
server.put('/jobs/:id', jobController.updateJob);
server.delete('/jobs/:id', jobController.deleteJob);

// server.get('/jobs/:id/applicants', jobController.getApplicantsByJobId);
// server.post('/jobs/:id/applicants', jobController.addApplicant);
// server.get('/jobs/:id/applicants/:applicantId', jobController.getApplicantByJobAndUserId);
// server.put('/jobs/:id/applicants/:applicantId', jobController.updateApplicantByJobAndUserId);
// server.delete('/jobs/:id/applicants/:applicantId', jobController.removeApplicantByJobAndUserId);

// server.get('/jobs/:id/update', jobController.showUpdateForm);
// server.post('/jobs/:id/update', jobController.processUpdateForm);

// server.get('/jobs/:id/delete', jobController.deleteJobById);
// server.post('/apply/:id', jobController.applyToJob);

server.use(express.static('./src/views'))
server.use(express.static('public'));

server.listen(3100,()=>{
    console.log("Server is running on port 3100");
});