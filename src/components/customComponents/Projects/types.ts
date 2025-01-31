export interface ImageData {
    src: string;
    alt: string;
    width: number;
    height: number;
    priority: boolean;
  }
  
  export interface Section {
    heading: string;
    content: string;
  }
  
  export interface Project {
    title: string;
    description: string;
    image: ImageData; // Add this field
    sections: Section[];
  }
  
  export interface AdditionalSection {
    title: string;
    content: string[];
  }
  
  export interface ButtonData {
    text: string;
  }
  
  export interface ProjectsData {
    projects: Project[];
    button: ButtonData;
    additionalSections: AdditionalSection[];
  }