window.onload = function(){
    url="https://script.googleusercontent.com/macros/echo?user_content_key=9yvVnpg_-4HLQ-XF5ZxTpyeq3qw7viUcbnS7abqWaaS9SQngAiqLUwgbZnpHMXgOCZlXl8DcNb00I-5_ur2acSFVT_eoyZzTOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHayC90uK81h7i-wQdi8JD4SPf_c32AlmKNGzNpWq64MfhHggP0Oggtju4zeWtRD-JzjoI71j2TbW-u_EREe81pyli5RrwlKYKoAtBHn44AOQPerSLrP-4du0&lib=MfOHTVZBf3zGMpdiIQQMnCpsEPKHcN9wS"
		
		fetch(url)
  .then(response=>response.json())
  .then(data=>{//console.log(data)
	data.forEach(project => {
		const markup =  `
<div class="card rounded-3" style="width:320px; margin-top:10px;">
  <iframe class="rounded-lg" src="${project.url}"></iframe>
  <div class="card-body">
    <h4 class="card-title">${project.title}</h4>
    <a href="${project.url}" class="btn btn-primary" target="_blank">Open</a>
  </div>
</div> 
`;
		document.querySelector("#projects").insertAdjacentHTML('beforeend', markup);
	});
}).catch(error => console.log(error))
}
