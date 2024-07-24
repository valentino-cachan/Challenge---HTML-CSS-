const btns = [
    {
        icon: '💬',
        alt: 'Message',
        link: 'text:5491138212243'
    },
    {
        icon: '📞',
        alt: 'Call',
        link: 'tel:5491138212243'
    },
    {
        icon: '📹',
        alt: 'Video',
        link: 'youtube.com'
    },
    {
        icon: '✉️',
        alt: 'Mail',
        link: 'mailto:cachanvalentino1@gmail.com'
    },
];

const src = "https://openui.fly.dev/openui/24x24.svg?text=";
const image = document.createElement("img");
const row = document.createElement("span");
const myButton = document.createElement("button");

myButton.classList.add('classButton');

const buttons_container = document.getElementById("buttons_container");

btns.forEach(({ icon, alt }) => {

    image.src = `https://openui.fly.dev/openui/24x24.svg?text=${icon}`;
    image.alt = alt;

    row.innerText = alt;

    myButton.appendChild(image);
    myButton.appendChild(row);

    buttons_container.appendChild(myButton.cloneNode(true));
});
