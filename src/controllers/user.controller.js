// import ProductModel from "../models/productModel.js";
import UserModal from "../models/user.model.js";
import JobModel from "../models/job.model.js";

export default class UserController{
    getRegister(req, res){
        res.render('register');
    }

    getLogin(req, res){
        res.render('login', {errorMessage:null})
    }

    postRegister(req, res){
        const {name, email, password} = req.body;
        UserModal.add(name, email, password);
        res.render('login', {errorMessage:null} )
    }

    postLogin(req, res){
        const {email, password} = req.body;
        const user = UserModal.isValidUser(email, password);
        if(!user){
            return res.render('login',{
                errorMessage: 'Invalid Credentials'
            })
        }
        req.session.userEmail = email;
        console.log(req.session.userEmail);
        const jobs = JobModel.getAll();
        return res.render('jobs', { jobs, userEmail:req.session.userEmail})
    }

    logout(req, res) {
        req.session.destroy((err) => {
            if (err) {
                console.log("Error : ", err);
            }
            else{
                res.redirect('/login');
            }
        })
        res.clearCookie('lastVisit');
    }
}