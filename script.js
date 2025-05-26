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

const btndots = document.querySelectorAll(".dot");
const crewSections = document.querySelectorAll("crew-section ");


btndots.forEach(dot => {
  dot.addEventListener("click", () => {
    btndots.forEach(b => b.classList.remove("active"));
    crewSections.forEach(c => c.classList.remove("active"));


    dot.classList.add("active");
    const targetcrew = document.getAttribute("aria-label");
    document.getElementById(targetcrew).classList.add("active");
  })
})




   