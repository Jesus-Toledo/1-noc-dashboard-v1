let servers = [
    {
        id: 1,
        name: "Server-A",
        status: "Online",
        cpu: 25,
        vendor: "Huawei",
        city: "Guadalajara"
    },
    {
        id: 2,
        name: "Server-B",
        status: "Offline",
        cpu: 80,
        vendor: "Nokia",
        city: "Monterrey"
    },
    {
        id: 3,
        name: "Server-C",
        status: "Online",
        cpu: 90,
        vendor: "Huawei",
        city: "CDMX"
    },
    {
        id: 4,
        name: "Server-D",
        status: "Offline",
        cpu: 40,
        vendor: "ZTE",
        city: "Guadalajara"
    },
    {
        id: 5,
        name: "Server-E",
        status: "Online",
        cpu: 60,
        vendor: "Nokia",
        city: "Puebla"
    },
    {
        id: 6,
        name: "Server-F",
        status: "Online",
        cpu: 15,
        vendor: "Huawei",
        city: "Monterrey"
    },
    {
        id: 7,
        name: "Server-G",
        status: "Offline",
        cpu: 95,
        vendor: "Cisco",
        city: "Querétaro"
    },
    {
        id: 8,
        name: "Server-H",
        status: "Online",
        cpu: 75,
        vendor: "Cisco",
        city: "CDMX"
    }
];


//ticket 421

let button = document.getElementById("showOffline");

button.addEventListener("click", () => {
    let html = servers 
        .filter(server => server.status === "Offline")
        .map(server => `<div>${server.id} - ${server.name} - ${server.status} - ${server.cpu} - ${server.vendor} - ${server.city}</div>`)
        .join("");

       document.getElementById("servers").innerHTML = html; 
});