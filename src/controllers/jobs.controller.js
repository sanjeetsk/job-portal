import JobModel from "../models/job.model.js";

export default class JobController {

    getAll(req, res) {
        const allJobs = JobModel.getAll();
        res.render('jobs', { jobs: allJobs });
    }

    getAddJob(req, res){
        return res.render("newjob", {errorMessage:null, userEmail:req.session.userEmail});
    }

    getJobById(req, res) {
        const jobId = req.params.id;
        const job = JobModel.getJobById(jobId);
        if (job) {
            res.render('jobs', { job });
        } else {
            res.redirect('/404');
        }
    }

    postJob(req, res){
        JobModel.addJob(req.body);
        const allJobs = JobModel.getAll();
        res.render('jobs', { jobs: allJobs });
    }

    updateJob(req, res){

    }

    deleteJob(req, res){

    }

}