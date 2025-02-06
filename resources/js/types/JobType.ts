export interface JobType {
    id: number;
    user_id: number;
    title: string;
    description: string;
    salary: number;
    tags?: string;
    job_type:
        | "Full-Time"
        | "Part-Time"
        | "Contract"
        | "Temporary"
        | "Internship"
        | "Volunteer"
        | "On-Call";
    remote: boolean;
    requirements?: string;
    benefits?: string;
    address?: string;
    city: string;
    state: string;
    zipcode?: string;
    contact_email: string;
    contact_phone?: string;
    company_name: string;
    company_description?: string;
    company_logo?: string;
    company_website?: string;
    created_at: Date;
    updated_at: Date;
}
