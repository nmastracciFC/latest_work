(() => {

  let currentPosition = 0;
  let slides = document.querySelectorAll('.slides');


function getAllData() {
  let url = 'admin/phpscripts/getOrgans.php';
  fetch(url)
  .then((resp) => resp.json())
  .then((data) => genOrgans(data))
  .catch(function(error) {
    console.log(error);
  });
}

function genOrgans(data) {
  let organsCon = document.querySelector('.organs');

    data.forEach((organ,index) => {
      let docFrag = `<a class="organ-link" href="#organ-${organ.organs_id}-info"><img src="${organ.organs_path}" alt="heart" class="slides" id="organ-${organ.organs_id}"></a>`;

      organsCon.innerHTML += docFrag;
    });

    organsCon.querySelectorAll('a.organ-link').forEach((organ) => organ.addEventListener('click', getOrganData,false));
    slides = document.querySelectorAll('.slides');
    for (i = 0; i < slides.length; i++) {
      if(i !== currentPosition){
        slides[i].classList.add('hide');
      }
    }
    let leftArrow = document.querySelector('.leftArrow');
    let rightArrow = document.querySelector('.rightArrow');

    leftArrow.addEventListener('click',function(event){
      cycleSlides(event,'left');
    },false);
    rightArrow.addEventListener('click',function(event){
      cycleSlides(event,'right');
    },false);
}
//
function getOrganData(e) {
  let id;
  if(typeof e == "number"){
    id = e;
  }else{
    id = parseInt(e.currentTarget.querySelector('img').id.replace('organ-', ''));
    // currentPosition = id-1;
  }

  console.log(id);

  const url = './admin/phpscripts/getOrgans.php?id=';

  fetch(url+id)
  .then((resp) => resp.json())
  .then((data) => { processOrganResult(data,id); })
  .catch(function(error) {
    console.log(error);
  });
}


// console.log(slides);


function cycleSlides(event,direction){
  let clickedArrow = event.currentTarget;
  if(direction == 'left'){
    currentPosition = (currentPosition + 1) % slides.length;
  }
  if (direction == 'right') {
    currentPosition = currentPosition - 1;
    if(currentPosition < 0){
      currentPosition = slides.length - 1;
    }
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove('hide');
    if(i !== currentPosition){
      slides[i].classList.add('hide');
    }
  };
  getOrganData(currentPosition+1);
}
//
function processOrganResult(data) {
  let organName = document.querySelector('.organ-info h2').innerHTML = data[0].organs_name;
  let organDesc = document.querySelector('.organ-info  ul').innerHTML =  data[0].organs_desc;

  let organInfo = document.querySelector('.organ-info');
  // organInfo.classList.toggle('showInfo');

}

getAllData();

})();
