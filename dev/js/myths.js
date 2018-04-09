var mythJs = { 
   container : null,
   allMyths : [],
   positionIDs: [
     'myth-top',
     'myth-top-right',
     'myth-right',
     'myth-bottom-right',
     'myth-bottom',
     'myth-bottom-left',
     'myth-left',
     'myth-top-left',
   ],
   init:function(){
     this.container = document.querySelector('#myths-container');
     this.fetchAllMyths();
   },
   fetchAllMyths:function(){
     const URL = 'admin/phpscripts/getMyths.php';
     fetch(URL)
     .then(resp=>{
       return resp.json();
     })
     .then(myths=>{
       this.doMythicalThings(myths);
     })
     .catch(err=>{
       console.log("ERROR: ", err);
     });
   },
   doMythicalThings:function(myths){
     myths.forEach((myth,index)=>{
       this.allMyths.push(myth);
       let mythElement = this.createMythElement(myth,index);
       let _this = this;
       mythElement.addEventListener('click',function(event){
         let it = event.currentTarget;
         it.classList.toggle('selected'); //add a selected class to scss
         let positionInArray = it.dataset.index;
         let mythTitle = _this.allMyths[positionInArray].myths_title;
         let mythTruth = _this.allMyths[positionInArray].myths_desc;
         document.querySelector('#myth-info').innerHTML = `<span>MYTH: </span>${mythTitle}`;
         document.querySelector('#truth-info').innerHTML = `<span>TRUTH: </span>${mythTruth}`;
         console.log(mythTitle, mythTruth);
       },false);
       this.container.appendChild(mythElement);
     });
   },
   createMythElement:function(myth,index){
     let template = `<img data-index="${index}" id="${this.positionIDs[index]}" src="${myth.myths_image_path}" alt="death">`;
     let myVirtualDomNode = document.createElement('div');
          myVirtualDomNode.innerHTML = template;
     return myVirtualDomNode.querySelector('#'+this.positionIDs[index]);
   }
};

mythJs.init();
