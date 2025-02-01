export interface ImageData {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
  priority: boolean;
}

export interface Section {
  heading: string;
  content: string;
}

export interface Project {
  title: string;
  description: string;
  image: ImageData;  // Added image to each project
  sections: Section[];
}

export interface Data {
  projects: Project[];
  button: {
    text: string;
    className: string;
  };
  additionalSections: {
    title: string;
    content: string[];
  }[];
}