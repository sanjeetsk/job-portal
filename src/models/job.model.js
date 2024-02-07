

export default class JobModel{
    constructor(
        _id, 
        jobcategory,
        jobdesignation,
        joblocation,
        companyname,
        salary,
        applyby,
        skillsrequired,
        numberofopenings,
        jobposted,
        applicants
        ){
            this._id = _id
            this.jobcategory= jobcategory
            this.jobdesignation = jobdesignation
            this.joblocation = joblocation
            this.companyname = companyname
            this.salary = salary
            this.applyby = applyby
            this.skillsrequired = skillsrequired
            this.numberofopenings = numberofopenings
            this.jobposted = jobposted
            this.applicants = applicants
        }

        static getAll(){
            return jobs;
        }

        static add(_id, jobcategory, jobdesignation, joblocation, companyname, salary, applyby, skillsrequired, numberofopenings, jobposted, applicants){
            let newJob = new JobModel(
                jobs.length+1,
                jobcategory,
                jobdesignation,
                joblocation,
                companyname,
                salary,
                applyby,
                skillsrequired,
                numberofopenings,
                jobposted,
                applicants
            )
            jobs.push(newJob)
        }
}

const jobs = [
    new JobModel(
        1,
        tech,
        "Software Developer",
        "New York City",
        "ABC Company",
        "20 LPA",
        "30th June 2024",
        ["HTML","CSS","JavaScript","React","Node"],
        5,
        "5th Feb 2024",
        0
    ),
    new JobModel(
        2,
        non-tech,
        "Manager",
        "New York City",
        "XYZ Company",
        "10 LPA",
        "10th June 2024",
        ["Finance", "Data Analyst"],
        5,
        "1th Feb 2024",
        0
    )
]
