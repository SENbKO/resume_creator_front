import { ModelExperience } from "./experience";
import { PersonalInfo } from "./personal-info";

export interface Resume{
    id : string;
    personalInfo : PersonalInfo,
    experiences : ModelExperience[]
}