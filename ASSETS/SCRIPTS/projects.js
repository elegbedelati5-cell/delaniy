const BarCont = document.querySelector("#nav-bar");
let template = ``;
menuElementData.forEach((child) => {
  template = ` 
   <div class="grid lg:grid-cols-5 grid-cols-2 w-full items-center justify-evenly lg:gap-32 gap-2 px-5 lg:px-0">
              <h2 class="col-span-2 text-3xl tracking-wide font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-900">${child.Name}</h2>
               <p class="lg:col-span-1 col-span-2 text-[16px] text-[#051a3f]">${child.type}</p>
               <p class="col-span-1 text-2xl font-bold text-[#051a3f]">View</p>
            <a href="" class="col-span-1"><img src="./ASSETS/ICONS/circle.png" alt="" class="h-10"></i></a>
            </div>
            <div class="line-head flex items-center justify-center" ></div>
  `
  BarCont.innerHTML += template;
});
