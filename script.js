const tabs = document.querySelectorAll(".tab");
const sections = document.querySelectorAll(".destination-section");

tabs.forEach(tab => {
  tab.addEventListener("click", () =>{

  tabs.forEach(t => t.classList.remove("active"));
    sections.forEach(s => s.classList.remove("active"));

    tab.classList.add("active");
    const targetid = tab.getAttribute("data-target");
    document.getElementById(targetid).classList.add("active")

  });
});

document.addEventListener('DOMContentLoaded', () => {
  const dots = document.querySelectorAll('.dot');
  const sections = document.querySelectorAll('.crew-section');

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      // Remove 'active' class from all dots and sections
      dots.forEach(dot => dot.classList.remove('active'));
      sections.forEach(section => section.classList.remove('active'));

      // Add 'active' to the clicked dot and the corresponding section
      dot.classList.add('active');
      sections[index].classList.add('active');
    });
  });
});


// title: "launch vehicle ",
const techdata = [ {
  title: "Launch vehicle",

  description: `
  A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a  <br>
  payload from Earth's surface to space, usually to Earth orbit or beyond. Our  <br>
  WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall,  <br>
  it's quite an awe-inspiring sight on the launch pad!`,

  image: "./starter-code/assets/technology/image-launch-vehicle-portrait.jpg"
},

{
  title: "Spaceport",

  description: ` A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, <br>
  by analogy to the seaport for ships or airport for aircraft. Based in the <br>
  famous Cape Canaveral, our spaceport is ideally situated to take advantage <br>
  of the Earth’s rotation for launch.`
,

  image: "./starter-code/assets/technology/image-spaceport-portrait.jpg"
},

{
  title: "Space capsule",

  description: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry <br> 
  capsule to reenter the Earth's atmosphere without wings. Our capsule is where <br>
  you'll spend your time during the flight. It includes a space gym, cinema, <br>
  and plenty of other activities to keep you entertained.`,

  image: "./starter-code/assets/technology/image-spaceport-portrait.jpg"

},
]


let buttons = document.querySelectorAll(".btntech .circle ");
let title = document.querySelector('.tech-title');
let desc = document.querySelector('.tech-description');
let image = document.getElementById('tech-image');


buttons.forEach(button => {
  button.addEventListener("click", () => {

    // buttons.forEach(btn => btn.classList.remove("active"));
     buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add("active");

    const index = button.getAttribute("data-index");
    const data = techdata[index];


    title.textContent = data.title;
    desc.innerHTML = data.description;
     image.setAttribute("src", data.image);
  })
})



