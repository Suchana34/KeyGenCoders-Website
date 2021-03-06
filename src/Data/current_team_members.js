import ayushman from '../Assets/Ayushman_Bilas_Thakur.jpeg';
import suchana from '../Assets/Suchana_Chakrabarti.jpg';
import ankit from '../Assets/Ankit_Kurmi.jpeg';
import ritankar from '../Assets/Ritankar_Paul.jpeg';
import abhinab from '../Assets/Abhinav_Ghosh.jpeg';
import sayanti from '../Assets/sayanti.jpeg';
import saranya from '../Assets/saranya.jpeg';
import krishna from  '../Assets/krishna_bose.jpg';
import mayukh from '../Assets/mayukh_Sengupta.jpg';
import sujan from '../Assets/sujan_dutta.jpg';

import {
    mdiLinkedin,
    mdiGithubCircle,
    mdiEmail
} from "@mdi/js";


let current_team_members = [
    {
        name: "Krishna Bose",
        picture: krishna,
        links: [{
                to: 'linkedin',
                icon: mdiLinkedin,
                link: "https://www.linkedin.com/in/krishnabose/"
            },
            {
                to: 'github',
                icon: mdiGithubCircle,
                link: "https://github.com/krishnabose02"
            }
        ]
    },
    
    {
        name: "Mayukh Sengupta",
        picture: mayukh,
        links: [{
                to: 'linkedin',
                icon: mdiLinkedin,
                link: "https://www.linkedin.com/in/mayukh-sengupta-7ba824130/"
            },
            {
                to: 'github',
                icon: mdiGithubCircle,
                link: "https://github.com/mayukh45"
            }
        ]
    },
    {
        name: "Sayanti Bhattacharya",
        picture: sayanti,
        links: [{
                to: 'linkedin',
                icon: mdiLinkedin,
                link: "https://www.linkedin.com/in/suchana-chakrabarti-770b5616b/"
            },
            {
                to: 'github',
                icon: mdiGithubCircle,
                link: 'https://github.com/Suchana34'
            },
            {
                to: 'email',
                icon: mdiEmail,
                link: "mailto:suchanachakraborty@gmail.com"
            }
        ]
    },
    {
        name: "Ritankar Paul",
        picture: ritankar,
        links: [{
                to: 'linkedin',
                icon: mdiLinkedin,
                link: "https://www.linkedin.com/in/ritankar-paul-95269513a/"
            },
            {
                to: 'github',
                icon: mdiGithubCircle,
                link: "https://github.com/xritzx"
            },
            {
                to: 'mail',
                icon: mdiEmail,
                link: "mailto:ritankar.paul@kgec.edu.in"
            },
        ]
    },
    {
        name: "Abhinav Ghosh",
        picture: abhinab,
        links: [{
                to: 'linkedin',
                icon: mdiLinkedin,
                link: "https://www.linkedin.com/in/abhinav-ghosh/"
            },
            {
                to: 'github',
                icon: mdiGithubCircle,
                link: "https://github.com/abhinavgsh"
            }
        ]
    },
    {
        name: "Sujan Dutta",
        picture: sujan,
        links: [{
                to: 'linkedin',
                icon: mdiLinkedin,
                link: "https://www.linkedin.com/in/sujandutta99/"
            },
            {
                to: 'github',
                icon: mdiGithubCircle,
                link: "https://github.com/Suji04"
            },
            {
                to: 'email',
                icon: mdiEmail,
                link: "mailto:sujan99dutta@gmail.com"
                
                
            }
        ]
    },
    
    {
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
            to: 'email',
            icon: mdiEmail,
            link: "mailto:ayushmanbilasthakur@gmail.com"
        }
    ]
},
{
    name: "Suchana Chakrabarti",
    picture: suchana,
    links: [{
            to: 'linkedin',
            icon: mdiLinkedin,
            link: "https://www.linkedin.com/in/suchana-chakrabarti-770b5616b/"
        },
        {
            to: 'github',
            icon: mdiGithubCircle,
            link: 'https://github.com/Suchana34'
        },
        {
            to: 'email',
            icon: mdiEmail,
            link: "mailto:suchanachakraborty@gmail.com"
        }
    ]
},
{
    name: "Ankit Kurmi",
    picture: ankit,
    links: [{
            to: 'linkedin',
            icon: mdiLinkedin,
            link: "https://www.linkedin.com/in/ankitk152"
        },
        {
            to: 'github',
            icon: mdiGithubCircle,
            link: 'https://github.com/Ankit152'
        },
        {
            to: 'email',
            icon: mdiEmail,
            link: "mailto:ankitkurmi152@gmail.com"
        }
    ]
},
{
    name: "Saranya Bhattacharya",
    picture: saranya,
    links: [{
            to: 'linkedin',
            icon: mdiLinkedin,
            link: "https://www.linkedin.com/in/suchana-chakrabarti-770b5616b/"
        },
        {
            to: 'github',
            icon: mdiGithubCircle,
            link: 'https://github.com/Suchana34'
        },
        {
            to: 'email',
            icon: mdiEmail,
            link: "mailto:suchanachakraborty@gmail.com"
        }
    ]
},


];
export default current_team_members;

