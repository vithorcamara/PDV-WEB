/*
window.alert("Primeira msg!!")
var n1 = Number(window.prompt("Qual foi?"))
var n2 = Number(window.prompt("Qual foi 2?"))
var s = n1 + n2
window.alert(`A soma entre ${n1} e ${n2} é ${s}`)

var d = document.querySelector("div.logo")
var i = document.querySelector("img.logo")
d.addEventListener("mousemove", div_ent)
d.addEventListener("mouseout", div_out)
d.style.background = "rgb(70, 70, 128)"
function div_ent(){
    i.setAttribute("src", "ROG_LOGO2.png")
    d.style.background = "black"
}
function div_out(){
    i.setAttribute("src", "ROG_LOGO.png")
    d.style.background = "rgb(70, 70, 128)"
<<<<<<< HEAD
} 
*/

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
          link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${
                index / 7 + 0.3
              }s`);
        });
      }
    
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    "#resp-nav-menu",
    ".nav-menu",
    ".dropdown",
  );
  mobileNavbar.init();

/*MENU INFERIOR*/
var img_opt = document.getElementById("img_opt")
var tit_opt = document.getElementById("terceira")
var txt_opt1 = document.getElementById("txt_opt1")
var txt_opt2 = document.getElementById("txt_opt2")
var txt_opt3 = document.getElementById("txt_opt3")
function opt_1(){
    img_opt.src = "assets/Third_Info.jpg"
    tit_opt.innerHTML = "FOBFB"
    txt_opt1.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet metus ornare, efficitur eros vel, mattis lorem. Nulla in tincidunt mauris, eget fermentum nulla. Sed malesuada quam blandit augue consequat, vel feugiat sapien laoreet. Morbi vestibulum a tellus ut aliquet. Mauris ut fringilla libero, a viverra urna. Pellentesque tempor fringilla nisi, vel pretium urna vehicula in. Sed sagittis eget tortor ut feugiat.Vivamus vel urna ut metus tincidunt ullamcorper non ut felis. Cras non nisl in velit elementum dignissim. In at tellus id felis consequat placerat a sed ligula. Donec non sagittis tortor, sed imperdiet mi."
    txt_opt2.innerHTML = "Cras quis risus elit. Curabitur et justo id sapien pellentesque imperdiet a in est. Sed non magna vitae arcu aliquam lobortis nec vitae lorem. Suspendisse lacinia turpis vitae eros ultricies, in gravida ante ornare. Donec lobortis arcu nec venenatis luctus. Sed varius maximus tellus. Quisque ac posuere sapien. Suspendisse potenti. Sed semper libero vel diam vestibulum sollicitudin. Donec sagittis magna ac mi pulvinar euismod. Nunc vitae accumsan mi. Nam mattis, magna ac lacinia feugiat, leo urna sagittis sapien, vel pellentesque lectus est eu erat."
    txt_opt3.innerHTML = "In iaculis, ante id eleifend laoreet, lacus lacus eleifend quam, sit amet euismod ex nunc sit amet erat. In volutpat ultricies mi, vel vestibulum nunc dignissim rutrum. Curabitur eleifend pellentesque fringilla. Sed augue neque, vehicula vitae eleifend sed, rhoncus id ante. Curabitur at venenatis orci. Mauris ac condimentum leo. Donec vulputate, nisi a elementum ullamcorper, ex neque rutrum metus, at blandit eros felis condimentum urna. Morbi at ultricies sapien, eget iaculis turpis. Aliquam maximus arcu eu sem porta varius. Vestibulum id arcu quis orci aliquet fringilla quis quis elit. In a libero consequat, tempus mi sit amet, lobortis nisi. Aliquam quam lacus, iaculis at ligula et, lobortis finibus metus. Phasellus at semper libero."
}
function opt_2(){
    img_opt.src = "assets/FACTORY_LOGO.jpg"
    tit_opt.innerHTML = "Factory Students"
    txt_opt1.innerHTML = "In iaculis, ante id eleifend laoreet, lacus lacus eleifend quam, sit amet euismod ex nunc sit amet erat. In volutpat ultricies mi, vel vestibulum nunc dignissim rutrum. Curabitur eleifend pellentesque fringilla. Sed augue neque, vehicula vitae eleifend sed, rhoncus id ante. Curabitur at venenatis orci. Mauris ac condimentum leo. Donec vulputate, nisi a elementum ullamcorper, ex neque rutrum metus, at blandit eros felis condimentum urna. Morbi at ultricies sapien, eget iaculis turpis. Aliquam maximus arcu eu sem porta varius. Vestibulum id arcu quis orci aliquet fringilla quis quis elit. In a libero consequat, tempus mi sit amet, lobortis nisi. Aliquam quam lacus, iaculis at ligula et, lobortis finibus metus. Phasellus at semper libero."
    txt_opt2.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet metus ornare, efficitur eros vel, mattis lorem. Nulla in tincidunt mauris, eget fermentum nulla. Sed malesuada quam blandit augue consequat, vel feugiat sapien laoreet. Morbi vestibulum a tellus ut aliquet. Mauris ut fringilla libero, a viverra urna. Pellentesque tempor fringilla nisi, vel pretium urna vehicula in. Sed sagittis eget tortor ut feugiat.Vivamus vel urna ut metus tincidunt ullamcorper non ut felis. Cras non nisl in velit elementum dignissim. In at tellus id felis consequat placerat a sed ligula. Donec non sagittis tortor, sed imperdiet mi."
    txt_opt3.innerHTML = "Cras quis risus elit. Curabitur et justo id sapien pellentesque imperdiet a in est. Sed non magna vitae arcu aliquam lobortis nec vitae lorem. Suspendisse lacinia turpis vitae eros ultricies, in gravida ante ornare. Donec lobortis arcu nec venenatis luctus. Sed varius maximus tellus. Quisque ac posuere sapien. Suspendisse potenti. Sed semper libero vel diam vestibulum sollicitudin. Donec sagittis magna ac mi pulvinar euismod. Nunc vitae accumsan mi. Nam mattis, magna ac lacinia feugiat, leo urna sagittis sapien, vel pellentesque lectus est eu erat."
}
function opt_3(){
    img_opt.src = "assets/MIDDLEGROUP_LOGO.jpg"
    tit_opt.innerHTML = "Middle Group LTDA"
    txt_opt1.innerHTML = "Cras quis risus elit. Curabitur et justo id sapien pellentesque imperdiet a in est. Sed non magna vitae arcu aliquam lobortis nec vitae lorem. Suspendisse lacinia turpis vitae eros ultricies, in gravida ante ornare. Donec lobortis arcu nec venenatis luctus. Sed varius maximus tellus. Quisque ac posuere sapien. Suspendisse potenti. Sed semper libero vel diam vestibulum sollicitudin. Donec sagittis magna ac mi pulvinar euismod. Nunc vitae accumsan mi. Nam mattis, magna ac lacinia feugiat, leo urna sagittis sapien, vel pellentesque lectus est eu erat."
    txt_opt2.innerHTML = "In iaculis, ante id eleifend laoreet, lacus lacus eleifend quam, sit amet euismod ex nunc sit amet erat. In volutpat ultricies mi, vel vestibulum nunc dignissim rutrum. Curabitur eleifend pellentesque fringilla. Sed augue neque, vehicula vitae eleifend sed, rhoncus id ante. Curabitur at venenatis orci. Mauris ac condimentum leo. Donec vulputate, nisi a elementum ullamcorper, ex neque rutrum metus, at blandit eros felis condimentum urna. Morbi at ultricies sapien, eget iaculis turpis. Aliquam maximus arcu eu sem porta varius. Vestibulum id arcu quis orci aliquet fringilla quis quis elit. In a libero consequat, tempus mi sit amet, lobortis nisi. Aliquam quam lacus, iaculis at ligula et, lobortis finibus metus. Phasellus at semper libero."
    txt_opt3.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet metus ornare, efficitur eros vel, mattis lorem. Nulla in tincidunt mauris, eget fermentum nulla. Sed malesuada quam blandit augue consequat, vel feugiat sapien laoreet. Morbi vestibulum a tellus ut aliquet. Mauris ut fringilla libero, a viverra urna. Pellentesque tempor fringilla nisi, vel pretium urna vehicula in. Sed sagittis eget tortor ut feugiat.Vivamus vel urna ut metus tincidunt ullamcorper non ut felis. Cras non nisl in velit elementum dignissim. In at tellus id felis consequat placerat a sed ligula. Donec non sagittis tortor, sed imperdiet mi."
}
function opt_4(){
    img_opt.src = "assets/SOFTEX_LOGO.png"
    tit_opt.innerHTML = "Softex Recife"
    txt_opt1.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet metus ornare, efficitur eros vel, mattis lorem. Nulla in tincidunt mauris, eget fermentum nulla. Sed malesuada quam blandit augue consequat, vel feugiat sapien laoreet. Morbi vestibulum a tellus ut aliquet. Mauris ut fringilla libero, a viverra urna. Pellentesque tempor fringilla nisi, vel pretium urna vehicula in. Sed sagittis eget tortor ut feugiat.Vivamus vel urna ut metus tincidunt ullamcorper non ut felis. Cras non nisl in velit elementum dignissim. In at tellus id felis consequat placerat a sed ligula. Donec non sagittis tortor, sed imperdiet mi."
    txt_opt2.innerHTML = "Cras quis risus elit. Curabitur et justo id sapien pellentesque imperdiet a in est. Sed non magna vitae arcu aliquam lobortis nec vitae lorem. Suspendisse lacinia turpis vitae eros ultricies, in gravida ante ornare. Donec lobortis arcu nec venenatis luctus. Sed varius maximus tellus. Quisque ac posuere sapien. Suspendisse potenti. Sed semper libero vel diam vestibulum sollicitudin. Donec sagittis magna ac mi pulvinar euismod. Nunc vitae accumsan mi. Nam mattis, magna ac lacinia feugiat, leo urna sagittis sapien, vel pellentesque lectus est eu erat."
    txt_opt3.innerHTML = "In iaculis, ante id eleifend laoreet, lacus lacus eleifend quam, sit amet euismod ex nunc sit amet erat. In volutpat ultricies mi, vel vestibulum nunc dignissim rutrum. Curabitur eleifend pellentesque fringilla. Sed augue neque, vehicula vitae eleifend sed, rhoncus id ante. Curabitur at venenatis orci. Mauris ac condimentum leo. Donec vulputate, nisi a elementum ullamcorper, ex neque rutrum metus, at blandit eros felis condimentum urna. Morbi at ultricies sapien, eget iaculis turpis. Aliquam maximus arcu eu sem porta varius. Vestibulum id arcu quis orci aliquet fringilla quis quis elit. In a libero consequat, tempus mi sit amet, lobortis nisi. Aliquam quam lacus, iaculis at ligula et, lobortis finibus metus. Phasellus at semper libero."
}
function opt_5(){
    img_opt.src = "assets/BULLSHQ_LOGO.png"
    tit_opt.innerHTML = "Bulls HQ"
    txt_opt1.innerHTML = "In iaculis, ante id eleifend laoreet, lacus lacus eleifend quam, sit amet euismod ex nunc sit amet erat. In volutpat ultricies mi, vel vestibulum nunc dignissim rutrum. Curabitur eleifend pellentesque fringilla. Sed augue neque, vehicula vitae eleifend sed, rhoncus id ante. Curabitur at venenatis orci. Mauris ac condimentum leo. Donec vulputate, nisi a elementum ullamcorper, ex neque rutrum metus, at blandit eros felis condimentum urna. Morbi at ultricies sapien, eget iaculis turpis. Aliquam maximus arcu eu sem porta varius. Vestibulum id arcu quis orci aliquet fringilla quis quis elit. In a libero consequat, tempus mi sit amet, lobortis nisi. Aliquam quam lacus, iaculis at ligula et, lobortis finibus metus. Phasellus at semper libero."
    txt_opt2.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet metus ornare, efficitur eros vel, mattis lorem. Nulla in tincidunt mauris, eget fermentum nulla. Sed malesuada quam blandit augue consequat, vel feugiat sapien laoreet. Morbi vestibulum a tellus ut aliquet. Mauris ut fringilla libero, a viverra urna. Pellentesque tempor fringilla nisi, vel pretium urna vehicula in. Sed sagittis eget tortor ut feugiat.Vivamus vel urna ut metus tincidunt ullamcorper non ut felis. Cras non nisl in velit elementum dignissim. In at tellus id felis consequat placerat a sed ligula. Donec non sagittis tortor, sed imperdiet mi."
    txt_opt3.innerHTML = "Cras quis risus elit. Curabitur et justo id sapien pellentesque imperdiet a in est. Sed non magna vitae arcu aliquam lobortis nec vitae lorem. Suspendisse lacinia turpis vitae eros ultricies, in gravida ante ornare. Donec lobortis arcu nec venenatis luctus. Sed varius maximus tellus. Quisque ac posuere sapien. Suspendisse potenti. Sed semper libero vel diam vestibulum sollicitudin. Donec sagittis magna ac mi pulvinar euismod. Nunc vitae accumsan mi. Nam mattis, magna ac lacinia feugiat, leo urna sagittis sapien, vel pellentesque lectus est eu erat."
}
function opt_6(){
    img_opt.src = "assets/PARTNERS_LOGO.png"
    tit_opt.innerHTML = "Partners"
    txt_opt1.innerHTML = "Cras quis risus elit. Curabitur et justo id sapien pellentesque imperdiet a in est. Sed non magna vitae arcu aliquam lobortis nec vitae lorem. Suspendisse lacinia turpis vitae eros ultricies, in gravida ante ornare. Donec lobortis arcu nec venenatis luctus. Sed varius maximus tellus. Quisque ac posuere sapien. Suspendisse potenti. Sed semper libero vel diam vestibulum sollicitudin. Donec sagittis magna ac mi pulvinar euismod. Nunc vitae accumsan mi. Nam mattis, magna ac lacinia feugiat, leo urna sagittis sapien, vel pellentesque lectus est eu erat."
    txt_opt2.innerHTML = "In iaculis, ante id eleifend laoreet, lacus lacus eleifend quam, sit amet euismod ex nunc sit amet erat. In volutpat ultricies mi, vel vestibulum nunc dignissim rutrum. Curabitur eleifend pellentesque fringilla. Sed augue neque, vehicula vitae eleifend sed, rhoncus id ante. Curabitur at venenatis orci. Mauris ac condimentum leo. Donec vulputate, nisi a elementum ullamcorper, ex neque rutrum metus, at blandit eros felis condimentum urna. Morbi at ultricies sapien, eget iaculis turpis. Aliquam maximus arcu eu sem porta varius. Vestibulum id arcu quis orci aliquet fringilla quis quis elit. In a libero consequat, tempus mi sit amet, lobortis nisi. Aliquam quam lacus, iaculis at ligula et, lobortis finibus metus. Phasellus at semper libero."
    txt_opt3.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet metus ornare, efficitur eros vel, mattis lorem. Nulla in tincidunt mauris, eget fermentum nulla. Sed malesuada quam blandit augue consequat, vel feugiat sapien laoreet. Morbi vestibulum a tellus ut aliquet. Mauris ut fringilla libero, a viverra urna. Pellentesque tempor fringilla nisi, vel pretium urna vehicula in. Sed sagittis eget tortor ut feugiat.Vivamus vel urna ut metus tincidunt ullamcorper non ut felis. Cras non nisl in velit elementum dignissim. In at tellus id felis consequat placerat a sed ligula. Donec non sagittis tortor, sed imperdiet mi."
}
