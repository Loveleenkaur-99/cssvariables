
window.onload=function(){
        const inputs= document.querySelectorAll('.controls input');
           // console.log("hello")
        function handleUpdate()
        {
            const suffix= this.dataset.sizing || '';
            document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
        }

        inputs.forEach(input => input.addEventListener('change' , handleUpdate));
        inputs.forEach(input => input.addEventListener('mousemove' , handleUpdate));
}
           
