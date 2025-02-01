export interface Section {
  heading: string;
  content: string;
}

export interface Project {
  title: string;
  description: string;
  sections: Section[];
}

export interface ImageData {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
  priority: boolean;
}

export interface ButtonData {
  text: string;
  className: string;
}

export interface AdditionalSection {
  title: string;
  content: string[];
}

export interface Data {
  image: ImageData;
  projects: Project[];
  button: ButtonData;
  additionalSections: AdditionalSection[];
}