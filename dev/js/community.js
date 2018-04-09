var community = {
  stories:[],
  url:'admin/phpscripts/getCommunity.php',
  container:null,
  currentrow:null,
  nodes:[],
  init:function(){
    this.container = document.querySelector('.post-container');
    this.fetchStories();
  },
  popLightbox:function(content){
    let template = `<div class="lightbox">
        <div class="close">X</div>
        <div class="back"></div>
        <div class="inner">
          <h4>${content.title}</h4>
          <h5>${content.author}</h5>
          <p>${content.story}</p>
          <div class="comments"></div>
        </div>
      </div>`;
    let node = document.createElement('div');
        node.innerHTML += template;
    // let comments = node.querySelector('.comments');
    // fetch('admin/phpscripts/getComments.php?id='+content.id)
    // .then(res=>{
    //   return res.json();
    // })
    // .then(json=>{
    //   console.log(comments);
    //   comments.forEach(comment=>{
    //     let div = comments.appendChild('div');
    //     div.innerHTML =
    //   });
    // })
    // .catch(err=>{
    //   console.log("ERROR: ",err);
    // })
        node = node.firstChild;
      document.body.appendChild(node);
      function closeLightbox(e){
        e.preventDefault();
        e.currentTarget.parentNode.parentNode.removeChild(node);
      }
      node.querySelector('.close').addEventListener('click',closeLightbox,false);
      node.querySelector('.back').addEventListener('click',closeLightbox,false);
  },
  buildBlock:function(story){
    let node = document.createElement('div');
    let contents = `<article class="${story.stories_attachment_type === 'video' ? 'video' : 'post'}">
                      <div class="inner">`;

        if(story.stories_attachment_type == 'video'){
          contents +=`<video src="${story.stories_attachment_path}"></video>`;
        }else{
          contents +=`<h4>${story.stories_title}</h4>
          <h5>${story.authors_name}</h5>
          <p class="story">${story.stories_content}</p>`;
          // <button class="read">READ</button>`;
        }
        let readMore = document.createElement('button');
            readMore.innerHTML = "READ";
            readMore.dataset.id=story.stories_id;
            readMore.addEventListener('click',(e)=>{
              e.preventDefault();
              let id = e.currentTarget.dataset.id;
              let title = e.currentTarget.parentNode.querySelector('h4').innerHTML;
              let author = e.currentTarget.parentNode.querySelector('h5').innerHTML;
              let story = e.currentTarget.parentNode.querySelector('.story').innerHTML;
              let lightboxContent = {
                id:id,
                title:title,
                author:author,
                story:story
              };
              // console.log(lightboxContent);
              this.popLightbox(lightboxContent);
            },false);
        contents +=`</div>
                    </article>`;
    node.innerHTML = contents;
    let inner = node.querySelector('.post .inner');
    if(inner){
      inner.appendChild(readMore);
    }
    return node.firstChild;
  },
  fetchStories:function(){
    let _this = this;
    fetch(_this.url).then(resp => {
      return resp.json();
    })
    .then(data => {
      let countVideos = 0;
      let videos = [];
      let stories = [];
      data.forEach(story=>{
        if(story.stories_attachment_type == 'video'){
          countVideos++;
          videos.push(story);
        }else{
          stories.push(story);
        }
      });
      let allStories = [];
      if(videos.length){
        for(var i = 1; i < data.length+1;i++){
          if(i % 3 == 1){
            let vid = videos.splice(0,1);
            if(vid.length){
              allStories.push(vid[0]);
            }
          }else{
            let text = stories.splice(0,1);
            if(text.length){
              allStories.push(text[0]);
            }
          }
        }
      }else{
        allStories = stories;
      }
      let row = 0;
      // let rowChildren = 0;
      let small = window.matchMedia("only screen and (min-width: 60em)");
      let dir = 'left';
      allStories.forEach((story,index)=>{
        if(row == 0){
          let r = document.createElement('div');
          r.classList.add('row');
          r.classList.add(dir);
          _this.currentrow = r;
          _this.container.appendChild(_this.currentrow);
          dir = dir == 'left' ? 'right' : 'left';
          rowChildren = 0;
        }
        row = (row+1)%3;
        // rowChildren++;
        let node = _this.currentrow.appendChild(_this.buildBlock(story));
        let h = node.getBoundingClientRect().width * 9/16;
        h = small.matches ? h + 'px' : 'auto';
        node.style.height = h;
        _this.nodes.push(node);
      });
      window.addEventListener('resize',function(){
        console.log(small.matches);
        _this.nodes.forEach(node=>{
          let h = node.getBoundingClientRect().width * 9/16;
          h = small.matches ? h + 'px' : 'auto';
          node.style.height =  h;
        });
      },false);
    })
    .catch(function(error) {
      console.log(error);
    });
  }
};
community.init();
