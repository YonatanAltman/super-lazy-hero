import {jsPDF} from "jspdf";
import {OurClient, ourClients} from "./clients.interface";


const onClick = (event: Event) => {
    const doc = new jsPDF();
    ourClients.forEach((client: OurClient, index: number) => {
        doc.text(`${client.name} (${client.rate}): ${client.message}`, 10, 30 + (20 * index));
    })
    doc.save("a4.pdf");
}


document.getElementById('clients-btn').addEventListener('click', onClick);

