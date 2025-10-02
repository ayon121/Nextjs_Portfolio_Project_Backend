export interface IProject {
  _id?: string;          
  title: string;         
  description: string;    
  features: string[];     
  thumbnail: string;     
  liveUrl?: string;      
  repoUrl?: string;      
  createdAt?: string;     
  updatedAt?: string;     
}