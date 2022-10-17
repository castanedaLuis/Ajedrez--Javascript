function ajedrez(ancho,alto){
    for(let i= 0; i<alto; i++){
          let parrafo=''
          if(i%2 === 0){
            for(let j=0; j< ancho; j++)
            {
                  parrafo= parrafo + ' #'
            }
          }else{
            for(let j=0; j< ancho; j++){
              parrafo= parrafo + '# '
            }
          }
      console.log(parrafo)
    }
  }
  ajedrez(4,4)
  