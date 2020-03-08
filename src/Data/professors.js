import kdsir from '../Assets/KD_sir.jpg';


import {
    mdiEmail
} from "@mdi/js";


let professors = [{
    name: "Dr. Kousik Dasgupta",
    picture: kdsir,
    links: [
        {
            to: 'email',
            icon: mdiEmail,
            link: "mailto:kousik.dasgupta@kgec.edu.in"
        }
    ]
}


];

export default professors;

