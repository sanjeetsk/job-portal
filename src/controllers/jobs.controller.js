import JobModel from "../models/job.model.js";

export default class JobController {

    static async getAll(req, res) {
        const allJobs = JobModel.getAll();
        res.render('jobs', { jobs: allJobs });
    }

    static async getJobById(req, res) {
        const jobId = req.params.id;
        const job = JobModel.getJobById(jobId);
        if (job) {
            res.render('jobs', { job });
        } else {
            res.redirect('/404');
        }
    }

    static async postJob(req, res){
        JobModel.addJob(req.body);
        res.status(201).send("Job added successfully");
    }

    static async updateJob(req, res){

    }

    static async deleteJob(req, res){

    }

}