import {OurClient, ourClients} from "./clients.interface";
import {getPdfLib} from "./import.pdf";


const onClick = (event: Event) => {

    getPdfLib().then(jspdf => {
        const doc = new jspdf.jsPDF();
        ourClients.forEach((client: OurClient, index: number) => {
            doc.text(`${client.name} (${client.rate}): ${client.message}`, 10, 30 + (20 * index));
        })
        doc.save("a4.pdf");
    })
}


document.getElementById('clients-btn').addEventListener('click', onClick);

