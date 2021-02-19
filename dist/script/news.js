setTimeout(function () {
        location.reload();
    }, 900000);
          
//btn news - to show hidden paragraph
        let newsDiv = document.querySelector('.news')

        newsDiv.addEventListener('click', (e)=>{
        click(e.target)
        hideNews(e.target)
       
        })

        function click(e){

        if(e.classList.contains('btn-show')){
        let selected = e.parentElement.parentElement.querySelector('.hide-news-paragraph')
        let btn = e.parentElement.parentElement.querySelector('.btn-show')
        let btnHide = e.parentElement.parentElement.querySelector('.btn-hide')
        selected.style.display = 'block'
        btn.style.display = "none"
        btnHide.style.display = "inline-block"
    

        }
        }

        function hideNews(e){
        if(e.classList.contains('btn-hide')){
        let selected = e.parentElement.parentElement.querySelector('.hide-news-paragraph')
        let btn = e.parentElement.parentElement.querySelector('.btn')
        let btnHide = e.parentElement.parentElement.querySelector('.btn-hide')
        selected.style.display ="none"
        btn.style.display = "inline-block"
        btnHide.style.display = "none"

        }

}

        


