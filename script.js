const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button=> {
        button.addEventListener('click',function(){
            constatual - document.querySelector('.ativo')
            const proximoPasso='passo-' + this.getAttribute('data-proximo');

            atual.classList.remove('ativo');
            document.getElementById(proximoPasso).classList.add('ativo');
         })
})