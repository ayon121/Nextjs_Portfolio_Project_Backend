export interface IAboutMe {
  _id?: string;       
  name: string;        
  bio: string;         
  email: string;       
  location?: string;   
  lasteducation ?: string
  socialLinks?: {
    github?: string;
    linkedin?: string;
    youtube ?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
    portfolio?: string;  
  };
  createdAt?: Date;
  updatedAt?: Date;
}
