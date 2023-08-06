export interface ProjectType {
    title: string;
    description: string;
    tech: string;
    image: string;
    link: string
}

export const projects : Array<ProjectType> = [
    {
        "title": "Online Furniture Shopping App",
        "description": "Online ecommerce store with product addition, buy-sell and record maintenance. Jwt authentication with admin and user access. Api request handling and processing using postgresql query",
        "tech": "NodeJs, ReactJs, PostgreSql, Typescript",
        "image": "/assets/images/furniture2.jpg",
        "link": "https://github.com/phet2309/Furniture-Shopping-App"
    },
    {
        "title": "File Type Identification - Java Multithreading",
        "description": "This project scans large chunks of files and classifies them into groups, solely based on extension and name, with the help of Java threadpool. JSON file preparation from various websites through web-scraping, and utilizing these JSONs for classification.",
        "tech": "Java, Multithreading, Web-Scraping",
        "image": "/assets/images/project2.png",
        "link": "https://github.com/phet2309/Filetype-Identification"
    },
    {
        "title": "Handwritten answersheet detection and evaluation",
        "description": "Detecting answer sheets of students with camera calibration and using trained tesseract-ocr models to recognize handwritten characters. Automatic evaluation and automatic marks update of students.",
        "tech": " python, Image processing, openCV, tesseract-OCR, JtessBoxEditor",
        "image": "/assets/images/project3.png",
        "link": "https://github.com/phet2309/Handwritten-answersheet-detection-and-evaluation"
    },
    {
        "title": "Federated Learning and Split Learning",
        "description": "Implementation of privacy preserving Federated Learning and Split Learning, and their result comparison. Data Engineering, SMOTE application, used for credit card fraud detection",
        "tech": " PyTorch, ML, python, numpy, scikit, pandas",
        "image": "/assets/images/project4.png",
        "link": "https://github.com/phet2309/Federated_Learning-and-Split-Learning"
    },
];
