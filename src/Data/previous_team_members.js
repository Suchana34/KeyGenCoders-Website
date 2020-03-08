
import sourabh from '../Assets/sourabh_jha.jpeg';

import {
    mdiLinkedin,
    mdiGithubCircle,
    mdiEmail
} from "@mdi/js";


let previous_team_members = [{
    name: "Sourabh Jha",
    picture: sourabh,
    links: [
        {
            to: 'linkedin',
            icon: mdiLinkedin,
            link: "https://www.linkedin.com/in/sourab-j/"
        },
        {
            to: 'github',
            icon: mdiGithubCircle,
            link: 'https://github.com/hundredrab'
        },
        
        {
            to: 'email',
            icon: mdiEmail,
            link: "mailto:jha.sourab@gmail.com"
        }
    ]
}
];
    
export default previous_team_members;

