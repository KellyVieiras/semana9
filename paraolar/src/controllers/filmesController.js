const  filmesJson  =  require ( "../models/filmes.json" ) ;

const  getAll  =  ( req ,  res )  =>  {
  res . status ( 200 ) . enviar ( filmesJson ) ;
} ;

const  getByTitle  =  ( req ,  res )  =>  {
  deixe  titleRequest  =  req . consulta . titulo ;
  deixe  titleFind  =  filmesJson . filtro ( ( filme )  =>
    filme . Título . toLocaleLowerCase ( ) . inclui ( titleRequest )
  ) ;

  res . status ( 200 ) . enviar ( titleFind ) ;
} ;

const  getById  =  ( req ,  res )  =>  {
  deixe  idRequest  =  req . params . id ;
  deixe  idFind  =  filmesJson . find ( ( filme )  =>  filme . id  ==  idRequest ) ;
  res . status ( 200 ) . enviar ( idFind ) ;
} ;

const  getByGenre  =  ( req ,  res )  =>  {
  deixe  genreRequest  =  req . consulta . genero ;

  let  genreFind  =  filmesJson . filtro ( ( filme )  =>
    filme . Gênero . toLocaleLowerCase ( ) . toString ( ) . inclui ( genreRequest )
  ) ;

  res . status ( 200 ) . enviar ( genreFind ) ;
} ;

const  createMovie  =  ( req ,  res )  =>  {
  let  body  =  req . corpo ;

  deixe  newMovie  =  {
    id : ( filmesJson . comprimento )  +  1 ,
    Título : corpo . Título ,
    Ano : corpo . Ano ,
    Avaliado : corpo . Avaliado ,
    Lançado : corpo . Lançado ,
    Tempo de execução : corpo . Runtime ,
    Gênero : corpo . Gênero ,
    Diretor : corpo . Diretor ,
    Escritor : corpo . Escritor ,
    Atores : corpo . Atores ,
    Trama : corpo . Enredo ,
    Linguagem : corpo . Idioma ,
    País : corpo . País ,
    Prêmios : corpo . Prêmios
}

  filmesJson . push ( newMovie ) ;

  res . status ( 201 ) . json ( [
    {
      mensagem : "Filme cadastrado com sucesso" ,
      novo filme
    }
  ] )
} ;

const  updateMovie  =  ( req ,  res )  =>  {
  const  idRequest  =  req . params . id ;
  deixe  movieRequest  =  req . corpo ;

  deixe  newMovie  =  {
    id : idRequest ,
    Título : movieRequest . Título ,
    Ano : movieRequest . Ano ,
    Avaliado : movieRequest . Avaliado ,
    Lançado : movieRequest . Lançado ,
    Tempo de execução : movieRequest . Runtime ,
    Gênero : movieRequest . Gênero ,
    Diretor : movieRequest . Diretor ,
    Escritor : movieRequest . Escritor ,
    Atores : movieRequest . Atores ,
    Sinopse : movieRequest . Enredo ,
    Idioma : movieRequest . Idioma ,
    País : movieRequest . País ,
    Prêmios : movieRequest . Prêmios
  }

  deixe  indexFind  =  filmesJson . findIndex ( filme  =>  filme . id  ==  idRequest ) ;

  filmesJson . splice ( indexFind ,  1 ,  newMovie ) ;

  res . status ( 200 ) . json ( [
    {
      "mensagem" : "Filme atualizado com sucesso" ,
      novo filme
    }
  ] )
} ;

const  updateTitle  =  ( req ,  res )  =>  {
  const  idRequest  =  req . consulta . id ;
  deixe  newTitle  =  req . corpo . Título ;

  deixe  movieFind  =  filmesJson . find ( filme  =>  filme . id  ==  idRequest ) ;

  movieFind . Title  =  newTitle ;

  res . status ( 200 ) . json ( [
    {
      "mensagem" : "Filme atualizado com sucesso" ,
      movieFind
    }
  ] )
} ;

const  updateId  =  ( req ,  res )  =>  {
  const  idRequest  =  req . params . id ;
  deixe  newTitle  =  req . corpo . Título ;

  deixe  movieFind  =  filmesJson . find ( filme  =>  filme . id  ==  idRequest ) ;

  movieFind . Title  =  newTitle ;

  res . status ( 200 ) . json ( [
    {
      "mensagem" : "Atualizado com sucesso" ,
      movieFind
    }
  ] )
} ;


const  deleteMovie  =  ( req ,  res )  =>  {
  deixe  idRequest  =  req . params . id ;
  deixe  deleteMovie  =  filmesJson . findIndex (
    filmes  =>  filmes . id  ==  idRequest
  )
  console . log ( deleteMovie )

  filmesJson . splice ( deleteMovie ,  1 ) ;
  res . status ( 200 ) . json ( [ {
    "mensagem" : "Filme deletado com sucesso" ,
    filmesJson
  } ] )
}

módulo . exportações  =  {
  getAll ,
  getById ,
  getByTitle ,
  getByGenre ,
  createMovie ,
  updateMovie ,
  updateTitle ,
  updateId ,
  deleteMovie
} ;