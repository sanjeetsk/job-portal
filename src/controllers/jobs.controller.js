import JobModel from "../models/job.model.js";

const jobModel = new JobModel();
export default class JobController {

    static async getAllJobs(req, res) {
        const allJobs = Job.getAllJobs();
        res.render('jobs', { jobs: allJobs });
    }

    static async getJobById(req, res) {
        const jobId = req.params.id;
        const job = jobModel.getJobById(jobId);
        if (job) {
            res.render('jobDetails', { job });
        } else {
            res.redirect('/404');
        }
    }


}