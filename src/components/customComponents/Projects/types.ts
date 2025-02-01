export interface Project {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className: string;
    priority: boolean;
  };
  sections: {
    heading: string;
    content: string;
  }[];
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