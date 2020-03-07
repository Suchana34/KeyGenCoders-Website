
import ayushman from '../Assets/Ayushman_Bilas_Thakur.jpeg';

import {
    mdiTwitter,
    mdiLinkedin,
    mdiWeb,
    mdiGithubCircle,
    mdiEmail
} from "@mdi/js";


let previous_team_members = [{
    name: "Ayushman Bilas Thakur",
    picture: ayushman,
    links: [
        {
            to: 'linkedin',
            icon: mdiLinkedin,
            link: "https://www.linkedin.com/in/ayushman-bilas-thakur-13162a16b/"
        },
        {
            to: 'github',
            icon: mdiGithubCircle,
            link: 'https://github.com/AyushmanBilasThakur'
        },
        {
            to: 'website',
            icon: mdiWeb,
            link: 'https://www.ayushmanbthakur.com/'
        },
        {
            to: 'email',
            icon: mdiEmail,
            link: "mailto:ayushmanbilasthakur@gmail.com"
        }
    ]
}
];
    
export default previous_team_members;

